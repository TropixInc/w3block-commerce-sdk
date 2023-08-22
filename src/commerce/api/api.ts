/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum OrderSortByEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
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
  PartiallyCancelled = 'partially_cancelled',
  Expired = 'expired',
}

export enum PaymentProvider {
  PagarMe = 'pagar_me',
  Paypal = 'paypal',
  Transfer = 'transfer',
  Stripe = 'stripe',
  Asaas = 'asaas',
  Crypto = 'crypto',
  Free = 'free',
}

export enum PaymentMethodEnum {
  CreditCard = 'credit_card',
  DebitCard = 'debit_card',
  Pix = 'pix',
  Crypto = 'crypto',
  Transfer = 'transfer',
  Billet = 'billet',
}

export interface OrderEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  company?: CompanyEntity;

  /** @format uuid */
  userId: string;
  user?: UserEntity;
  destinationWalletAddress: string;

  /** @format uuid */
  addressId: string;
  address?: AddressEntity;

  /** @format uuid */
  currencyId: string;
  currency?: CurrencyEntity;
  currencyAmount: string;
  currencyAmountDiscount: string;
  products: OrderProductEntity[];

  /** @example pending */
  status: OrderStatus;

  /** @example pagar_me */
  paymentProvider?: PaymentProvider;

  /** @example za_1012skak1 */
  providerTransactionId?: object;

  /** @example credit_card */
  paymentMethod?: PaymentMethodEnum;

  /** @example {"paymentUrl":"https://example.com/order/1/pay"} */
  paymentInfo: object;

  /** @format date-time */
  deliverDate?: string;

  /** @format date-time */
  expiresIn?: string;
  gasFee: string;
  clientServiceFee: string;
  totalAmount: string;
  originalCurrencyAmount: string;
  originalTotalAmount: string;
}

export interface OrderEntityPaginatedDto {
  items: OrderEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface OrderProductDto {
  /**
   * @format uuid
   * @example 3db843f4-1ee6-4f6e-a86d-b0aee938bdde
   */
  productId: string;

  /**
   * @format uuid
   * @example 3062cdc2-2bd8-4143-8a04-90fc1e607794
   */
  productTokenId?: string;

  /** @example [] */
  variantIds?: string[];

  /** @example 100 */
  expectedPrice: string;
}

export interface UtmParamsDto {
  /** @example google */
  utm_source?: string;

  /** @example cpc */
  utm_medium?: string;

  /** @example super_sales */
  utm_campaign?: string;

  /** @example nft */
  utm_term?: string;

  /** @example header_banner_link */
  utm_content?: string;
}

export enum PaymentProviderEnum {
  PagarMe = 'pagar_me',
  Paypal = 'paypal',
  Transfer = 'transfer',
  Stripe = 'stripe',
  Asaas = 'asaas',
  Crypto = 'crypto',
  Free = 'free',
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
  signedGasFee?: string;

  /** @example https://domain.com */
  successUrl?: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /** @example stripe */
  paymentProvider?: PaymentProviderEnum;

  /** @example {"ssn":"659.315.680-93"} */
  providerInputs?: object;
  utmParams?: UtmParamsDto;

  /** @example coupon-code */
  couponCode?: string;
}

export interface OrderProductPreviewDto {
  /**
   * @format uuid
   * @example 3db843f4-1ee6-4f6e-a86d-b0aee938bdde
   */
  productId: string;

  /**
   * @format uuid
   * @example 3062cdc2-2bd8-4143-8a04-90fc1e607794
   */
  productTokenId?: string;

  /** @example [] */
  variantIds?: string[];
}

export interface OrderPreviewDto {
  orderProducts: OrderProductPreviewDto[];

  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /** @example true */
  acceptIncompleteCart?: object;

  /** @example coupon-code */
  couponCode?: string;
}

export interface CreateOrderDocumentDto {
  /** @format uuid */
  assetId: string;
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

export type OrderEntity = object;

export type AssetEntity = object;

export interface OrderDocumentEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  orderId: string;
  order: OrderEntity;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  assetId: string;
  asset: AssetEntity;
}

export interface OrderDocumentsEntityPaginatedDto {
  items: OrderDocumentEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
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

export interface ProductRequirementDto {
  /** @format uuid */
  companyId: string;

  /** @format uuid */
  keyCollectionId: string;

  /** @format uuid */
  productId: string;
  requirementCTALabel: string;
  requirementDescription: string;
  requirementModalContent: string;
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

  /** @example W3Block Product */
  name: string;

  /** @example My Description */
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

  /** @example <b>block</b> */
  htmlContent?: object;

  /** @example true */
  onDemandMintEnabled?: boolean;
  requirements?: ProductRequirementDto;

  /** @example null */
  terms?: object;
}

export type ProductEntity = object;

export interface UpdateProductDto {
  /** @example ["7ca74ed3-93ff-4df9-b8a0-8308c590174b"] */
  tags?: any[][];

  /** @example W3Block Product */
  name?: string;

  /** @example My Description */
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

  /** @example <b>block</b> */
  htmlContent?: object;

  /** @example true */
  onDemandMintEnabled?: boolean;
  requirements?: ProductRequirementDto;

  /** @example null */
  terms?: object;
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
  whitelistId?: string;
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

export interface ResaleProductDto {
  /** @example My Product */
  name: string;

  /** @example A beautiful product */
  description: string;
  images?: ImageDto[];
  prices: ProductPriceDto[];

  /** @example 0xDAA50a02340cBcFA1a6F4c02765430Ffe411b125 */
  contractAddress: string;

  /** @example 80001 */
  chainId: 1 | 3 | 4 | 42 | 1337 | 80001 | 137;
  tokenId: string;
}

export interface ProductVariantEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  deletedAt?: string;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  productId: string;
  name: string;
  keyLabel: string;
}

export interface ProductVariantEntityPaginatedDto {
  items: ProductVariantEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateProductVariantDto {
  name: string;
  keyLabel: string;
}

export interface UpdateProductVariantDto {
  name: string;
  keyLabel: string;
}

export interface ProductVariantValueEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  deletedAt?: string;

  /** @format uuid */
  variantId: string;
  variant?: ProductVariantEntityDto;
  name: string;
  keyValue: string;

  /** @example 0 */
  extraAmount: string;
}

export interface ProductVariantValueEntityPaginatedDto {
  items: ProductVariantValueEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateProductVariantValueDto {
  name: string;
  keyValue: string;

  /** @example 100 */
  extraAmount: string;
}

export interface CompanyWithEnabledStateResponseDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
  name?: string;

  /** @example true */
  enabled: boolean;
}

export interface DeliverDelayDto {
  /** @example credit_card */
  paymentMethod: PaymentMethodEnum;

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
  deliveryDelays?: DeliverDelayDto[];
  logo?: string;
  operatorWalletAddress?: string;
  paymentProviders?: any[][];
  clientServiceFeePercentage: number;
  companyServiceFeePercentage: number;
  resaleFeePercentage: number;
  disableGasBilling: boolean;
}

export interface UpdateCompanyConfigurationsDto {
  /** @example https://w3block.io/images/1.png */
  logo?: string;
  deliverDelays?: DeliverDelayDto[];

  /** @example 0 */
  resaleFeePercentage: number;
}

export interface SetCompanyPaymentProviderSelectionDto {
  /**
   * @format uuid
   * @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb
   */
  currencyId: string;

  /** @example stripe */
  paymentProvider: PaymentProviderEnum;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;
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

export enum TransferTypeEnum {
  Pix = 'pix',
  BankTransfer = 'bank_transfer',
}

export interface CreateTransferPaymentProviderDto {
  checkoutExpireTime?: number;
  successUrl?: string;
  type: TransferTypeEnum;
  pixKey?: string;
  bankCode?: string;
  bankAgency?: string;
  bankAccount?: string;
}

export interface CreateStripePaymentProviderDto {
  successConnectUrl: string;
  refreshConnectUrl: string;
  withoutConnect?: boolean;
  checkoutExpireTime?: number;
  successUrl?: string;
}

export interface StripeConnectAccountResponseDto {
  url: string;
}

export interface ConnectOrRefreshStripePaymentProviderDto {
  successConnectUrl: string;
  refreshConnectUrl: string;
}

export interface CreateAsaasPaymentProviderDto {
  apiKey: string;
  checkoutExpireTime?: number;
}

export interface SuperAdminCompanySetInfoDto {
  /** @example 10 */
  clientServiceFeePercentage: number;

  /** @example 10 */
  companyServiceFeePercentage: number;
  disableGasBilling: boolean;
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

  /** @example $ */
  symbol: string;

  /** @example USD */
  code: string;

  /** @example 0x7dd80541ad31078244d9f2b73026a025e70b5484 */
  erc20contractAddress?: string;
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

export interface TagEntityDto {
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
  items: TagEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
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
  Document = 'document',
}

export enum AssetTargetEnum {
  Product = 'product',
  OrderDocument = 'order_document',
  Refund = 'refund',
  StorefrontPage = 'storefront_page',
  StorefrontTheme = 'storefront_theme',
}

export interface RequestAssetUploadDto {
  /** @example image */
  type: AssetTypeEnum;

  /** @example product */
  target: AssetTargetEnum;
}

export interface CloudinaryProviderUploadParamsDto {
  /** @example 000000000000 */
  apiKey: string;

  /** @example 1666215568 */
  timestamp: number;

  /** @example commerce/3fa85f64-5717-4562-b3fc-2c963f66afa6 */
  publicId: string;

  /** @example bfd09f95f331f558cbd1320e67aa8d488770583e */
  signature: string;

  /** @example filename_override=false&public_id=commerce/3fa85f64-5717-4562-b3fc-2c963f66afa6&timestamp=1666215568&unique_filename=true */
  signedParams: string;

  /** @example {"filename_override":"false","public_id":"commerce/3fa85f64-5717-4562-b3fc-2c963f66afa6","timestamp":"1666215568","unique_filename":"true"} */
  queryParams: object;
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

export interface AssetEntityWithProviderUploadParamsDto {
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

  /** @example product */
  target?: AssetTargetEnum | null;
  providerUploadParams: CloudinaryProviderUploadParamsDto;
}

export interface PromotionRequirementsDto {
  minCartPrice?: string;
  maxCartPrice?: string;
  minCartItems?: number;
  maxCartItems?: number;
  minSameCartItems?: number;
  maxSameCartItems?: number;

  /** @example ["pix"] */
  paymentMethods?: string[];
}

export enum PromotionTypeEnum {
  Coupon = 'coupon',
  Discount = 'discount',
}

export enum PromotionAmountTypeEnum {
  Fixed = 'fixed',
  Percentage = 'percentage',
}

export interface PromotionEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  deletedAt?: string;

  /** @format uuid */
  companyId: string;

  /** @example coupon */
  type: PromotionTypeEnum;

  /** @example fixed */
  amountType: PromotionAmountTypeEnum;
  amount: string;
  amountByCart: boolean;
  code?: string;
  applyToAllProducts: boolean;
  applyToAllUsers: boolean;
  isCombinable: boolean;

  /** @format date-time */
  startAt?: string;

  /** @format date-time */
  endAt?: string;
  usages: number;
  maxUsages?: number;
  maxUsagesPerUser?: number;
  requirements?: PromotionRequirementsDto;
}

export interface PromotionEntityPaginatedDto {
  items: PromotionEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreatePromotionDto {
  /** @example coupon */
  type: PromotionTypeEnum;

  /** @example fixed */
  amountType: PromotionAmountTypeEnum;
  amount: string;
  amountByCart: boolean;
  code?: string;
  applyToAllProducts: boolean;
  applyToAllUsers: boolean;
  isCombinable: boolean;

  /** @format date-time */
  startAt?: string;

  /** @format date-time */
  endAt?: string;
  maxUsages?: number;
  maxUsagesPerUser?: number;
  requirements?: PromotionRequirementsDto;
}

export interface UpdatePromotionDto {
  /** @example coupon */
  type: PromotionTypeEnum;

  /** @example fixed */
  amountType: PromotionAmountTypeEnum;
  amount: string;
  amountByCart: boolean;
  code?: string;
  applyToAllProducts: boolean;
  applyToAllUsers: boolean;
  isCombinable: boolean;

  /** @format date-time */
  startAt?: string;

  /** @format date-time */
  endAt?: string;
  maxUsages?: number;
  maxUsagesPerUser?: number;
  requirements?: PromotionRequirementsDto;
}

export interface PromotionProductEntityDto {
  /** @format uuid */
  promotionId: string;
  promotion: PromotionEntityDto;

  /** @format uuid */
  productId: string;
  usages: number;
  maxUsages?: number;
  maxUsagesPerUser?: number;
}

export interface PromotionProductEntityPaginatedDto {
  items: PromotionProductEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreatePromotionProductDto {
  /** @format uuid */
  productId: string;
  maxUsages?: number;
  maxUsagesPerUser?: number;
}

export interface SetAndOverridePromotionProductsDto {
  products: CreatePromotionProductDto[];
}

export enum PromotionWhitelistTypeEnum {
  W3BlockIdWhitelist = 'w3block_id_whitelist',
  Email = 'email',
}

export interface PromotionWhitelistEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  promotionId: string;
  promotion: PromotionEntityDto;

  /** @example w3block_id_whitelist */
  type: PromotionWhitelistTypeEnum;
  value: string;
  usages: number;
  maxUsages?: number;
  maxUsagesPerUser?: number;
}

export interface PromotionWhitelistEntityPaginatedDto {
  items: PromotionWhitelistEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreatePromotionWhitelistDto {
  /** @example w3block_id_whitelist */
  type: PromotionWhitelistTypeEnum;

  /** @example 0xd3304183ec1fa687e380b67419875f97f1db05f5 */
  value: string;
  maxUsages?: number;
  maxUsagesPerUser?: number;
}

export interface SetAndOverridePromotionWhitelistsDto {
  whitelists: CreatePromotionWhitelistDto[];
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
      sortBy?: OrderSortByEnum;
      orderBy?: OrderByEnum;
      status?: (
        | 'pending'
        | 'confirming_payment'
        | 'waiting_delivery'
        | 'delivering'
        | 'concluded'
        | 'failed'
        | 'cancelled'
        | 'partially_cancelled'
        | 'expired'
      )[];
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
    export type RequestQuery = { fetchNewestStatus?: boolean };
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
      tagIds?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Products
   * @name GetProduct
   * @request GET:/companies/{companyId}/products/{productId}
   * @secure
   */
  export namespace GetProduct {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = { refreshPermissions?: boolean };
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
   * No description
   * @tags Products
   * @name GetProductBySlug
   * @request GET:/companies/{companyId}/products/get-by-slug/{slug}
   * @secure
   */
  export namespace GetProductBySlug {
    export type RequestParams = { companyId: string; slug: string };
    export type RequestQuery = { refreshPermissions?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists users product resales
   * @tags Products Resale
   * @name ListUserResaleProducts
   * @request GET:/companies/{companyId}/products-resale
   * @secure
   */
  export namespace ListUserResaleProducts {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: ProductSortBy;
      orderBy?: OrderByEnum;
      includeMetadata?: boolean;
      tagIds?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductEntity;
  }
  /**
   * @description Add some user token for resale inside a company marketplace
   * @tags Products Resale
   * @name AddProductForResale
   * @request POST:/companies/{companyId}/products-resale
   * @secure
   */
  export namespace AddProductForResale {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = ResaleProductDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProductEntity;
  }
  /**
   * @description Cancels some user token from resale inside a company marketplace
   * @tags Products Resale
   * @name CancelProductResaleById
   * @request PATCH:/companies/{companyId}/products-resale/{productId}/cancel
   * @secure
   */
  export namespace CancelProductResaleById {
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
   * @description List orders
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
      sortBy?: OrderSortByEnum;
      orderBy?: OrderByEnum;
      status?: (
        | 'pending'
        | 'confirming_payment'
        | 'waiting_delivery'
        | 'delivering'
        | 'concluded'
        | 'failed'
        | 'cancelled'
        | 'partially_cancelled'
        | 'expired'
      )[];
      createdFrom?: string;
      createdUntil?: string;
      userId?: string;
      currencyId?: string;
      paymentMethod?: PaymentMethodEnum;
      paymentProvider?: PaymentProviderEnum;
      utmCampaign?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityPaginatedDto;
  }
  /**
   * @description Get a specific company order by id
   * @tags Orders (Admin)
   * @name GetOrderById
   * @request GET:/admin/companies/{companyId}/orders/{orderId}
   * @secure
   */
  export namespace GetOrderById {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = { fetchNewestStatus?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityDto;
  }
  /**
   * @description Cancel an order
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
   * @description Force delivery of order token
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
   * @description Approves an order manually. This order should be created using transfer payment provider
   * @tags Orders (Admin)
   * @name ApproveOrderManually
   * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/approve-payment
   * @secure
   */
  export namespace ApproveOrderManually {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Creates an order document
   * @tags Order Documents (Admin)
   * @name CreateOrderDocument
   * @request POST:/admin/companies/{companyId}/orders/{orderId}/order-documents
   * @secure
   */
  export namespace CreateOrderDocument {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateOrderDocumentDto;
    export type RequestHeaders = {};
    export type ResponseBody = OrderDocumentEntityDto;
  }
  /**
   * @description Lists order documents from order
   * @tags Order Documents (Admin)
   * @name ListOrderDocuments
   * @request GET:/admin/companies/{companyId}/orders/{orderId}/order-documents
   * @secure
   */
  export namespace ListOrderDocuments {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderDocumentsEntityPaginatedDto;
  }
  /**
   * @description Deletes an order document from order
   * @tags Order Documents (Admin)
   * @name RemoveOrderDocuments
   * @request DELETE:/admin/companies/{companyId}/orders/{orderId}/order-documents/{id}
   * @secure
   */
  export namespace RemoveOrderDocuments {
    export type RequestParams = { companyId: string; orderId: string; id: string };
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
      tagIds?: string[];
      status?: ('draft' | 'publishing' | 'updating' | 'published' | 'cancelled' | 'sold')[];
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
   * @description Cancels some product to be on sale inside a company
   * @tags Products (Admin)
   * @name CancelProductResaleById
   * @request PATCH:/admin/companies/{companyId}/products/{productId}/cancel
   * @secure
   */
  export namespace CancelProductResaleById {
    export type RequestParams = { companyId: string; productId: string };
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
   * @description Lists all product variants
   * @tags Products (Admin)
   * @name ListProductVariants
   * @request GET:/admin/companies/{companyId}/products/{productId}/variants
   * @secure
   */
  export namespace ListProductVariants {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantEntityPaginatedDto;
  }
  /**
   * @description Creates a new product variant
   * @tags Products (Admin)
   * @name CreateProductVariant
   * @request POST:/admin/companies/{companyId}/products/{productId}/variants
   * @secure
   */
  export namespace CreateProductVariant {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateProductVariantDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantEntityDto;
  }
  /**
   * @description Gets some product variant by id
   * @tags Products (Admin)
   * @name GetProductVariant
   * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
   * @secure
   */
  export namespace GetProductVariant {
    export type RequestParams = { companyId: string; productId: string; variantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantEntityDto;
  }
  /**
   * @description Updates some product variant
   * @tags Products (Admin)
   * @name UpdateProductVariant
   * @request PATCH:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
   * @secure
   */
  export namespace UpdateProductVariant {
    export type RequestParams = { companyId: string; productId: string; variantId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateProductVariantDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantEntityDto;
  }
  /**
   * @description Deletes some product variant
   * @tags Products (Admin)
   * @name DeleteProductVariant
   * @request DELETE:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
   * @secure
   */
  export namespace DeleteProductVariant {
    export type RequestParams = { companyId: string; productId: string; variantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all product variant available values
   * @tags Products (Admin)
   * @name ListProductVariantValues
   * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values
   * @secure
   */
  export namespace ListProductVariantValues {
    export type RequestParams = { companyId: string; productId: string; variantId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantValueEntityPaginatedDto;
  }
  /**
   * @description Creates a new product variant value
   * @tags Products (Admin)
   * @name CreateProductVariantValue
   * @request POST:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values
   * @secure
   */
  export namespace CreateProductVariantValue {
    export type RequestParams = { companyId: string; productId: string; variantId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateProductVariantValueDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantValueEntityDto;
  }
  /**
   * @description Gets some product variant value
   * @tags Products (Admin)
   * @name GetProductVariantValue
   * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values/{variantValueId}
   * @secure
   */
  export namespace GetProductVariantValue {
    export type RequestParams = { companyId: string; productId: string; variantId: string; variantValueId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProductVariantValueEntityDto;
  }
  /**
   * @description Deletes some product variant value by id
   * @tags Products (Admin)
   * @name DeleteProductVariantValue
   * @request DELETE:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values/{variantValueId}
   * @secure
   */
  export namespace DeleteProductVariantValue {
    export type RequestParams = { companyId: string; productId: string; variantId: string; variantValueId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Gets company with its commerce state
   * @tags Companies (Admin)
   * @name GetCompanyWithEnabledState
   * @request GET:/admin/companies/{companyId}/is-enabled
   * @secure
   */
  export namespace GetCompanyWithEnabledState {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyWithEnabledStateResponseDto;
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
   * @description Set a some company configured payment provider to be available for use in some purchasing occasion
   * @tags Companies (Admin)
   * @name SetCompanyPaymentProviderSelection
   * @request POST:/admin/companies/{companyId}/configurations/providers-selections
   * @secure
   */
  export namespace SetCompanyPaymentProviderSelection {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = SetCompanyPaymentProviderSelectionDto;
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
   * @description Creates configuration of transfer payment provider in the company
   * @tags Companies (Admin)
   * @name CreateTransferPaymentProvider
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/transfer
   * @secure
   */
  export namespace CreateTransferPaymentProvider {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateTransferPaymentProviderDto;
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
    export type RequestBody = ConnectOrRefreshStripePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = StripeConnectAccountResponseDto;
  }
  /**
   * @description Configures/Refresh configuration of ASAAS payment provider in the company
   * @tags Companies (Admin)
   * @name ConfigureAsaasPaymentProvider
   * @request PATCH:/admin/companies/{companyId}/configurations/providers/asaas
   * @secure
   */
  export namespace ConfigureAsaasPaymentProvider {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateAsaasPaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
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
    export type ResponseBody = TagEntityDto;
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
    export type ResponseBody = TagEntityDto;
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
    export type ResponseBody = TagEntityDto;
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
    export type ResponseBody = AssetEntityWithProviderUploadParamsDto;
  }
  /**
   * @description Lists all company promotions
   * @tags Companies Promotions (Admin)
   * @name ListPromotions
   * @request GET:/admin/companies/{companyId}/promotions
   * @secure
   */
  export namespace ListPromotions {
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
    export type ResponseBody = PromotionEntityPaginatedDto;
  }
  /**
   * @description Creates a new company promotion
   * @tags Companies Promotions (Admin)
   * @name CreatePromotion
   * @request POST:/admin/companies/{companyId}/promotions
   * @secure
   */
  export namespace CreatePromotion {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreatePromotionDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionEntityDto;
  }
  /**
   * @description Gets some company promotion by id
   * @tags Companies Promotions (Admin)
   * @name GetPromotion
   * @request GET:/admin/companies/{companyId}/promotions/{promotionId}
   * @secure
   */
  export namespace GetPromotion {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionEntityDto;
  }
  /**
   * @description Updates some company promotion
   * @tags Companies Promotions (Admin)
   * @name UpdatePromotion
   * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}
   * @secure
   */
  export namespace UpdatePromotion {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdatePromotionDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionEntityDto;
  }
  /**
   * @description Deletes some company promotion
   * @tags Companies Promotions (Admin)
   * @name DeletePromotion
   * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}
   * @secure
   */
  export namespace DeletePromotion {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all company specific promotion products
   * @tags Companies Promotions (Admin)
   * @name ListPromotionProducts
   * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/products
   * @secure
   */
  export namespace ListPromotionProducts {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionProductEntityPaginatedDto;
  }
  /**
   * @description Creates a new company promotion product
   * @tags Companies Promotions (Admin)
   * @name CreatePromotionProduct
   * @request POST:/admin/companies/{companyId}/promotions/{promotionId}/products
   * @secure
   */
  export namespace CreatePromotionProduct {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = CreatePromotionProductDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionProductEntityDto;
  }
  /**
   * @description Sets and override the company promotion products
   * @tags Companies Promotions (Admin)
   * @name SetAndOverridePromotionProducts
   * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}/products
   * @secure
   */
  export namespace SetAndOverridePromotionProducts {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = SetAndOverridePromotionProductsDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionProductEntityDto[];
  }
  /**
   * @description Gets some company promotion product by ids
   * @tags Companies Promotions (Admin)
   * @name GetPromotionProduct
   * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/products/{productId}
   * @secure
   */
  export namespace GetPromotionProduct {
    export type RequestParams = { companyId: string; promotionId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionProductEntityDto;
  }
  /**
   * @description Deletes some company promotion product by ids
   * @tags Companies Promotions (Admin)
   * @name DeletePromotionProduct
   * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}/products/{productId}
   * @secure
   */
  export namespace DeletePromotionProduct {
    export type RequestParams = { companyId: string; promotionId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all company specific promotion whitelists
   * @tags Companies Promotions (Admin)
   * @name ListPromotionWhitelists
   * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
   * @secure
   */
  export namespace ListPromotionWhitelists {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionWhitelistEntityPaginatedDto;
  }
  /**
   * @description Creates a new company promotion whitelist
   * @tags Companies Promotions (Admin)
   * @name CreatePromotionWhitelist
   * @request POST:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
   * @secure
   */
  export namespace CreatePromotionWhitelist {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = CreatePromotionWhitelistDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionWhitelistEntityDto;
  }
  /**
   * @description Sets and override the company promotion whitelists
   * @tags Companies Promotions (Admin)
   * @name SetAndOverridePromotionWhitelists
   * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
   * @secure
   */
  export namespace SetAndOverridePromotionWhitelists {
    export type RequestParams = { companyId: string; promotionId: string };
    export type RequestQuery = {};
    export type RequestBody = SetAndOverridePromotionWhitelistsDto;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionWhitelistEntityDto[];
  }
  /**
   * @description Gets some company promotion whitelist by ids
   * @tags Companies Promotions (Admin)
   * @name GetPromotionWhitelist
   * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/whitelists/{whitelistId}
   * @secure
   */
  export namespace GetPromotionWhitelist {
    export type RequestParams = { companyId: string; promotionId: string; whitelistId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PromotionWhitelistEntityDto;
  }
  /**
   * @description Deletes some company promotion whitelist by ids
   * @tags Companies Promotions (Admin)
   * @name DeletePromotionWhitelist
   * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}/whitelists/{whitelistId}
   * @secure
   */
  export namespace DeletePromotionWhitelist {
    export type RequestParams = { companyId: string; promotionId: string; whitelistId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
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

export namespace SuperAdmin {
  /**
   * @description Enables/Setup company on commerce services
   * @tags Companies (Super Admin)
   * @name CreateAndEnableCommerceCompany
   * @request PATCH:/super-admin/companies/{companyId}/enable
   * @secure
   */
  export namespace CreateAndEnableCommerceCompany {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = SuperAdminCompanySetInfoDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Updates company super admin properties
   * @tags Companies (Super Admin)
   * @name SuperAdminUpdateCompany
   * @request PATCH:/super-admin/companies/{companyId}
   * @secure
   */
  export namespace SuperAdminUpdateCompany {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = SuperAdminCompanySetInfoDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyConfigurationEntityDto;
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://commerce.stg.w3block.io' });
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
 * @version 2.20.0
 * @baseUrl https://commerce.stg.w3block.io
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
        sortBy?: OrderSortByEnum;
        orderBy?: OrderByEnum;
        status?: (
          | 'pending'
          | 'confirming_payment'
          | 'waiting_delivery'
          | 'delivering'
          | 'concluded'
          | 'failed'
          | 'cancelled'
          | 'partially_cancelled'
          | 'expired'
        )[];
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
    getUserOrder: (
      companyId: string,
      orderId: string,
      query?: { fetchNewestStatus?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<OrderEntityDto, void>({
        path: `/companies/${companyId}/orders/${orderId}`,
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
        tagIds?: string[];
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
     * @name GetProduct
     * @request GET:/companies/{companyId}/products/{productId}
     * @secure
     */
    getProduct: (
      companyId: string,
      productId: string,
      query?: { refreshPermissions?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/companies/${companyId}/products/${productId}`,
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
     * No description
     *
     * @tags Products
     * @name GetProductBySlug
     * @request GET:/companies/{companyId}/products/get-by-slug/{slug}
     * @secure
     */
    getProductBySlug: (
      companyId: string,
      slug: string,
      query?: { refreshPermissions?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/companies/${companyId}/products/get-by-slug/${slug}`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Lists users product resales
     *
     * @tags Products Resale
     * @name ListUserResaleProducts
     * @request GET:/companies/{companyId}/products-resale
     * @secure
     */
    listUserResaleProducts: (
      companyId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: ProductSortBy;
        orderBy?: OrderByEnum;
        includeMetadata?: boolean;
        tagIds?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductEntity, void>({
        path: `/companies/${companyId}/products-resale`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Add some user token for resale inside a company marketplace
     *
     * @tags Products Resale
     * @name AddProductForResale
     * @request POST:/companies/{companyId}/products-resale
     * @secure
     */
    addProductForResale: (companyId: string, data: ResaleProductDto, params: RequestParams = {}) =>
      this.request<ProductEntity, void>({
        path: `/companies/${companyId}/products-resale`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Cancels some user token from resale inside a company marketplace
     *
     * @tags Products Resale
     * @name CancelProductResaleById
     * @request PATCH:/companies/{companyId}/products-resale/{productId}/cancel
     * @secure
     */
    cancelProductResaleById: (companyId: string, productId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/products-resale/${productId}/cancel`,
        method: 'PATCH',
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
     * @description List orders
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
        sortBy?: OrderSortByEnum;
        orderBy?: OrderByEnum;
        status?: (
          | 'pending'
          | 'confirming_payment'
          | 'waiting_delivery'
          | 'delivering'
          | 'concluded'
          | 'failed'
          | 'cancelled'
          | 'partially_cancelled'
          | 'expired'
        )[];
        createdFrom?: string;
        createdUntil?: string;
        userId?: string;
        currencyId?: string;
        paymentMethod?: PaymentMethodEnum;
        paymentProvider?: PaymentProviderEnum;
        utmCampaign?: string;
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
     * @description Get a specific company order by id
     *
     * @tags Orders (Admin)
     * @name GetOrderById
     * @request GET:/admin/companies/{companyId}/orders/{orderId}
     * @secure
     */
    getOrderById: (
      companyId: string,
      orderId: string,
      query?: { fetchNewestStatus?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<OrderEntityDto, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Cancel an order
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
     * @description Force delivery of order token
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
     * @description Approves an order manually. This order should be created using transfer payment provider
     *
     * @tags Orders (Admin)
     * @name ApproveOrderManually
     * @request PATCH:/admin/companies/{companyId}/orders/{orderId}/approve-payment
     * @secure
     */
    approveOrderManually: (companyId: string, orderId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/approve-payment`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Creates an order document
     *
     * @tags Order Documents (Admin)
     * @name CreateOrderDocument
     * @request POST:/admin/companies/{companyId}/orders/{orderId}/order-documents
     * @secure
     */
    createOrderDocument: (
      companyId: string,
      orderId: string,
      data: CreateOrderDocumentDto,
      params: RequestParams = {},
    ) =>
      this.request<OrderDocumentEntityDto, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/order-documents`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists order documents from order
     *
     * @tags Order Documents (Admin)
     * @name ListOrderDocuments
     * @request GET:/admin/companies/{companyId}/orders/{orderId}/order-documents
     * @secure
     */
    listOrderDocuments: (
      companyId: string,
      orderId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<OrderDocumentsEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/order-documents`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes an order document from order
     *
     * @tags Order Documents (Admin)
     * @name RemoveOrderDocuments
     * @request DELETE:/admin/companies/{companyId}/orders/{orderId}/order-documents/{id}
     * @secure
     */
    removeOrderDocuments: (companyId: string, orderId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/orders/${orderId}/order-documents/${id}`,
        method: 'DELETE',
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
        tagIds?: string[];
        status?: ('draft' | 'publishing' | 'updating' | 'published' | 'cancelled' | 'sold')[];
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
     * @description Cancels some product to be on sale inside a company
     *
     * @tags Products (Admin)
     * @name CancelProductResaleById
     * @request PATCH:/admin/companies/{companyId}/products/{productId}/cancel
     * @secure
     */
    cancelProductResaleById: (companyId: string, productId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/cancel`,
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
     * @description Lists all product variants
     *
     * @tags Products (Admin)
     * @name ListProductVariants
     * @request GET:/admin/companies/{companyId}/products/{productId}/variants
     * @secure
     */
    listProductVariants: (
      companyId: string,
      productId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new product variant
     *
     * @tags Products (Admin)
     * @name CreateProductVariant
     * @request POST:/admin/companies/{companyId}/products/{productId}/variants
     * @secure
     */
    createProductVariant: (
      companyId: string,
      productId: string,
      data: CreateProductVariantDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantEntityDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some product variant by id
     *
     * @tags Products (Admin)
     * @name GetProductVariant
     * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
     * @secure
     */
    getProductVariant: (companyId: string, productId: string, variantId: string, params: RequestParams = {}) =>
      this.request<ProductVariantEntityDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some product variant
     *
     * @tags Products (Admin)
     * @name UpdateProductVariant
     * @request PATCH:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
     * @secure
     */
    updateProductVariant: (
      companyId: string,
      productId: string,
      variantId: string,
      data: UpdateProductVariantDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantEntityDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some product variant
     *
     * @tags Products (Admin)
     * @name DeleteProductVariant
     * @request DELETE:/admin/companies/{companyId}/products/{productId}/variants/{variantId}
     * @secure
     */
    deleteProductVariant: (companyId: string, productId: string, variantId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all product variant available values
     *
     * @tags Products (Admin)
     * @name ListProductVariantValues
     * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values
     * @secure
     */
    listProductVariantValues: (
      companyId: string,
      productId: string,
      variantId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantValueEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}/values`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new product variant value
     *
     * @tags Products (Admin)
     * @name CreateProductVariantValue
     * @request POST:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values
     * @secure
     */
    createProductVariantValue: (
      companyId: string,
      productId: string,
      variantId: string,
      data: CreateProductVariantValueDto,
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantValueEntityDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}/values`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some product variant value
     *
     * @tags Products (Admin)
     * @name GetProductVariantValue
     * @request GET:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values/{variantValueId}
     * @secure
     */
    getProductVariantValue: (
      companyId: string,
      productId: string,
      variantId: string,
      variantValueId: string,
      params: RequestParams = {},
    ) =>
      this.request<ProductVariantValueEntityDto, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}/values/${variantValueId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some product variant value by id
     *
     * @tags Products (Admin)
     * @name DeleteProductVariantValue
     * @request DELETE:/admin/companies/{companyId}/products/{productId}/variants/{variantId}/values/{variantValueId}
     * @secure
     */
    deleteProductVariantValue: (
      companyId: string,
      productId: string,
      variantId: string,
      variantValueId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/products/${productId}/variants/${variantId}/values/${variantValueId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Gets company with its commerce state
     *
     * @tags Companies (Admin)
     * @name GetCompanyWithEnabledState
     * @request GET:/admin/companies/{companyId}/is-enabled
     * @secure
     */
    getCompanyWithEnabledState: (companyId: string, params: RequestParams = {}) =>
      this.request<CompanyWithEnabledStateResponseDto, void>({
        path: `/admin/companies/${companyId}/is-enabled`,
        method: 'GET',
        secure: true,
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
     * @description Set a some company configured payment provider to be available for use in some purchasing occasion
     *
     * @tags Companies (Admin)
     * @name SetCompanyPaymentProviderSelection
     * @request POST:/admin/companies/{companyId}/configurations/providers-selections
     * @secure
     */
    setCompanyPaymentProviderSelection: (
      companyId: string,
      data: SetCompanyPaymentProviderSelectionDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/configurations/providers-selections`,
        method: 'POST',
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
     * @description Creates configuration of transfer payment provider in the company
     *
     * @tags Companies (Admin)
     * @name CreateTransferPaymentProvider
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/transfer
     * @secure
     */
    createTransferPaymentProvider: (
      companyId: string,
      data: CreateTransferPaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/transfer`,
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
      data: ConnectOrRefreshStripePaymentProviderDto,
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
     * @description Configures/Refresh configuration of ASAAS payment provider in the company
     *
     * @tags Companies (Admin)
     * @name ConfigureAsaasPaymentProvider
     * @request PATCH:/admin/companies/{companyId}/configurations/providers/asaas
     * @secure
     */
    configureAsaasPaymentProvider: (
      companyId: string,
      data: CreateAsaasPaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/configurations/providers/asaas`,
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
     * @description Create a company tag
     *
     * @tags Tags (Admin)
     * @name CreateTag
     * @request POST:/admin/companies/{companyId}/tags
     * @secure
     */
    createTag: (companyId: string, data: TagDto, params: RequestParams = {}) =>
      this.request<TagEntityDto, void>({
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
      this.request<TagEntityDto, void>({
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
      this.request<TagEntityDto, void>({
        path: `/admin/companies/${companyId}/tags/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
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
      this.request<AssetEntityWithProviderUploadParamsDto, void>({
        path: `/admin/companies/${companyId}/assets`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all company promotions
     *
     * @tags Companies Promotions (Admin)
     * @name ListPromotions
     * @request GET:/admin/companies/{companyId}/promotions
     * @secure
     */
    listPromotions: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<PromotionEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/promotions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company promotion
     *
     * @tags Companies Promotions (Admin)
     * @name CreatePromotion
     * @request POST:/admin/companies/{companyId}/promotions
     * @secure
     */
    createPromotion: (companyId: string, data: CreatePromotionDto, params: RequestParams = {}) =>
      this.request<PromotionEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company promotion by id
     *
     * @tags Companies Promotions (Admin)
     * @name GetPromotion
     * @request GET:/admin/companies/{companyId}/promotions/{promotionId}
     * @secure
     */
    getPromotion: (companyId: string, promotionId: string, params: RequestParams = {}) =>
      this.request<PromotionEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company promotion
     *
     * @tags Companies Promotions (Admin)
     * @name UpdatePromotion
     * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}
     * @secure
     */
    updatePromotion: (companyId: string, promotionId: string, data: UpdatePromotionDto, params: RequestParams = {}) =>
      this.request<PromotionEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company promotion
     *
     * @tags Companies Promotions (Admin)
     * @name DeletePromotion
     * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}
     * @secure
     */
    deletePromotion: (companyId: string, promotionId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all company specific promotion products
     *
     * @tags Companies Promotions (Admin)
     * @name ListPromotionProducts
     * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/products
     * @secure
     */
    listPromotionProducts: (
      companyId: string,
      promotionId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<PromotionProductEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/products`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company promotion product
     *
     * @tags Companies Promotions (Admin)
     * @name CreatePromotionProduct
     * @request POST:/admin/companies/{companyId}/promotions/{promotionId}/products
     * @secure
     */
    createPromotionProduct: (
      companyId: string,
      promotionId: string,
      data: CreatePromotionProductDto,
      params: RequestParams = {},
    ) =>
      this.request<PromotionProductEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/products`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sets and override the company promotion products
     *
     * @tags Companies Promotions (Admin)
     * @name SetAndOverridePromotionProducts
     * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}/products
     * @secure
     */
    setAndOverridePromotionProducts: (
      companyId: string,
      promotionId: string,
      data: SetAndOverridePromotionProductsDto,
      params: RequestParams = {},
    ) =>
      this.request<PromotionProductEntityDto[], void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/products`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company promotion product by ids
     *
     * @tags Companies Promotions (Admin)
     * @name GetPromotionProduct
     * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/products/{productId}
     * @secure
     */
    getPromotionProduct: (companyId: string, promotionId: string, productId: string, params: RequestParams = {}) =>
      this.request<PromotionProductEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/products/${productId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company promotion product by ids
     *
     * @tags Companies Promotions (Admin)
     * @name DeletePromotionProduct
     * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}/products/{productId}
     * @secure
     */
    deletePromotionProduct: (companyId: string, promotionId: string, productId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/products/${productId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all company specific promotion whitelists
     *
     * @tags Companies Promotions (Admin)
     * @name ListPromotionWhitelists
     * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
     * @secure
     */
    listPromotionWhitelists: (
      companyId: string,
      promotionId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<PromotionWhitelistEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/whitelists`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company promotion whitelist
     *
     * @tags Companies Promotions (Admin)
     * @name CreatePromotionWhitelist
     * @request POST:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
     * @secure
     */
    createPromotionWhitelist: (
      companyId: string,
      promotionId: string,
      data: CreatePromotionWhitelistDto,
      params: RequestParams = {},
    ) =>
      this.request<PromotionWhitelistEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/whitelists`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sets and override the company promotion whitelists
     *
     * @tags Companies Promotions (Admin)
     * @name SetAndOverridePromotionWhitelists
     * @request PATCH:/admin/companies/{companyId}/promotions/{promotionId}/whitelists
     * @secure
     */
    setAndOverridePromotionWhitelists: (
      companyId: string,
      promotionId: string,
      data: SetAndOverridePromotionWhitelistsDto,
      params: RequestParams = {},
    ) =>
      this.request<PromotionWhitelistEntityDto[], void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/whitelists`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company promotion whitelist by ids
     *
     * @tags Companies Promotions (Admin)
     * @name GetPromotionWhitelist
     * @request GET:/admin/companies/{companyId}/promotions/{promotionId}/whitelists/{whitelistId}
     * @secure
     */
    getPromotionWhitelist: (companyId: string, promotionId: string, whitelistId: string, params: RequestParams = {}) =>
      this.request<PromotionWhitelistEntityDto, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/whitelists/${whitelistId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company promotion whitelist by ids
     *
     * @tags Companies Promotions (Admin)
     * @name DeletePromotionWhitelist
     * @request DELETE:/admin/companies/{companyId}/promotions/{promotionId}/whitelists/{whitelistId}
     * @secure
     */
    deletePromotionWhitelist: (
      companyId: string,
      promotionId: string,
      whitelistId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/promotions/${promotionId}/whitelists/${whitelistId}`,
        method: 'DELETE',
        secure: true,
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
  superAdmin = {
    /**
     * @description Enables/Setup company on commerce services
     *
     * @tags Companies (Super Admin)
     * @name CreateAndEnableCommerceCompany
     * @request PATCH:/super-admin/companies/{companyId}/enable
     * @secure
     */
    createAndEnableCommerceCompany: (
      companyId: string,
      data: SuperAdminCompanySetInfoDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/super-admin/companies/${companyId}/enable`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Updates company super admin properties
     *
     * @tags Companies (Super Admin)
     * @name SuperAdminUpdateCompany
     * @request PATCH:/super-admin/companies/{companyId}
     * @secure
     */
    superAdminUpdateCompany: (companyId: string, data: SuperAdminCompanySetInfoDto, params: RequestParams = {}) =>
      this.request<CompanyConfigurationEntityDto, any>({
        path: `/super-admin/companies/${companyId}`,
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
