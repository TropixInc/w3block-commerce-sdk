import axios from "axios";
import { W3blockCommerceSDK } from '../../src';
import { W3blockIdSDK } from "@w3block/sdk-id";
import SpyInstance = jest.SpyInstance;

import MockAdapter from "axios-mock-adapter";
import {
  AUTH_REFRESH,
  AUTH_TOKEN,
  JWKS,
  TENANT_ID,
  USER_CREDENTIAL,
} from "../fixtures/auth";

const mock = new MockAdapter(axios);
const getJwksResponse = JWKS;
const signInResponse = { token: AUTH_TOKEN, refreshToken: AUTH_REFRESH };

// This sets the mock adapter on the default instance
mock.onPost("/auth/signin").reply(201, signInResponse);
mock.onGet("/auth/jwks.json").reply(200, getJwksResponse);
mock.onGet("/globals/currencies").reply(200, { items: [] });
mock.onGet(/(\/companies)+([\w\-.\/])*(\/orders)/g, undefined, {asymmetricMatch: (h: any) => !h.Authorization}).reply(401);
mock.onGet(/(\/companies)+([\w\-.\/])*(\/orders)/g, undefined, {asymmetricMatch: (h: any) => !!h.Authorization}).reply(200, { items: [] });

const idBaseUrl = process.env.ID_API_BASE_URL || 'https://pixwayid.stg.pixway.io';
const commerceBaseURL = process.env.COMMERCE_API_BASE_URL || 'https://commerce.pixway.io';
describe("SDK", () => {
  let idSdk: W3blockIdSDK;
  let sdk: W3blockCommerceSDK;

  beforeEach(() => {
    idSdk = new W3blockIdSDK({ baseURL: idBaseUrl, autoRefresh: false });
    sdk = new W3blockCommerceSDK({baseURL: commerceBaseURL, idSdk})
  });

  it("should be able to create the sdk instance", async () => {
    expect(sdk).toBeDefined();
  });

  it("should be able to request public endpoints", async () => {
    expect(sdk).toBeDefined();
    const resp = await sdk.api.globals.listCurrencies();
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
    expect(resp.data.items).toBeDefined();
  });

  it("should not be able to request private endpoints", async () => {
    expect(sdk).toBeDefined();
    let resp;
    const testError = async () => {
      resp = await sdk.api.companies.listUserOrders(TENANT_ID);
    }
    await expect(testError).rejects.toThrow('Request failed with status code 401');
  })

  describe("authentication", () => {
    let authChangedSpy: SpyInstance;
    beforeEach(async () => {
      expect(idSdk.emitter).toBeDefined();
      authChangedSpy = jest.spyOn(idSdk.emitter, 'emit');
      await idSdk.authenticate(USER_CREDENTIAL);
    });

    it("should be able to authenticate with user credential", async () => {
      expect(idSdk.isAuthenticated()).toBeTruthy();
      expect(sdk.isAuthenticated()).toBeTruthy();
      expect(authChangedSpy).nthCalledWith(3, "authChanged", {"authToken": AUTH_TOKEN, "refreshToken": AUTH_REFRESH});
    });

    it("should be able to request auth only endpoints", async () => {
      expect(sdk.isAuthenticated()).toBeTruthy();
      const resp = await sdk.api.companies.listUserOrders(TENANT_ID);
      expect(resp.status).toBe(200);
      expect(resp.data).toBeDefined();
      expect(resp.data.items).toBeDefined();
    })
  })
});
