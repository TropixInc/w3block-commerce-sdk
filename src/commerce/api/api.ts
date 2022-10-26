/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderStatusEnum {
  Pending = 'pending',
  ConfirmingPayment = 'confirming_payment',
  WaitingDelivery = 'waiting_delivery',
  Delivering = 'delivering',
  Concluded = 'concluded',
  Failed = 'failed',
  Cancelled = 'cancelled',
  Expired = 'expired',
}

export interface PaginationMetaDto {
  /** @example 1 */
  itemCount: number;

  /** @example 1 */
  totalItems?: number;

  /** @example 1 */
  itemsPerPage: number;

  /** @example 1 */
  totalPages?: number;

  /** @example 1 */
  currentPage: number;
}

export interface PaginationLinksDto {
  /** @example http://example.com?page=1 */
  first?: string;

  /** @example http://example.com?page=1 */
  prev?: string;

  /** @example http://example.com?page=2 */
  next?: string;

  /** @example http://example.com?page=3 */
  last?: string;
}

export type CompanyEntity = object;

export type UserEntity = object;

export type AddressEntity = object;

export type CurrencyEntity = object;

export type OrderProductEntity = object;

export enum OrderStatus {
  Pending = 'pending',
  ConfirmingPayment = 'confirming_payment',
  WaitingDelivery = 'waiting_delivery',
  Delivering = 'delivering',
  Concluded = 'concluded',
  Failed = 'failed',
  Cancelled = 'cancelled',
  Expired = 'expired',
}

export enum PaymentProvider {
  PagarMe = 'pagar_me',
  Paypal = 'paypal',
  Stripe = 'stripe',
}

export enum PaymentMethod {
  CreditCard = 'credit_card',
  Pix = 'pix',
  Crypto = 'crypto',
}

export interface OrderEntityDto {
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  companyId: string;
  company?: CompanyEntity;
  userId: string;
  user?: UserEntity;
  destinationWalletAddress: string;
  addressId: string;
  address?: AddressEntity;
  currencyId: string;
  currency?: CurrencyEntity;
  currencyAmount: string;
  products: OrderProductEntity[];

  /** @example pending */
  status: OrderStatus;

  /** @example pagar_me */
  paymentProvider?: PaymentProvider;

  /** @example za_1012skak1 */
  providerTransactionId?: object;

  /** @example credit_card */
  paymentMethod?: PaymentMethod;

  /** @example {"paymentUrl":"https://example.com/order/1/pay"} */
  paymentInfo: object;

  /** @format date-time */
  deliverDate?: string;

  /** @format date-time */
  expiresIn?: string;
  gasFee: string;
  clientServiceFee: string;
  serviceFee: string;
}

export interface OrderEntityPaginatedDto {
  items: OrderEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface OrderProductDto {
  /** @example 3db843f4-1ee6-4f6e-a86d-b0aee938bdde */
  productId: string;

  /** @example 3062cdc2-2bd8-4143-8a04-90fc1e607794 */
  productTokenId?: string;

  /** @example 100 */
  expectedPrice: string;
}

export interface CreateOrderDto {
  orderProducts: OrderProductDto[];

  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;

  /** @example null */
  addressId?: string;

  /** @example 0xd3304183ec1fa687e380b67419875f97f1db05f5 */
  destinationWalletAddress?: string;

  /** @example ===812hgsahbncva */
  signedGasFee: string;

  /** @example https://domain.com */
  successUrl?: string;
}

export interface OrderProductPreviewDto {
  /** @example 3db843f4-1ee6-4f6e-a86d-b0aee938bdde */
  productId: string;

  /** @example 3062cdc2-2bd8-4143-8a04-90fc1e607794 */
  productTokenId?: string;
}

export interface OrderPreviewDto {
  orderProducts: any[][];

  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;
}

export enum ProductSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  StartSaleAt = 'startSaleAt',
  EndSaleAt = 'endSaleAt',
  Status = 'status',
  ContractAddress = 'contractAddress',
  Name = 'name',
}

export interface ImageDto {
  /** @format uuid */
  assetId: string;
}

export interface ProductPriceDto {
  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;

  /** @example 0.01 */
  amount: string;
}

export interface ProductDraftDto {
  /** @example null */
  keyCollectionId?: string;

  /** @example null */
  range?: string;
}

export enum ProductDistributionType {
  Random = 'random',
  Fixed = 'fixed',
  Sequential = 'sequential',
}

export enum ProductPricingType {
  Product = 'product',
  Token = 'token',
}

export interface CreateProductDto {
  /** @example ["7ca74ed3-93ff-4df9-b8a0-8308c590174b"] */
  tags: any[][];

  /** @example W3 */
  name: string;

  /** @example block */
  description: string;
  images?: ImageDto[];
  prices: ProductPriceDto[];

  /** @example random */
  distributionType: ProductDistributionType;

  /** @example product */
  pricingType: ProductPricingType;

  /**
   * @format date-time
   * @example null
   */
  startSaleAt?: string;

  /**
   * @format date-time
   * @example null
   */
  endSaleAt?: string;
  draftData: ProductDraftDto;
  slug?: string;
}

export type ProductEntity = object;

export enum ProductStatus {
  Draft = 'draft',
  Publishing = 'publishing',
  Published = 'published',
}

export interface UpdateProductDto {
  /** @example ["7ca74ed3-93ff-4df9-b8a0-8308c590174b"] */
  tags?: any[][];

  /** @example W3 */
  name?: string;

  /** @example block */
  description?: string;
  images?: ImageDto[];
  prices?: ProductPriceDto[];

  /** @example random */
  distributionType?: ProductDistributionType;

  /** @example product */
  pricingType?: ProductPricingType;

  /**
   * @format date-time
   * @example null
   */
  startSaleAt?: string;

  /**
   * @format date-time
   * @example null
   */
  endSaleAt?: string;
  draftData?: ProductDraftDto;
  slug?: string;
}

export enum ProductOrderRuleSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export interface CreateProductOrderRuleDto {
  /**
   * @format date-time
   * @example null
   */
  startAt?: string;

  /**
   * @format date-time
   * @example null
   */
  endAt?: string;

  /** @example null */
  purchaseLimit?: number;

  /** @format uuid */
  whitelistId: string;
}

export interface UpdateProductOrderRuleDto {
  /**
   * @format date-time
   * @example null
   */
  startAt?: string;

  /**
   * @format date-time
   * @example null
   */
  endAt?: string;

  /** @example null */
  purchaseLimit?: number;

  /** @format uuid */
  whitelistId?: string;
}

export enum PaymentProviderEnum {
  PagarMe = 'pagar_me',
  Paypal = 'paypal',
  Stripe = 'stripe',
}

export interface CurrencyPaymentProviderEntityDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  currencyId?: string;
  paymentProvider?: PaymentProviderEnum;
}

export interface CurrencyEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  name: string;
  crypto?: boolean;
  paymentProviders?: CurrencyPaymentProviderEntityDto[];
}

export interface CurrencyEntityPaginatedDto {
  items: CurrencyEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface TagDto {
  /** @example Tag 1 */
  name: string;

  /**
   * @format uuid
   * @example null
   */
  parentId?: string;

  /** @example false */
  hide: boolean;
}

export interface NestedTagsEntityDto {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  companyId?: string;
  name?: string;
  products?: ProductEntity[];

  /** @format uuid */
  parentId?: string;
  hide?: boolean;
}

export interface TagsEntityDto {
  /** @format uuid */
  id: string;

  /** @format uuid */
  companyId: string;
  name: string;
  products: ProductEntity[];

  /** @format uuid */
  parentId?: string;
  parent?: NestedTagsEntityDto;
  hide: boolean;
  children: NestedTagsEntityDto[];
}

export enum TagsSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  ParentId = 'parentId',
  Hide = 'hide',
}

export interface TagsEntityPaginated {
  items: TagsEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CompanyEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  name?: string;
}

export interface ImageResponseDto {
  /** @format uuid */
  assetId: string;

  /** @example https://dummyimage.com/200x200/fff/000 */
  thumb: string;

  /** @example https://dummyimage.com/600x400/fff/000 */
  original: string;
}

export interface BannerResponseDto {
  /** @example Banner description */
  text?: string;

  /** @example Click */
  buttonText?: string;

  /** @example https://w3block.io */
  buttonLink?: string;
  image: ImageResponseDto;
}

export interface DeliverDelayDto {
  /** @example credit_card */
  paymentMethod: PaymentMethod;

  /** @example 259200000 */
  delay: number;
}

export interface CompanyConfigurationEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  company?: CompanyEntityDto;
  banners?: BannerResponseDto[];
  deliveryDelays?: DeliverDelayDto[];
  domain?: string;
  logo?: string;
  operatorWalletAddress?: string;
  paymentProviders?: any[][];
  clientServiceFeePercentage: number;
  companyServiceFeePercentage: number;
}

export interface BannerDto {
  /** @example Banner description */
  text?: string;

  /** @example Click */
  buttonText?: string;

  /** @example https://w3block.io */
  buttonLink?: string;
  image: ImageDto;
}

export interface UpdateCompanyConfigurationsDto {
  /** @example https://w3block.io/images/1.png */
  logo?: string;
  banners?: BannerDto[];
  deliverDelays?: DeliverDelayDto[];
}

export interface SetCompanyCurrencyPaymentProviderDto {
  /** @example pagar_me */
  paymentProvider: PaymentProviderEnum;
}

export interface CreatePagarMePaymentProviderDto {
  secretKey: string;
  checkoutExpireTime?: number;
  successUrl?: string;
}

export interface CreatePaypalPaymentProviderDto {
  secret: string;

  /** @format uuid */
  clientId: string;
  url: string;
  checkoutExpireTime?: number;
  successUrl?: string;
}

export interface CreateStripePaymentProviderDto {
  successConnectUrl: string;
  refreshConnectUrl: string;
  checkoutExpireTime?: number;
  successUrl?: string;
}

export interface StripeConnectAccountResponseDto {
  url: string;
}

export interface RefreshStripePaymentProviderDto {
  successConnectUrl: string;
  refreshConnectUrl: string;
}

export interface WebhooksConfigurationEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  company?: CompanyEntityDto;

  /** @example https://mydomain.hook.me */
  webhookUrl: string;
  signatureKey: string;

  /** @example 5 */
  maxRetries?: number;
  disabled: boolean;
}

export interface WebhooksConfigurationEntityPaginatedDto {
  items: WebhooksConfigurationEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateOrUpdateWebhooksConfigurationDto {
  /** @example https://w3block.io/webhooks/test */
  webhookUrl: string;

  /** @example 5 */
  maxRetries?: number;
}

export interface WebhookDataDto {
  /** @example https://mydomain.hook.me */
  url: string;

  /** @example {"Authorization":"*******"} */
  headers?: object;

  /** @example {"type":"purchase","productId":"00000000-000000-00000-000"} */
  body?: object;
}

export enum WebhookStatusEnum {
  Sending = 'sending',
  Concluded = 'concluded',
  Failed = 'failed',
}

export interface WebhookEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  company?: CompanyEntityDto;

  /** @format uuid */
  configurationId?: string;
  configuration?: WebhooksConfigurationEntityDto;

  /** @example concluded */
  status: WebhookStatusEnum;

  /** @example 0 */
  errors: number;
  data: WebhookDataDto;

  /** @example null */
  lastResult?: object;
}

export interface WebhookEntityPaginatedDto {
  items: WebhookEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export enum AssetTypeEnum {
  Image = 'image',
  Video = 'video',
}

export interface RequestAssetUploadDto {
  /** @example image */
  type: AssetTypeEnum;
}

export enum AssetStatusEnum {
  WaitingUpload = 'waiting_upload',
  WaitingAssociation = 'waiting_association',
  Associated = 'associated',
  Excluded = 'excluded',
  Expired = 'expired',
}

export enum AssetProviderEnum {
  Cloudinary = 'cloudinary',
}

export interface AssetEntityWithSignatureDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  company?: CompanyEntityDto;

  /** @example image */
  type: AssetTypeEnum;

  /** @example associated */
  status: AssetStatusEnum;

  /** @example cloudinary */
  provider: AssetProviderEnum;

  /** @example https://dummyimage.com/200x200/fff/000 */
  directLink?: string;

  /** @example bfd09f95f331f558cbd1320e67aa8d488770583e */
  signature: string;

  /** @example 1666215568 */
  timestamp: number;

  /** @example filename_override=false&public_id=commerce/3fa85f64-5717-4562-b3fc-2c963f66afa6&timestamp=1666215568&unique_filename=true */
  params: string;
}

export interface I18NItemDto {
  /** @example Algum texto em pt-br */
  'pt-br': string;

  /** @example Some text in en */
  en: string;
}

export interface FaqItemsEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  question: I18NItemDto;
  answer: I18NItemDto;

  /** @example https://myquestion.should.move.to/ */
  externalUrl?: string;
}

export interface FaqItemsEntityPaginatedDto {
  items: FaqItemsEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface FaqContextEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId?: string;
  company?: CompanyEntityDto;

  /** @example pre_sale */
  name: string;
}

export interface FaqContextEntityPaginatedDto {
  items: FaqContextEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateFaqContextDto {
  /** @example pre_sale */
  name: string;
}

export interface FaqContextItemDto {
  /** @format uuid */
  id: string;

  /** @example 0 */
  relevance: number;
}

export interface CreateFaqContextItemDto {
  question: I18NItemDto;
  answer: I18NItemDto;

  /** @example https://myquestion.should.move.to/ */
  externalUrl?: string;
  contexts: FaqContextItemDto[];
}

export namespace Companies {
  /**
   * No description
   * @tags Orders
   * @name ListUserOrders
   * @request GET:/companies/{companyId}/orders
   * @secure
   */
  export namespace ListUserOrders {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      status?: OrderStatusEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityPaginatedDto;
  }
  /**
   * No description
   * @tags Orders
   * @name CreateOrder
   * @request POST:/companies/{companyId}/orders
   * @secure
   */
  export namespace CreateOrder {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateOrderDto;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityDto;
  }
  /**
   * No description
   * @tags Orders
   * @name GetUserOrder
   * @request GET:/companies/{companyId}/orders/{orderId}
   * @secure
   */
  export namespace GetUserOrder {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityDto;
  }
  /**
   * No description
   * @tags Orders
   * @name ComputeOrderPreview
   * @request POST:/companies/{companyId}/orders/preview
   * @secure
   */
  export namespace ComputeOrderPreview {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = OrderPreviewDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products
   * @name ListProducts
   * @request GET:/companies/{companyId}/products
   * @secure
   */
  export namespace ListProducts {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: ProductSortBy;
      orderBy?: OrderByEnum;
      includeMetadata?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products
   * @name CanPurchaseProduct
   * @request GET:/companies/{companyId}/products/{productId}/can-purchase
   * @secure
   */
  export namespace CanPurchaseProduct {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists FAQ items (questions/answers) inside a context by name including global faq contexts and specific company faq context items
   * @tags Faq
   * @name ListFaq
   * @request GET:/companies/{companyId}/faq
   * @secure
   */
  export namespace ListFaq {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      contextId?: string;
      name?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityPaginatedDto;
  }
}

export namespace Admin {
  /**
   * No description
   * @tags Orders (Admin)
   * @name ListOrders
   * @request GET:/admin/companies/{companyId}/orders
   * @secure
   */
  export namespace ListOrders {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      status?: OrderStatusEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityPaginatedDto;
  }
  /**
   * No description
   * @tags Orders (Admin)
   * @name CancelOrder
   * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/cancel
   * @secure
   */
  export namespace CancelOrder {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Orders (Admin)
   * @name ForceOrderDeliver
   * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/force-deliver
   * @secure
   */
  export namespace ForceOrderDeliver {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name CreateProduct
   * @request POST:/admin/companies/{companyId}/products
   * @secure
   */
  export namespace CreateProduct {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateProductDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProductEntity;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name FindProducts
   * @request GET:/admin/companies/{companyId}/products
   * @secure
   */
  export namespace FindProducts {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: ProductSortBy;
      orderBy?: OrderByEnum;
      includeMetadata?: boolean;
      status?: ProductStatus;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name GetProduct
   * @request GET:/admin/companies/{companyId}/products/{productId}
   * @secure
   */
  export namespace GetProduct {
    export type RequestParams = { productId: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name UpdateProduct
   * @request PATCH:/admin/companies/{companyId}/products/{productId}
   * @secure
   */
  export namespace UpdateProduct {
    export type RequestParams = { productId: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateProductDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name GetProductBySlug
   * @request GET:/admin/companies/{companyId}/products/get-by-slug/{slug}
   * @secure
   */
  export namespace GetProductBySlug {
    export type RequestParams = { companyId: string; slug: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name PublishProduct
   * @request PATCH:/admin/companies/{companyId}/products/{productId}/publish
   * @secure
   */
  export namespace PublishProduct {
    export type RequestParams = { productId: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name FindProductOrderRules
   * @request GET:/admin/companies/{companyId}/products/{productId}/order-rules
   * @secure
   */
  export namespace FindProductOrderRules {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: ProductOrderRuleSortBy;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name CreateProductOrderRule
   * @request POST:/admin/companies/{companyId}/products/{productId}/order-rules
   * @secure
   */
  export namespace CreateProductOrderRule {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateProductOrderRuleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name GetProductOrderRule
   * @request GET:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
   * @secure
   */
  export namespace GetProductOrderRule {
    export type RequestParams = { companyId: string; productId: string; orderRuleId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name UpdateProductOrderRule
   * @request PATCH:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
   * @secure
   */
  export namespace UpdateProductOrderRule {
    export type RequestParams = { companyId: string; productId: string; orderRuleId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateProductOrderRuleDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products (Admin)
   * @name DeleteProductOrderRule
   * @request DELETE:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
   * @secure
   */
  export namespace DeleteProductOrderRule {
    export type RequestParams = { companyId: string; productId: string; orderRuleId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Create a company tag
   * @tags Tags (Admin)
   * @name CreateTag
   * @request POST:/admin/companies/{companyId}/tags
   * @secure
   */
  export namespace CreateTag {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = TagDto;
    export type RequestHeaders = {};
    export type ResponseBody = TagsEntityDto;
  }
  /**
   * @description Get all company tags paginated
   * @tags Tags (Admin)
   * @name ListTags
   * @request GET:/admin/companies/{companyId}/tags
   * @secure
   */
  export namespace ListTags {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: TagsSortBy;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagsEntityPaginated;
  }
  /**
   * @description Get some company tag by id
   * @tags Tags (Admin)
   * @name GetTag
   * @request GET:/admin/companies/{companyId}/tags/{id}
   * @secure
   */
  export namespace GetTag {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TagsEntityDto;
  }
  /**
   * @description Updates some company tag
   * @tags Tags (Admin)
   * @name UpdateTag
   * @request PATCH:/admin/companies/{companyId}/tags/{id}
   * @secure
   */
  export namespace UpdateTag {
    export type RequestParams = { id: string; companyId: string };
    export type RequestQuery = {};
    export type RequestBody = TagDto;
    export type RequestHeaders = {};
    export type ResponseBody = TagsEntityDto;
  }
  /**
   * @description Gets company configurations
   * @tags Companies (Admin)
   * @name GetCompanyConfigurations
   * @request GET:/admin/companies/{companyId}/configurations
   * @secure
   */
  export namespace GetCompanyConfigurations {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
  }
  /**
   * @description Updates company configurations
   * @tags Companies (Admin)
   * @name UpdateCompanyConfigurations
   * @request PATCH:/admin/companies/{companyId}/configurations
   * @secure
   */
  export namespace UpdateCompanyConfigurations {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanyConfigurationsDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
  }
  /**
   * @description Set a company payment provider to be used in some currency purchases
   * @tags Companies (Admin)
   * @name SetCompanyCurrencyPaymentProvider
   * @request PATCH:/admin/companies/{companyId}/configurations/currencies/{currencyId}
   * @secure
   */
  export namespace SetCompanyCurrencyPaymentProvider {
    export type RequestParams = { companyId: string; currencyId: string };
    export type RequestQuery = {};
    export type RequestBody = SetCompanyCurrencyPaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Configures/Refresh configuration of Pagar.me payment provider in the company
   * @tags Companies (Admin)
   * @name ConfigurePagarMePaymentProvider
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/pagar-me
   * @secure
   */
  export namespace ConfigurePagarMePaymentProvider {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreatePagarMePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
  }
  /**
   * @description Configures/Refresh configuration of Paypal payment provider in the company
   * @tags Companies (Admin)
   * @name ConfigurePaypalPaymentProvider
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/paypal
   * @secure
   */
  export namespace ConfigurePaypalPaymentProvider {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreatePaypalPaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
  }
  /**
   * @description Request a configuration of Stripe payment provider in the company (needs to be finished with oauth connection)
   * @tags Companies (Admin)
   * @name RequestStripePaymentProviderConfiguration
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe
   * @secure
   */
  export namespace RequestStripePaymentProviderConfiguration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateStripePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = StripeConnectAccountResponseDto;
  }
  /**
   * @description Finish connection of Stripe payment provider configuration
   * @tags Companies (Admin)
   * @name FinishStripePaymentProviderConfiguration
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe/finish-connection
   * @secure
   */
  export namespace FinishStripePaymentProviderConfiguration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Refresh Stripe payment provider connection
   * @tags Companies (Admin)
   * @name RefreshStripePaymentProviderConfiguration
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe/refresh-connection
   * @secure
   */
  export namespace RefreshStripePaymentProviderConfiguration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = RefreshStripePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = StripeConnectAccountResponseDto;
  }
  /**
   * @description Deletes some company payment provider configuration
   * @tags Companies (Admin)
   * @name DeletePaymentProviderConfiguration
   * @request DELETE:/admin/companies/{companyId}/configurations/providers/{provider}
   * @secure
   */
  export namespace DeletePaymentProviderConfiguration {
    export type RequestParams = { companyId: string; provider: PaymentProviderEnum };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all company webhooks configurations
   * @tags Companies Webhooks Configurations (Admin)
   * @name ListWebhooksConfigurations
   * @request GET:/admin/companies/{companyId}/webhooks-configurations
   * @secure
   */
  export namespace ListWebhooksConfigurations {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WebhooksConfigurationEntityPaginatedDto;
  }
  /**
   * @description Creates a new company webhooks configuration
   * @tags Companies Webhooks Configurations (Admin)
   * @name CreateWebhooksConfiguration
   * @request POST:/admin/companies/{companyId}/webhooks-configurations
   * @secure
   */
  export namespace CreateWebhooksConfiguration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateOrUpdateWebhooksConfigurationDto;
    export type RequestHeaders = {};
    export type ResponseBody = WebhooksConfigurationEntityDto;
  }
  /**
   * @description Gets some company webhooks configuration
   * @tags Companies Webhooks Configurations (Admin)
   * @name GetWebhookConfiguration
   * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}
   * @secure
   */
  export namespace GetWebhookConfiguration {
    export type RequestParams = { companyId: string; configurationId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WebhooksConfigurationEntityDto;
  }
  /**
   * @description Updates some company webhooks configuration
   * @tags Companies Webhooks Configurations (Admin)
   * @name UpdateWebhooksConfiguration
   * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}
   * @secure
   */
  export namespace UpdateWebhooksConfiguration {
    export type RequestParams = { companyId: string; configurationId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateOrUpdateWebhooksConfigurationDto;
    export type RequestHeaders = {};
    export type ResponseBody = WebhooksConfigurationEntityDto;
  }
  /**
   * @description Enables some company webhooks configuration
   * @tags Companies Webhooks Configurations (Admin)
   * @name EnableWebhooksConfiguration
   * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/enable
   * @secure
   */
  export namespace EnableWebhooksConfiguration {
    export type RequestParams = { companyId: string; configurationId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Disables some company webhooks configuration
   * @tags Companies Webhooks Configurations (Admin)
   * @name DisableWebhooksConfiguration
   * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/disable
   * @secure
   */
  export namespace DisableWebhooksConfiguration {
    export type RequestParams = { companyId: string; configurationId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all webhooks sent using some webhooks configuration of company
   * @tags Companies Webhooks Configurations (Admin)
   * @name ListWebhooksConfigurationWebhooks
   * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/webhooks
   * @secure
   */
  export namespace ListWebhooksConfigurationWebhooks {
    export type RequestParams = { companyId: string; configurationId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WebhookEntityPaginatedDto;
  }
  /**
   * @description Gets some company webhooks configuration sent webhook
   * @tags Companies Webhooks Configurations (Admin)
   * @name GetWebhookConfigurationWebhook
   * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/webhooks/{webhookId}
   * @secure
   */
  export namespace GetWebhookConfigurationWebhook {
    export type RequestParams = { companyId: string; configurationId: string; webhookId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WebhookEntityDto;
  }
  /**
   * @description Creates a new request to upload some asset (image or video) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
   * @tags Assets (Admin)
   * @name RequestAssetUpload
   * @request POST:/admin/companies/{companyId}/assets
   * @secure
   */
  export namespace RequestAssetUpload {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = RequestAssetUploadDto;
    export type RequestHeaders = {};
    export type ResponseBody = AssetEntityWithSignatureDto;
  }
  /**
   * @description Lists all company FAQ contexts
   * @tags Faq (Admin)
   * @name ListFaqContexts
   * @request GET:/admin/companies/{companyId}/faq/contexts
   * @secure
   */
  export namespace ListFaqContexts {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqContextEntityPaginatedDto;
  }
  /**
   * @description Creates a new FAQ context for a company
   * @tags Faq (Admin)
   * @name CreateFaqContext
   * @request POST:/admin/companies/{companyId}/faq/contexts
   * @secure
   */
  export namespace CreateFaqContext {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateFaqContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = FaqContextEntityDto;
  }
  /**
   * @description Gets a company FAQ context
   * @tags Faq (Admin)
   * @name GetFaqContext
   * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}
   * @secure
   */
  export namespace GetFaqContext {
    export type RequestParams = { companyId: string; contextId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqContextEntityDto;
  }
  /**
   * @description Updates some company FAQ context
   * @tags Faq (Admin)
   * @name UpdateFaqContext
   * @request PATCH:/admin/companies/{companyId}/faq/contexts/{contextId}
   * @secure
   */
  export namespace UpdateFaqContext {
    export type RequestParams = { companyId: string; contextId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateFaqContextDto;
    export type RequestHeaders = {};
    export type ResponseBody = FaqContextEntityDto;
  }
  /**
   * @description Lists all FAQ items inside some company context
   * @tags Faq (Admin)
   * @name ListFaqContextItems
   * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}/items
   * @secure
   */
  export namespace ListFaqContextItems {
    export type RequestParams = { companyId: string; contextId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityPaginatedDto;
  }
  /**
   * @description Gets company context FAQ item by id
   * @tags Faq (Admin)
   * @name GetFaqContextItem
   * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}/items/{faqItemId}
   * @secure
   */
  export namespace GetFaqContextItem {
    export type RequestParams = { companyId: string; contextId: string; faqItemId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityDto;
  }
  /**
   * @description Lists all company FAQ items which are associated to some company context
   * @tags Faq (Admin)
   * @name ListFaqItems
   * @request GET:/admin/companies/{companyId}/faq/items
   * @secure
   */
  export namespace ListFaqItems {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityPaginatedDto;
  }
  /**
   * @description Creates a new FAQ item inside one or more company contexts
   * @tags Faq (Admin)
   * @name CreateFaqItem
   * @request POST:/admin/companies/{companyId}/faq/items
   * @secure
   */
  export namespace CreateFaqItem {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateFaqContextItemDto;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityDto;
  }
  /**
   * @description Gets a company FAQ item by id
   * @tags Faq (Admin)
   * @name GetFaqItem
   * @request GET:/admin/companies/{companyId}/faq/items/{faqItemId}
   * @secure
   */
  export namespace GetFaqItem {
    export type RequestParams = { companyId: string; faqItemId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityDto;
  }
  /**
   * @description Updates some FAQ item and associate/disassociate it contexts
   * @tags Faq (Admin)
   * @name UpdateFaqItem
   * @request PATCH:/admin/companies/{companyId}/faq/items/{faqItemId}
   * @secure
   */
  export namespace UpdateFaqItem {
    export type RequestParams = { companyId: string; faqItemId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateFaqContextItemDto;
    export type RequestHeaders = {};
    export type ResponseBody = FaqItemsEntityDto;
  }
}

export namespace Globals {
  /**
   * @description Lists system available currencies and its supported payment providers
   * @tags Globals
   * @name ListCurrencies
   * @request GET:/globals/currencies
   * @secure
   */
  export namespace ListCurrencies {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CurrencyEntityPaginatedDto;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://commerce.stg.pixway.io' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title commerce-backend
 * @version 1.0.0
 * @baseUrl https://commerce.stg.pixway.io
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  companies = {
    /**
     * No description
     *
     * @tags Orders
     * @name ListUserOrders
     * @request GET:/companies/{companyId}/orders
     * @secure
     */
    listUserOrders: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        status?: OrderStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderEntityPaginatedDto, void>({
        path: `/companies/${companyId}/orders`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name CreateOrder
     * @request POST:/companies/{companyId}/orders
     * @secure
     */
    createOrder: (companyId: string, data: CreateOrderDto, params: RequestParams = {}) =>
      this.request<OrderEntityDto, void>({
        path: `/companies/${companyId}/orders`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name GetUserOrder
     * @request GET:/companies/{companyId}/orders/{orderId}
     * @secure
     */
    getUserOrder: (companyId: string, orderId: string, params: RequestParams = {}) =>
      this.request<OrderEntityDto, void>({
        path: `/companies/${companyId}/orders/${orderId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name ComputeOrderPreview
     * @request POST:/companies/{companyId}/orders/preview
     * @secure
     */
    computeOrderPreview: (companyId: string, data: OrderPreviewDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/orders/preview`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ListProducts
     * @request GET:/companies/{companyId}/products
     * @secure
     */
    listProducts: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: ProductSortBy;
        orderBy?: OrderByEnum;
        includeMetadata?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/companies/${companyId}/products`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name CanPurchaseProduct
     * @request GET:/companies/{companyId}/products/{productId}/can-purchase
     * @secure
     */
    canPurchaseProduct: (companyId: string, productId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/companies/${companyId}/products/${productId}/can-purchase`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists FAQ items (questions/answers) inside a context by name including global faq contexts and specific company faq context items
     *
     * @tags Faq
     * @name ListFaq
     * @request GET:/companies/{companyId}/faq
     * @secure
     */
    listFaq: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        contextId?: string;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FaqItemsEntityPaginatedDto, any>({
        path: `/companies/${companyId}/faq`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Orders (Admin)
     * @name ListOrders
     * @request GET:/admin/companies/{companyId}/orders
     * @secure
     */
    listOrders: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        status?: OrderStatusEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<OrderEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/orders`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders (Admin)
     * @name CancelOrder
     * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/cancel
     * @secure
     */
    cancelOrder: (companyId: string, orderId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/cancel`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders (Admin)
     * @name ForceOrderDeliver
     * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/force-deliver
     * @secure
     */
    forceOrderDeliver: (companyId: string, orderId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/force-deliver`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name CreateProduct
     * @request POST:/admin/companies/{companyId}/products
     * @secure
     */
    createProduct: (companyId: string, data: CreateProductDto, params: RequestParams = {}) =>
      this.request<ProductEntity, void>({
        path: `/admin/companies/${companyId}/products`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name FindProducts
     * @request GET:/admin/companies/{companyId}/products
     * @secure
     */
    findProducts: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: ProductSortBy;
        orderBy?: OrderByEnum;
        includeMetadata?: boolean;
        status?: ProductStatus;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name GetProduct
     * @request GET:/admin/companies/{companyId}/products/{productId}
     * @secure
     */
    getProduct: (productId: string, companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name UpdateProduct
     * @request PATCH:/admin/companies/{companyId}/products/{productId}
     * @secure
     */
    updateProduct: (productId: string, companyId: string, data: UpdateProductDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name GetProductBySlug
     * @request GET:/admin/companies/{companyId}/products/get-by-slug/{slug}
     * @secure
     */
    getProductBySlug: (companyId: string, slug: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/get-by-slug/${slug}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name PublishProduct
     * @request PATCH:/admin/companies/{companyId}/products/{productId}/publish
     * @secure
     */
    publishProduct: (productId: string, companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/publish`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name FindProductOrderRules
     * @request GET:/admin/companies/{companyId}/products/{productId}/order-rules
     * @secure
     */
    findProductOrderRules: (
      companyId: string,
      productId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: ProductOrderRuleSortBy;
        orderBy?: OrderByEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/order-rules`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name CreateProductOrderRule
     * @request POST:/admin/companies/{companyId}/products/{productId}/order-rules
     * @secure
     */
    createProductOrderRule: (
      companyId: string,
      productId: string,
      data: CreateProductOrderRuleDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/order-rules`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name GetProductOrderRule
     * @request GET:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
     * @secure
     */
    getProductOrderRule: (companyId: string, productId: string, orderRuleId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/order-rules/${orderRuleId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name UpdateProductOrderRule
     * @request PATCH:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
     * @secure
     */
    updateProductOrderRule: (
      companyId: string,
      productId: string,
      orderRuleId: string,
      data: UpdateProductOrderRuleDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/order-rules/${orderRuleId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products (Admin)
     * @name DeleteProductOrderRule
     * @request DELETE:/admin/companies/{companyId}/products/{productId}/order-rules/{orderRuleId}
     * @secure
     */
    deleteProductOrderRule: (companyId: string, productId: string, orderRuleId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/order-rules/${orderRuleId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Create a company tag
     *
     * @tags Tags (Admin)
     * @name CreateTag
     * @request POST:/admin/companies/{companyId}/tags
     * @secure
     */
    createTag: (companyId: string, data: TagDto, params: RequestParams = {}) =>
      this.request<TagsEntityDto, void>({
        path: `/admin/companies/${companyId}/tags`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all company tags paginated
     *
     * @tags Tags (Admin)
     * @name ListTags
     * @request GET:/admin/companies/{companyId}/tags
     * @secure
     */
    listTags: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: TagsSortBy; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<TagsEntityPaginated, void>({
        path: `/admin/companies/${companyId}/tags`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get some company tag by id
     *
     * @tags Tags (Admin)
     * @name GetTag
     * @request GET:/admin/companies/{companyId}/tags/{id}
     * @secure
     */
    getTag: (id: string, companyId: string, params: RequestParams = {}) =>
      this.request<TagsEntityDto, void>({
        path: `/admin/companies/${companyId}/tags/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company tag
     *
     * @tags Tags (Admin)
     * @name UpdateTag
     * @request PATCH:/admin/companies/{companyId}/tags/{id}
     * @secure
     */
    updateTag: (id: string, companyId: string, data: TagDto, params: RequestParams = {}) =>
      this.request<TagsEntityDto, void>({
        path: `/admin/companies/${companyId}/tags/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets company configurations
     *
     * @tags Companies (Admin)
     * @name GetCompanyConfigurations
     * @request GET:/admin/companies/{companyId}/configurations
     * @secure
     */
    getCompanyConfigurations: (companyId: string, params: RequestParams = {}) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates company configurations
     *
     * @tags Companies (Admin)
     * @name UpdateCompanyConfigurations
     * @request PATCH:/admin/companies/{companyId}/configurations
     * @secure
     */
    updateCompanyConfigurations: (
      companyId: string,
      data: UpdateCompanyConfigurationsDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Set a company payment provider to be used in some currency purchases
     *
     * @tags Companies (Admin)
     * @name SetCompanyCurrencyPaymentProvider
     * @request PATCH:/admin/companies/{companyId}/configurations/currencies/{currencyId}
     * @secure
     */
    setCompanyCurrencyPaymentProvider: (
      companyId: string,
      currencyId: string,
      data: SetCompanyCurrencyPaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/configurations/currencies/${currencyId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Configures/Refresh configuration of Pagar.me payment provider in the company
     *
     * @tags Companies (Admin)
     * @name ConfigurePagarMePaymentProvider
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/pagar-me
     * @secure
     */
    configurePagarMePaymentProvider: (
      companyId: string,
      data: CreatePagarMePaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/pagar-me`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Configures/Refresh configuration of Paypal payment provider in the company
     *
     * @tags Companies (Admin)
     * @name ConfigurePaypalPaymentProvider
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/paypal
     * @secure
     */
    configurePaypalPaymentProvider: (
      companyId: string,
      data: CreatePaypalPaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/paypal`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Request a configuration of Stripe payment provider in the company (needs to be finished with oauth connection)
     *
     * @tags Companies (Admin)
     * @name RequestStripePaymentProviderConfiguration
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe
     * @secure
     */
    requestStripePaymentProviderConfiguration: (
      companyId: string,
      data: CreateStripePaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<StripeConnectAccountResponseDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/stripe`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Finish connection of Stripe payment provider configuration
     *
     * @tags Companies (Admin)
     * @name FinishStripePaymentProviderConfiguration
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe/finish-connection
     * @secure
     */
    finishStripePaymentProviderConfiguration: (companyId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/configurations/providers/stripe/finish-connection`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Refresh Stripe payment provider connection
     *
     * @tags Companies (Admin)
     * @name RefreshStripePaymentProviderConfiguration
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/stripe/refresh-connection
     * @secure
     */
    refreshStripePaymentProviderConfiguration: (
      companyId: string,
      data: RefreshStripePaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<StripeConnectAccountResponseDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/stripe/refresh-connection`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company payment provider configuration
     *
     * @tags Companies (Admin)
     * @name DeletePaymentProviderConfiguration
     * @request DELETE:/admin/companies/{companyId}/configurations/providers/{provider}
     * @secure
     */
    deletePaymentProviderConfiguration: (
      companyId: string,
      provider: PaymentProviderEnum,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/configurations/providers/${provider}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all company webhooks configurations
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name ListWebhooksConfigurations
     * @request GET:/admin/companies/{companyId}/webhooks-configurations
     * @secure
     */
    listWebhooksConfigurations: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<WebhooksConfigurationEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company webhooks configuration
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name CreateWebhooksConfiguration
     * @request POST:/admin/companies/{companyId}/webhooks-configurations
     * @secure
     */
    createWebhooksConfiguration: (
      companyId: string,
      data: CreateOrUpdateWebhooksConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company webhooks configuration
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name GetWebhookConfiguration
     * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}
     * @secure
     */
    getWebhookConfiguration: (companyId: string, configurationId: string, params: RequestParams = {}) =>
      this.request<WebhooksConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company webhooks configuration
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name UpdateWebhooksConfiguration
     * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}
     * @secure
     */
    updateWebhooksConfiguration: (
      companyId: string,
      configurationId: string,
      data: CreateOrUpdateWebhooksConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<WebhooksConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Enables some company webhooks configuration
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name EnableWebhooksConfiguration
     * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/enable
     * @secure
     */
    enableWebhooksConfiguration: (companyId: string, configurationId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}/enable`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Disables some company webhooks configuration
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name DisableWebhooksConfiguration
     * @request PATCH:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/disable
     * @secure
     */
    disableWebhooksConfiguration: (companyId: string, configurationId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}/disable`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all webhooks sent using some webhooks configuration of company
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name ListWebhooksConfigurationWebhooks
     * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/webhooks
     * @secure
     */
    listWebhooksConfigurationWebhooks: (
      companyId: string,
      configurationId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<WebhookEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}/webhooks`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company webhooks configuration sent webhook
     *
     * @tags Companies Webhooks Configurations (Admin)
     * @name GetWebhookConfigurationWebhook
     * @request GET:/admin/companies/{companyId}/webhooks-configurations/{configurationId}/webhooks/{webhookId}
     * @secure
     */
    getWebhookConfigurationWebhook: (
      companyId: string,
      configurationId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookEntityDto, void>({
        path: `/admin/companies/${companyId}/webhooks-configurations/${configurationId}/webhooks/${webhookId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new request to upload some asset (image or video) in our service. You must use this endpoint response to upload assets using the specific provider apis (ex: Cloudinary)
     *
     * @tags Assets (Admin)
     * @name RequestAssetUpload
     * @request POST:/admin/companies/{companyId}/assets
     * @secure
     */
    requestAssetUpload: (companyId: string, data: RequestAssetUploadDto, params: RequestParams = {}) =>
      this.request<AssetEntityWithSignatureDto, void>({
        path: `/admin/companies/${companyId}/assets`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all company FAQ contexts
     *
     * @tags Faq (Admin)
     * @name ListFaqContexts
     * @request GET:/admin/companies/{companyId}/faq/contexts
     * @secure
     */
    listFaqContexts: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<FaqContextEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new FAQ context for a company
     *
     * @tags Faq (Admin)
     * @name CreateFaqContext
     * @request POST:/admin/companies/{companyId}/faq/contexts
     * @secure
     */
    createFaqContext: (companyId: string, data: CreateFaqContextDto, params: RequestParams = {}) =>
      this.request<FaqContextEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets a company FAQ context
     *
     * @tags Faq (Admin)
     * @name GetFaqContext
     * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}
     * @secure
     */
    getFaqContext: (companyId: string, contextId: string, params: RequestParams = {}) =>
      this.request<FaqContextEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts/${contextId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company FAQ context
     *
     * @tags Faq (Admin)
     * @name UpdateFaqContext
     * @request PATCH:/admin/companies/{companyId}/faq/contexts/{contextId}
     * @secure
     */
    updateFaqContext: (companyId: string, contextId: string, data: CreateFaqContextDto, params: RequestParams = {}) =>
      this.request<FaqContextEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts/${contextId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all FAQ items inside some company context
     *
     * @tags Faq (Admin)
     * @name ListFaqContextItems
     * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}/items
     * @secure
     */
    listFaqContextItems: (
      companyId: string,
      contextId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<FaqItemsEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts/${contextId}/items`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets company context FAQ item by id
     *
     * @tags Faq (Admin)
     * @name GetFaqContextItem
     * @request GET:/admin/companies/{companyId}/faq/contexts/{contextId}/items/{faqItemId}
     * @secure
     */
    getFaqContextItem: (companyId: string, contextId: string, faqItemId: string, params: RequestParams = {}) =>
      this.request<FaqItemsEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/contexts/${contextId}/items/${faqItemId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all company FAQ items which are associated to some company context
     *
     * @tags Faq (Admin)
     * @name ListFaqItems
     * @request GET:/admin/companies/{companyId}/faq/items
     * @secure
     */
    listFaqItems: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<FaqItemsEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/faq/items`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new FAQ item inside one or more company contexts
     *
     * @tags Faq (Admin)
     * @name CreateFaqItem
     * @request POST:/admin/companies/{companyId}/faq/items
     * @secure
     */
    createFaqItem: (companyId: string, data: CreateFaqContextItemDto, params: RequestParams = {}) =>
      this.request<FaqItemsEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/items`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets a company FAQ item by id
     *
     * @tags Faq (Admin)
     * @name GetFaqItem
     * @request GET:/admin/companies/{companyId}/faq/items/{faqItemId}
     * @secure
     */
    getFaqItem: (companyId: string, faqItemId: string, params: RequestParams = {}) =>
      this.request<FaqItemsEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/items/${faqItemId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some FAQ item and associate/disassociate it contexts
     *
     * @tags Faq (Admin)
     * @name UpdateFaqItem
     * @request PATCH:/admin/companies/{companyId}/faq/items/{faqItemId}
     * @secure
     */
    updateFaqItem: (companyId: string, faqItemId: string, data: CreateFaqContextItemDto, params: RequestParams = {}) =>
      this.request<FaqItemsEntityDto, void>({
        path: `/admin/companies/${companyId}/faq/items/${faqItemId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  globals = {
    /**
     * @description Lists system available currencies and its supported payment providers
     *
     * @tags Globals
     * @name ListCurrencies
     * @request GET:/globals/currencies
     * @secure
     */
    listCurrencies: (
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<CurrencyEntityPaginatedDto, any>({
        path: `/globals/currencies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
