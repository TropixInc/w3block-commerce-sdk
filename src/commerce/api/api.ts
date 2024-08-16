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

export type OrderProductEntity = object;

export type PaymentEntity = object;

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

  /** @example pending */
  status: OrderStatus;

  /** @format date-time */
  deliverDate?: string;

  /** @format date-time */
  expiresIn?: string;

  /** @example B61JHC */
  deliverId?: string;
  products: OrderProductEntity[];
  payments: PaymentEntity[];
}

export interface OrderEntityPaginatedDto {
  items: OrderEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface OrderProductExpectedPriceDto {
  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;

  /** @example 100 */
  expectedPrice: string;
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

  /** @example 1 */
  quantity?: string;

  /** @example 100 */
  expectedPrice?: string;
  expectedPrices: OrderProductExpectedPriceDto[];
}

export enum MultiPaymentSelectionAmountTypeEnum {
  Percentage = 'percentage',
  AllRemaining = 'all_remaining',
  Fixed = 'fixed',
}

export enum PaymentMethodEnum {
  CreditCard = 'credit_card',
  DebitCard = 'debit_card',
  Pix = 'pix',
  Crypto = 'crypto',
  Transfer = 'transfer',
  Billet = 'billet',
  GooglePay = 'google_pay',
  ApplePay = 'apple_pay',
}

export enum PaymentProviderEnum {
  PagarMe = 'pagar_me',
  Paypal = 'paypal',
  Transfer = 'transfer',
  Stripe = 'stripe',
  Asaas = 'asaas',
  Crypto = 'crypto',
  Free = 'free',
  Braza = 'braza',
}

export interface OrderMultiPaymentSelectionDto {
  /**
   * @format uuid
   * @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb
   */
  currencyId: string;

  /** @example percentage */
  amountType: MultiPaymentSelectionAmountTypeEnum;

  /** @example 100 */
  amount: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /** @example stripe */
  paymentProvider?: PaymentProviderEnum;

  /** @example {"ssn":"659.315.680-93","save_credit_card":true,"save_credit_card_name":"My Credit Card"} */
  providerInputs?: object;
}

export interface OrderSignedGasFeeDto {
  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId: string;

  /** @example ===812hgsahbncva */
  signedGasFee?: string;
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

export interface CreateOrderDto {
  orderProducts: OrderProductDto[];

  /**
   * @format uuid
   * @example null
   */
  addressId?: string;

  /** @example 0xd3304183ec1fa687e380b67419875f97f1db05f5 */
  destinationWalletAddress?: string;

  /** @format uuid */
  destinationUserId?: string;

  /** @example ===812hgsahbncva */
  signedGasFee?: string;
  signedGasFees: OrderSignedGasFeeDto[];

  /** @example https://domain.com */
  successUrl?: string;
  utmParams?: UtmParamsDto;

  /** @example coupon-code */
  couponCode?: string;

  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId?: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /** @example stripe */
  paymentProvider?: PaymentProviderEnum;

  /** @example {"ssn":"659.315.680-93","save_credit_card":true,"save_credit_card_name":"My Credit Card"} */
  providerInputs?: object;
  payments: OrderMultiPaymentSelectionDto[];

  /**
   * When some user tries to create two similar orders in a short period of time, we consider it as an interaction error. Sending this value as true will skip this check and proceed with order creation
   * @example false
   */
  acceptSimilarOrderInShortPeriod?: object;
  passShareCodeData?: object;
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

  /** @example 1 */
  quantity?: string;
}

export interface OrderPreviewMultiPaymentSelectionDto {
  /**
   * @format uuid
   * @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb
   */
  currencyId: string;

  /** @example percentage */
  amountType: MultiPaymentSelectionAmountTypeEnum;

  /** @example 100 */
  amount: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;
}

export interface OrderPreviewDto {
  orderProducts: OrderProductPreviewDto[];

  /** @example true */
  acceptIncompleteCart?: object;

  /** @example coupon-code */
  couponCode?: string;

  /** @example 0xd3304183ec1fa687e380b67419875f97f1db05f5 */
  destinationWalletAddress?: string;

  /** @format uuid */
  destinationUserId?: string;

  /** @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb */
  currencyId?: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /**
   * @format uuid
   * @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb
   */
  anchorPaymentsCurrencyId?: string;
  payments: OrderPreviewMultiPaymentSelectionDto[];
}

export interface PayOrderDto {
  payments: OrderMultiPaymentSelectionDto[];

  /** @example https://domain.com */
  successUrl?: string;
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

export enum AssetTypeEnum {
  Image = 'image',
  Video = 'video',
  Document = 'document',
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

export enum AssetTargetEnum {
  Product = 'product',
  OrderDocument = 'order_document',
  Refund = 'refund',
  StorefrontPage = 'storefront_page',
  StorefrontTheme = 'storefront_theme',
  Export = 'export',
}

export interface AssetEntityDto {
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
}

export enum ExportTypeEnum {
  OrdersReport = 'orders_report',
  OrderProductsReport = 'order_products_report',
}

export enum ExportStatusEnum {
  Pending = 'pending',
  Generating = 'generating',
  ReadyForDownload = 'ready_for_download',
  Failed = 'failed',
  Expired = 'expired',
}

export interface ExportEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;

  /** @example orders_report */
  type: ExportTypeEnum;

  /** @example ready_for_download */
  status: ExportStatusEnum;

  /** @format date-time */
  readyForDownloadDate?: string;

  /** @format date-time */
  expiresIn?: string;

  /** @format uuid */
  assetId: string;
  asset: AssetEntityDto;

  /** @example null */
  params?: object;
}

export interface CreateOrderDocumentDto {
  /** @format uuid */
  assetId: string;
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

export enum OrderStatusEnum {
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

export interface DispatchOrderEventDto {
  /** @format uuid */
  orderId: string;

  /** @example concluded */
  status: OrderStatusEnum;
}

export enum ProductSortBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  StartSaleAt = 'startSaleAt',
  EndSaleAt = 'endSaleAt',
  Status = 'status',
  ContractAddress = 'contractAddress',
  Name = 'name',
  Relevance = 'relevance',
}

export interface ImageVariantMatchDto {
  keyLabel: string;
  keyValue: string;
}

export interface ProductImageDto {
  /** @format uuid */
  assetId: string;
  variants?: ImageVariantMatchDto[];
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

export interface ProductKycRequirementConfigDto {
  slug: string;
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
  requireKycContext?: ProductKycRequirementConfigDto;
}

export enum PassShareCodeDataFieldType {
  Textarea = 'textarea',
  Text = 'text',
}

export interface PassShareCodeDataFieldConfigDto {
  name: string;

  /** @example text */
  type: PassShareCodeDataFieldType;
  label: string;

  /** @example true */
  required?: boolean;
}

export interface PassShareCodeConfigDto {
  dataFields?: PassShareCodeDataFieldConfigDto[];

  /** @example true */
  enabled: boolean;
}

export interface ProductSettingsDto {
  passShareCodeConfig?: PassShareCodeConfigDto;
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
  images?: ProductImageDto[];
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

  /** @example 0 */
  relevance?: number;
  settings?: ProductSettingsDto;
}

export type ProductEntity = object;

export interface UpdateProductDto {
  /** @example ["7ca74ed3-93ff-4df9-b8a0-8308c590174b"] */
  tags?: any[][];

  /** @example W3Block Product */
  name?: string;

  /** @example My Description */
  description?: string;
  images?: ProductImageDto[];
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

  /** @example 0 */
  relevance?: number;
  settings?: ProductSettingsDto;
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
  images?: ProductImageDto[];
  prices: ProductPriceDto[];

  /** @example 0xDAA50a02340cBcFA1a6F4c02765430Ffe411b125 */
  contractAddress: string;

  /** @example 80001 */
  chainId: 1 | 3 | 4 | 42 | 1337 | 80001 | 137 | 1284 | 1285;
  tokenId: string;

  /** @example null */
  startSaleAt?: object;

  /** @example null */
  endSaleAt?: object;
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

export interface UserPaymentProviderEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  userId: string;

  /** @example stripe */
  paymentProvider: PaymentProviderEnum;

  /** @example null */
  config?: object;

  /** @example true */
  enabled: boolean;
}

export interface UserPaymentProviderEntityPaginatedDto {
  items: UserPaymentProviderEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface GetConfiguredProvidersResponseDto {
  missingProviders: ('pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza')[];
  providersEnabledOnCompany: ('pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza')[];
  providersConfiguredByUser: ('pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza')[];
}

export interface ConnectOrRefreshStripePaymentProviderDto {
  successConnectUrl: string;
  refreshConnectUrl: string;
}

export interface StripeConnectAccountResponseDto {
  url: string;
}

export interface PublicUserCreditCardEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;
  brand?: string;
  lastNumbers: string;
  name?: string;
}

export interface PublicUserCreditCardEntityPaginatedDto {
  items: PublicUserCreditCardEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreditCardHolderInfoDto {
  name?: string;
  email?: string;
  ssn?: string;
  phone?: string;

  /** @example 00000-000 */
  postalCode: string;
  address?: string;
  addressNumber?: string;
  addressComplement?: string;
}

export interface SaveUserCreditCardDto {
  /**
   * @format uuid
   * @example 65fe1119-6ec0-4b78-8d30-cb989914bdcb
   */
  currencyId: string;
  number: string;
  cvv: string;

  /** @example 1 */
  expiryMonth: number;

  /** @example 1 */
  expiryYear: number;
  name?: string;
  holderInfo: CreditCardHolderInfoDto;
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

export interface OrderExpirationConfigDto {
  ignorePaymentsAfterExecutionOrder: number;
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
  sendPassPdf: boolean;
  orderExpirationConfig?: OrderExpirationConfigDto;
}

export interface UpdateCompanyConfigurationsDto {
  /** @example https://w3block.io/images/1.png */
  logo?: string;
  deliverDelays?: DeliverDelayDto[];

  /** @example 0 */
  resaleFeePercentage: number;
  orderExpirationConfig?: OrderExpirationConfigDto;
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

export interface CreateAsaasPaymentProviderDto {
  apiKey: string;
  checkoutExpireTime?: number;
}

export enum NotificationTypeEnum {
  AdminOrderConcluded = 'admin_order_concluded',
  AdminOrderFailed = 'admin_order_failed',
  UserOrderWaitingDelivery = 'user_order_waiting_delivery',
  UserOrderConcluded = 'user_order_concluded',
  DestinationUserOrderWaitingDelivery = 'destination_user_order_waiting_delivery',
}

export interface EmailSenderDto {
  email: string;
  name: string;
}

export enum NotificationProviderEnum {
  Email = 'email',
  TwilioWhatsapp = 'twilio_whatsapp',
}

export interface CompanyNotificationEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  type: NotificationTypeEnum;
  provider: NotificationProviderEnum;
  disabled: boolean;
  customSubject?: string | null;
  customHtmlContent?: string | null;
  customTextContent?: string | null;
  customTemplateId?: number | null;

  /** @example null */
  customParams?: object | null;

  /** @example null */
  customSender?: EmailSenderDto | null;
  bcc?: string[] | null;
}

export interface SetCompanyNotificationDto {
  /** @example false */
  disabled: boolean;

  /** @example null */
  customSubject: string | null;

  /** @example null */
  customHtmlContent: string | null;

  /** @example null */
  customTextContent: string | null;

  /** @example null */
  customParams: object | null;
}

export interface CompanySplitConfigurationEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyConfigurationId: string;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  userId: string;

  /** @format uuid */
  productId?: string;
  contractAddress?: string;
  chainId?: number;
  description?: string;

  /** @example pix */
  paymentMethod?: 'credit_card' | 'debit_card' | 'pix' | 'crypto' | 'transfer' | 'billet' | 'google_pay' | 'apple_pay';

  /** @example asaas */
  paymentProvider?: 'pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza';

  /** @example product_price */
  type: 'client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price';
  percentage?: number;
}

export interface CompanySplitConfigurationEntityPaginatedDto {
  items: CompanySplitConfigurationEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateCompanySplitConfigurationDto {
  /** @example product_price */
  type: 'client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price';

  /** @format uuid */
  userId: string;
  percentage: number;

  /** @example null */
  description?: string | null;

  /** @example null */
  paymentProvider?: 'pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza' | null;

  /** @example null */
  paymentMethod?:
    | 'credit_card'
    | 'debit_card'
    | 'pix'
    | 'crypto'
    | 'transfer'
    | 'billet'
    | 'google_pay'
    | 'apple_pay'
    | null;
  contractAddress?: string | null;

  /** @example 1284 */
  chainId?: '1' | '3' | '4' | '42' | '1337' | '80001' | '137' | '1284' | '1285' | null;

  /** @format uuid */
  productId?: string | null;
}

export interface CompanySplitConfigurationEntityWithCorrelatedDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyConfigurationId: string;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  userId: string;

  /** @format uuid */
  productId?: string;
  contractAddress?: string;
  chainId?: number;
  description?: string;

  /** @example pix */
  paymentMethod?: 'credit_card' | 'debit_card' | 'pix' | 'crypto' | 'transfer' | 'billet' | 'google_pay' | 'apple_pay';

  /** @example asaas */
  paymentProvider?: 'pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza';

  /** @example product_price */
  type: 'client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price';
  percentage?: number;
  correlatedConfigurations: CompanySplitConfigurationEntityDto[];
}

export interface UpdateCompanySplitConfigurationDto {
  /** @example null */
  description?: string | null;

  /** @example null */
  paymentProvider?: 'pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza' | null;

  /** @example null */
  paymentMethod?:
    | 'credit_card'
    | 'debit_card'
    | 'pix'
    | 'crypto'
    | 'transfer'
    | 'billet'
    | 'google_pay'
    | 'apple_pay'
    | null;
  contractAddress?: string | null;

  /** @example 1284 */
  chainId?: '1' | '3' | '4' | '42' | '1337' | '80001' | '137' | '1284' | '1285' | null;

  /** @format uuid */
  productId?: string | null;

  /** @example product_price */
  type?: 'client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price';

  /** @format uuid */
  userId?: string;
  percentage?: number;
}

export interface CorrelatedSplitConfigurationsResponseDto {
  correlatedConfigurations: CompanySplitConfigurationEntityDto[];
}

export interface SuperAdminCompanySetInfoDto {
  /** @example 10 */
  clientServiceFeePercentage: number;

  /** @example 10 */
  companyServiceFeePercentage: number;
  disableGasBilling: boolean;

  /** @example false */
  sendPassPdf: boolean;
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

  /**
   * @format uuid
   * @example null
   */
  companyId?: string;

  /** @example 0x7dd80541ad31078244d9f2b73026a025e70b5484 */
  erc20contractAddress?: string;

  /** @example 137 */
  erc20ChainId?: number;
  paymentProviders?: CurrencyPaymentProviderEntityDto[];
  configured?: boolean;
  canProvideCashback?: boolean;
  decimals?: number;
}

export interface CurrencyEntityPaginatedDto {
  items: CurrencyEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface HasAllowanceResponseDto {
  currency: CurrencyEntityDto;
  walletAddress: string;

  /** @example 100 */
  amount: string;

  /** @example true */
  hasAllowance: boolean;

  /** @example 100 */
  currentAllowance: string;
}

export interface IncreaseCurrencyAllowanceDto {
  walletAddress?: string;

  /** @example 100 */
  targetAmount: string;
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
  usePatch: boolean;
}

export interface WebhookEntityPaginatedDto {
  items: WebhookEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
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

export interface CheckCanCreateReferralResponseDto {
  /** @format uuid */
  productId: string;
  canCreate: boolean;
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
  currencyIds?: string[];
  destinationWalletAddresses?: string[];
}

export enum RewardAmountTypeEnum {
  Fixed = 'fixed',
  Percentage = 'percentage',
}

export interface RewardEntityDto {
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
  description?: string | null;

  /** @example fixed */
  amountType: RewardAmountTypeEnum;
  amount: string;
  isActive: boolean;

  /** @format uuid */
  keyErc20ContractId: string;

  /** @format uuid */
  productId: string;
  promotionOwnerReward: boolean;

  /** @format uuid */
  currencyId: string;

  /** @format uuid */
  promotionOwnerWhitelistId?: string | null;

  /** @format uuid */
  userWhitelistId?: string | null;
}

export enum PromotionTypeEnum {
  Coupon = 'coupon',
  Discount = 'discount',
}

export enum PromotionAmountTypeEnum {
  Fixed = 'fixed',
  Percentage = 'percentage',
}

export interface ReferralPromotionEntityDto {
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
  description: string | null;
  publicDescription: string;

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

  /** @format uuid */
  ownerId?: string;
  hasActiveRewards: boolean;
  ownerRewards: RewardEntityDto[];
  userRewards: RewardEntityDto[];

  /** @format uuid */
  productId: string;
}

export interface ReferralPromotionEntityPaginatedDto {
  items: ReferralPromotionEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface ActivateUserReferralPromotionDto {
  /** @format uuid */
  productId: string;
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
  description: string | null;
  publicDescription: string;

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

  /** @format uuid */
  ownerId?: string;
}

export interface PromotionEntityPaginatedDto {
  items: PromotionEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreatePromotionDto {
  description?: string | null;
  publicDescription: string;

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
  startAt?: string | null;

  /** @format date-time */
  endAt?: string | null;
  maxUsages?: number | null;
  maxUsagesPerUser?: number | null;
  requirements?: PromotionRequirementsDto | null;
}

export interface UpdatePromotionDto {
  description?: string | null;
  publicDescription: string;

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
  startAt?: string | null;

  /** @format date-time */
  endAt?: string | null;
  maxUsages?: number | null;
  maxUsagesPerUser?: number | null;
  requirements?: PromotionRequirementsDto | null;
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
  products: CreatePromotionProductDto[] | null;
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
  whitelists: CreatePromotionWhitelistDto[] | null;
}

export interface RewardEntityPaginatedDto {
  items: RewardEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateRewardDto {
  description?: string | null;

  /** @format uuid */
  productId: string;
  promotionOwnerReward: boolean;
  isActive: boolean;

  /** @format uuid */
  keyErc20ContractId: string;

  /** @format uuid */
  currencyId?: string;

  /** @example fixed */
  amountType: RewardAmountTypeEnum;
  amount: string;

  /** @format uuid */
  promotionOwnerWhitelistId?: string;

  /** @format uuid */
  userWhitelistId?: string;
}

export interface UpdateRewardDto {
  description?: string | null;

  /** @format uuid */
  productId: string;
  promotionOwnerReward: boolean;
  isActive: boolean;

  /** @format uuid */
  keyErc20ContractId: string;

  /** @format uuid */
  currencyId?: string;

  /** @example fixed */
  amountType: RewardAmountTypeEnum;
  amount: string;

  /** @format uuid */
  promotionOwnerWhitelistId?: string;

  /** @format uuid */
  userWhitelistId?: string;
}

export interface ExportEntityPaginatedDto {
  items: ExportEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface OrdersAdminExportDto {
  /** @example 2022-01-30T10:30:40-03:00 */
  createdAt?: string;
  sortBy?: string[];
  orderBy?: OrderByEnum;

  /** @example ["pending"] */
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

  /**
   * @format date-time
   * @example null
   */
  createdFrom?: string;

  /**
   * @format date-time
   * @example null
   */
  createdUntil?: string;

  /** @format uuid */
  userId?: string;

  /** @format uuid */
  currencyId?: string;

  /** @example pix */
  paymentMethod?: PaymentMethodEnum;

  /** @example stripe */
  paymentProvider?: PaymentProviderEnum;

  /** @example super_sales */
  utmCampaign?: string;

  /** @format uuid */
  productId?: string;
}

export interface ProjectHostEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  projectId: string;
  host: string;
}

export interface ProjectEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;
  name: string;
  hosts: ProjectHostEntityDto[];
}

export interface ProjectEntityPaginatedDto {
  items: ProjectEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface AttachProjectHostRequestDto {
  /** @example subdomain.domain.io */
  host: string;
}

export enum ProjectAuthTypeEnum {
  All = 'all',
  Authenticated = 'authenticated',
  Whitelist = 'whitelist',
  Anonymous = 'anonymous',
}

export interface ProjectAuthConfigDto {
  /** @example all */
  type: ProjectAuthTypeEnum;

  /** @example {"whitelists":[]} */
  data?: object;
  redirectUrl?: string;
}

export interface SetProjectPageRequestDto {
  /** @example / */
  routePattern: string;

  /** @example false */
  isRoutePatternRegex?: boolean;

  /** @example null */
  data?: object;

  /** @example My first page */
  name?: string;
  auth?: ProjectAuthConfigDto;
}

export interface SetProjectThemeRequestDto {
  name?: string;

  /** @example null */
  data?: object;
}

export interface CreateProjectRequestDto {
  /** @example Project 1 */
  name: string;
  hosts?: AttachProjectHostRequestDto[];
  pages?: SetProjectPageRequestDto[];
  theme?: SetProjectThemeRequestDto;
}

export interface UpdateProjectRequestDto {
  /** @example Project 1 */
  name: string;
}

export interface ProjectHostCheckResponseDto {
  /** @example subdomain.domain.io */
  host: string;

  /** @example false */
  available: boolean;
}

export interface ProjectThemeEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  projectId: string;
  project?: ProjectEntityDto;
  name?: string;
  isDefault: boolean;

  /** @example null */
  data?: object;
}

export interface ProjectPageEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId: string;

  /** @format uuid */
  projectId: string;
  project?: ProjectEntityDto;

  /** @example / */
  routePattern: string;

  /** @example / */
  routePatternRegex?: string;

  /** @example true */
  isRoutePatternRegex: boolean;

  /** @example null */
  data?: object;
  name?: string;

  /** @example true */
  isActive: boolean;

  /** @example {"type":"all"} */
  auth?: ProjectAuthConfigDto;
}

export interface ProjectPageEntityPaginatedDto {
  items: ProjectPageEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface DuplicateProjectPageRequestDto {
  /** @example / */
  routePattern: string;

  /** @example false */
  isRoutePatternRegex: boolean;

  /** @example My first page */
  name?: string;
}

export enum ComponentModuleSortByEnum {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Label = 'label',
}

export interface ComponentModuleEntityDto {
  /** @format uuid */
  id: string;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format uuid */
  companyId?: string;
  label: string;

  /** @example null */
  contentForm?: object;

  /** @example null */
  styleForm?: object;
}

export interface ComponentModuleEntityPaginatedDto {
  items: ComponentModuleEntityDto[];
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
}

export interface CreateComponentModuleRequestDto {
  /** @example Header */
  label: string;

  /** @example null */
  contentForm?: object;

  /** @example null */
  styleForm?: object;

  /** @format uuid */
  companyId?: string;
}

export interface UpdateComponentModuleRequestDto {
  /** @example Header */
  label: string;

  /** @example null */
  contentForm?: object;

  /** @example null */
  styleForm?: object;

  /** @format uuid */
  companyId?: string;
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
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      page?: number;
      limit?: number;
      search?: string;
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
   * @name GetUsageReport
   * @request GET:/companies/{companyId}/orders/usage-report
   * @secure
   */
  export namespace GetUsageReport {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
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
      currencyId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
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
   * @tags Orders
   * @name GetPublicOrderByDeliverId
   * @request GET:/companies/{companyId}/orders/get-by-deliver-id/{deliverId}
   * @secure
   */
  export namespace GetPublicOrderByDeliverId {
    export type RequestParams = { companyId: string; deliverId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Orders
   * @name GetByKycUserContextId
   * @request GET:/companies/{companyId}/orders/get-by-kyc-user-context-id/{kycUserContextId}
   * @secure
   */
  export namespace GetByKycUserContextId {
    export type RequestParams = { companyId: string; kycUserContextId: string };
    export type RequestQuery = { fetchNewestStatus?: boolean };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityDto;
  }
  /**
   * No description
   * @tags Orders
   * @name PayOrder
   * @request PATCH:/companies/{companyId}/orders/{orderId}/pay
   * @secure
   */
  export namespace PayOrder {
    export type RequestParams = { companyId: string; orderId: string };
    export type RequestQuery = {};
    export type RequestBody = PayOrderDto;
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
   * @description Lists available users payment providers
   * @tags Users Payment Providers (Used for Resale)
   * @name ListUserPaymentProviders
   * @request GET:/companies/{companyId}/users/{userId}/providers
   * @secure
   */
  export namespace ListUserPaymentProviders {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPaymentProviderEntityPaginatedDto;
  }
  /**
   * @description Gets user state of missing/configured required company payment provider
   * @tags Users Payment Providers (Used for Resale)
   * @name CheckUserConfiguredPaymentProviders
   * @request GET:/companies/{companyId}/users/{userId}/providers/check-configured-providers
   * @secure
   */
  export namespace CheckUserConfiguredPaymentProviders {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetConfiguredProvidersResponseDto;
  }
  /**
   * @description Requests a configuration of Stripe payment provider in the user (needs to be finished with oauth connection)
   * @tags Users Payment Providers (Used for Resale)
   * @name RequestUserStripePaymentProvider
   * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe
   * @secure
   */
  export namespace RequestUserStripePaymentProvider {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = ConnectOrRefreshStripePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = StripeConnectAccountResponseDto;
  }
  /**
   * @description Finishes user connection of Stripe payment provider configuration
   * @tags Users Payment Providers (Used for Resale)
   * @name FinishUserStripePaymentProvider
   * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe/finish-connection
   * @secure
   */
  export namespace FinishUserStripePaymentProvider {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPaymentProviderEntityDto;
  }
  /**
   * @description Refreshes an user stripe payment provider connection
   * @tags Users Payment Providers (Used for Resale)
   * @name RefreshUserStripePaymentProvider
   * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe/refresh-connection
   * @secure
   */
  export namespace RefreshUserStripePaymentProvider {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = ConnectOrRefreshStripePaymentProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = StripeConnectAccountResponseDto;
  }
  /**
   * @description Deletes some user payment provider configuration
   * @tags Users Payment Providers (Used for Resale)
   * @name DeleteUserPaymentProvider
   * @request DELETE:/companies/{companyId}/users/{userId}/providers/{provider}
   * @secure
   */
  export namespace DeleteUserPaymentProvider {
    export type RequestParams = { companyId: string; userId: string; provider: PaymentProviderEnum };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Lists all available user credit cards
   * @tags Users Credit Cards
   * @name ListUserCreditCards
   * @request GET:/companies/{companyId}/users/{userId}/credit-cards
   * @secure
   */
  export namespace ListUserCreditCards {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicUserCreditCardEntityPaginatedDto;
  }
  /**
   * @description Saves a new user credit card
   * @tags Users Credit Cards
   * @name SaveUserCreditCard
   * @request POST:/companies/{companyId}/users/{userId}/credit-cards
   * @secure
   */
  export namespace SaveUserCreditCard {
    export type RequestParams = { companyId: string; userId: string };
    export type RequestQuery = {};
    export type RequestBody = SaveUserCreditCardDto;
    export type RequestHeaders = {};
    export type ResponseBody = PublicUserCreditCardEntityDto;
  }
  /**
   * @description Deletes some user credit card by its id
   * @tags Users Credit Cards
   * @name DeleteUserCreditCard
   * @request DELETE:/companies/{companyId}/users/{userId}/credit-cards/{creditCardId}
   * @secure
   */
  export namespace DeleteUserCreditCard {
    export type RequestParams = { companyId: string; userId: string; creditCardId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Checks if some user wallet has approved an allowance to purchase using some amount of its ERC20 currency tokens
   * @tags Currencies
   * @name HasCurrencyAllowance
   * @request GET:/companies/{companyId}/currencies/{currencyId}/has-allowance
   * @secure
   */
  export namespace HasCurrencyAllowance {
    export type RequestParams = { companyId: string; currencyId: string };
    export type RequestQuery = { walletAddress?: string; amount: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HasAllowanceResponseDto;
  }
  /**
   * @description Sends to blockchain a request to increase some user wallet allowance of the ERC20 currency to a target amount. This is necessary to purchase using ERC20 tokens.
   * @tags Currencies
   * @name IncreaseCurrencyAllowance
   * @request PATCH:/companies/{companyId}/currencies/{currencyId}/increase-allowance
   * @secure
   */
  export namespace IncreaseCurrencyAllowance {
    export type RequestParams = { companyId: string; currencyId: string };
    export type RequestQuery = {};
    export type RequestBody = IncreaseCurrencyAllowanceDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Checks if user can create a referral coupon for some product id
   * @tags User Referral Coupons
   * @name CanCreateReferralCoupon
   * @request GET:/companies/{companyId}/referral/check-can-create
   * @secure
   */
  export namespace CanCreateReferralCoupon {
    export type RequestParams = { companyId: string };
    export type RequestQuery = { productId: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckCanCreateReferralResponseDto;
  }
  /**
   * @description Lists all user company referral coupons
   * @tags User Referral Coupons
   * @name ListUserReferralCoupons
   * @request GET:/companies/{companyId}/referral
   * @secure
   */
  export namespace ListUserReferralCoupons {
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
    export type ResponseBody = ReferralPromotionEntityPaginatedDto;
  }
  /**
   * @description Activates a new user referral coupon based on some company product
   * @tags User Referral Coupons
   * @name ActivateUserReferralCoupon
   * @request POST:/companies/{companyId}/referral
   * @secure
   */
  export namespace ActivateUserReferralCoupon {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = ActivateUserReferralPromotionDto;
    export type RequestHeaders = {};
    export type ResponseBody = ReferralPromotionEntityDto;
  }
  /**
   * @description Gets some user company referral coupon by product id
   * @tags User Referral Coupons
   * @name GetUserReferralCoupon
   * @request GET:/companies/{companyId}/referral/{productId}
   * @secure
   */
  export namespace GetUserReferralCoupon {
    export type RequestParams = { companyId: string; productId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReferralPromotionEntityDto;
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
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      page?: number;
      limit?: number;
      search?: string;
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
      productId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = OrderEntityPaginatedDto;
  }
  /**
   * @description Requests an order exports XLS based on listing params
   * @tags Orders (Admin)
   * @name RequestCompanyOrdersExportGeneration
   * @request GET:/admin/companies/{companyId}/orders/xls
   * @secure
   */
  export namespace RequestCompanyOrdersExportGeneration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
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
      productId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
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
   * @description List order products
   * @tags Order Products (Admin)
   * @name ListOrderProducts
   * @request GET:/admin/companies/{companyId}/order-products
   * @secure
   */
  export namespace ListOrderProducts {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      page?: number;
      limit?: number;
      search?: string;
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
      userId?: string;
      currencyId?: string;
      paymentMethod?: PaymentMethodEnum;
      paymentProvider?: PaymentProviderEnum;
      utmCampaign?: string;
      productId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Requests an order products export XLS based on listing params
   * @tags Order Products (Admin)
   * @name RequestCompanyOrderProductsExportGeneration
   * @request GET:/admin/companies/{companyId}/order-products/xls
   * @secure
   */
  export namespace RequestCompanyOrderProductsExportGeneration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
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
      userId?: string;
      currencyId?: string;
      paymentMethod?: PaymentMethodEnum;
      paymentProvider?: PaymentProviderEnum;
      utmCampaign?: string;
      productId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
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
   * @description Gets some email company notification config by its type
   * @tags Companies (Admin)
   * @name GetCompanyNotificationConfig
   * @request GET:/admin/companies/{companyId}/notifications/{notificationType}
   * @secure
   */
  export namespace GetCompanyNotificationConfig {
    export type RequestParams = { companyId: string; notificationType: NotificationTypeEnum };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyNotificationEntityDto;
  }
  /**
   * @description Sets some company notification email config by its type
   * @tags Companies (Admin)
   * @name SetCompanyNotificationConfig
   * @request PATCH:/admin/companies/{companyId}/notifications/{notificationType}
   * @secure
   */
  export namespace SetCompanyNotificationConfig {
    export type RequestParams = { companyId: string; notificationType: NotificationTypeEnum };
    export type RequestQuery = {};
    export type RequestBody = SetCompanyNotificationDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanyNotificationEntityDto;
  }
  /**
   * @description Lists all company split configuration rules
   * @tags Companies (Admin)
   * @name ListCompanySplitConfigurations
   * @request GET:/admin/companies/{companyId}/split-configurations
   * @secure
   */
  export namespace ListCompanySplitConfigurations {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
      orderBy?: OrderByEnum;
      page?: number;
      limit?: number;
      search?: string;
      type?: ('client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price')[];
      paymentProvider?: ('pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza')[];
      paymentMethod?: (
        | 'credit_card'
        | 'debit_card'
        | 'pix'
        | 'crypto'
        | 'transfer'
        | 'billet'
        | 'google_pay'
        | 'apple_pay'
      )[];
      contractAddress?: string[];
      chainId?: (1 | 3 | 4 | 42 | 1337 | 80001 | 137 | 1284 | 1285)[];
      productId?: string[];
      userId?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanySplitConfigurationEntityPaginatedDto;
  }
  /**
   * @description Creates a new company split configuration rule
   * @tags Companies (Admin)
   * @name CreateCompanySplitConfiguration
   * @request POST:/admin/companies/{companyId}/split-configurations
   * @secure
   */
  export namespace CreateCompanySplitConfiguration {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateCompanySplitConfigurationDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanySplitConfigurationEntityDto;
  }
  /**
   * @description Gets some company split configuration rule by its id
   * @tags Companies (Admin)
   * @name GetCompanySplitConfigurationById
   * @request GET:/admin/companies/{companyId}/split-configurations/{id}
   * @secure
   */
  export namespace GetCompanySplitConfigurationById {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompanySplitConfigurationEntityWithCorrelatedDto;
  }
  /**
   * @description Updates some company split configuration rule
   * @tags Companies (Admin)
   * @name UpdateCompanySplitConfiguration
   * @request PATCH:/admin/companies/{companyId}/split-configurations/{id}
   * @secure
   */
  export namespace UpdateCompanySplitConfiguration {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateCompanySplitConfigurationDto;
    export type RequestHeaders = {};
    export type ResponseBody = CompanySplitConfigurationEntityWithCorrelatedDto;
  }
  /**
   * @description Deletes some company split configuration rule
   * @tags Companies (Admin)
   * @name DeleteCompanySplitConfiguration
   * @request DELETE:/admin/companies/{companyId}/split-configurations/{id}
   * @secure
   */
  export namespace DeleteCompanySplitConfiguration {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Gets some company split configuration correlated rules
   * @tags Companies (Admin)
   * @name GetCorrelatedSplitConfigurations
   * @request GET:/admin/companies/{companyId}/split-configurations/{id}/correlated-configurations
   * @secure
   */
  export namespace GetCorrelatedSplitConfigurations {
    export type RequestParams = { companyId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CorrelatedSplitConfigurationsResponseDto;
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
   * @description Lists all company rewards
   * @tags Companies Rewards (Admin)
   * @name ListRewards
   * @request GET:/admin/companies/{companyId}/rewards
   * @secure
   */
  export namespace ListRewards {
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
    export type ResponseBody = RewardEntityPaginatedDto;
  }
  /**
   * @description Creates a new company reward
   * @tags Companies Rewards (Admin)
   * @name CreateReward
   * @request POST:/admin/companies/{companyId}/rewards
   * @secure
   */
  export namespace CreateReward {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateRewardDto;
    export type RequestHeaders = {};
    export type ResponseBody = RewardEntityDto;
  }
  /**
   * @description Gets some company reward by id
   * @tags Companies Rewards (Admin)
   * @name GetReward
   * @request GET:/admin/companies/{companyId}/rewards/{rewardId}
   * @secure
   */
  export namespace GetReward {
    export type RequestParams = { companyId: string; rewardId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RewardEntityDto;
  }
  /**
   * @description Updates some company reward
   * @tags Companies Rewards (Admin)
   * @name UpdateReward
   * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}
   * @secure
   */
  export namespace UpdateReward {
    export type RequestParams = { companyId: string; rewardId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateRewardDto;
    export type RequestHeaders = {};
    export type ResponseBody = RewardEntityDto;
  }
  /**
   * @description Deletes some company reward
   * @tags Companies Rewards (Admin)
   * @name DeleteReward
   * @request DELETE:/admin/companies/{companyId}/rewards/{rewardId}
   * @secure
   */
  export namespace DeleteReward {
    export type RequestParams = { companyId: string; rewardId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Activates some company reward by id
   * @tags Companies Rewards (Admin)
   * @name ActivateRewardById
   * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}/activate
   * @secure
   */
  export namespace ActivateRewardById {
    export type RequestParams = { companyId: string; rewardId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RewardEntityDto;
  }
  /**
   * @description Deactivates some company reward by id
   * @tags Companies Rewards (Admin)
   * @name DeactivateRewardById
   * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}/deactivate
   * @secure
   */
  export namespace DeactivateRewardById {
    export type RequestParams = { companyId: string; rewardId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RewardEntityDto;
  }
  /**
   * @description Lists all company exports
   * @tags Exports (Admin)
   * @name ListCompanyExports
   * @request GET:/admin/companies/{companyId}/exports
   * @secure
   */
  export namespace ListCompanyExports {
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
    export type ResponseBody = ExportEntityPaginatedDto;
  }
  /**
   * @description Gets some specific company export by its ID
   * @tags Exports (Admin)
   * @name GetCompanyExport
   * @request GET:/admin/companies/{companyId}/exports/{exportId}
   * @secure
   */
  export namespace GetCompanyExport {
    export type RequestParams = { companyId: string; exportId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
  }
  /**
   * @description Requests an order exports XLS based on some params
   * @tags Exports (Admin)
   * @name RequestCompanyOrdersExport
   * @request POST:/admin/companies/{companyId}/exports/generate/orders
   * @secure
   */
  export namespace RequestCompanyOrdersExport {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = OrdersAdminExportDto;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
  }
  /**
   * @description Lists company projects
   * @tags Projects (Admin)
   * @name ListCompanyProjects
   * @request GET:/admin/companies/{companyId}/projects
   * @secure
   */
  export namespace ListCompanyProjects {
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
    export type ResponseBody = ProjectEntityPaginatedDto;
  }
  /**
   * @description Creates a project inside a company context
   * @tags Projects (Admin)
   * @name CreateCompanyProject
   * @request POST:/admin/companies/{companyId}/projects
   * @secure
   */
  export namespace CreateCompanyProject {
    export type RequestParams = { companyId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateProjectRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectEntityDto;
  }
  /**
   * @description Gets some company project by ID
   * @tags Projects (Admin)
   * @name GetCompanyProject
   * @request GET:/admin/companies/{companyId}/projects/{projectId}
   * @secure
   */
  export namespace GetCompanyProject {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectEntityDto;
  }
  /**
   * @description Updates some company project
   * @tags Projects (Admin)
   * @name UpdateCompanyProject
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}
   * @secure
   */
  export namespace UpdateCompanyProject {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateProjectRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectEntityDto;
  }
  /**
   * @description Deletes some company project
   * @tags Projects (Admin)
   * @name DeleteCompanyProject
   * @request DELETE:/admin/companies/{companyId}/projects/{projectId}
   * @secure
   */
  export namespace DeleteCompanyProject {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Checks if some host is available to be attached into a project
   * @tags Projects (Admin)
   * @name CheckHostState
   * @request GET:/admin/companies/{companyId}/projects/check/host-availability
   * @secure
   */
  export namespace CheckHostState {
    export type RequestParams = { companyId: string };
    export type RequestQuery = { host: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectHostCheckResponseDto;
  }
  /**
   * @description Attach some host into a company project
   * @tags Projects (Admin)
   * @name AttachHostToCompanyProject
   * @request POST:/admin/companies/{companyId}/projects/{projectId}/hosts
   * @secure
   */
  export namespace AttachHostToCompanyProject {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = AttachProjectHostRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectHostEntityDto;
  }
  /**
   * @description Detach some host from a company project
   * @tags Projects (Admin)
   * @name DetachHostFromCompanyProject
   * @request DELETE:/admin/companies/{companyId}/projects/{projectId}/hosts/{hostId}
   * @secure
   */
  export namespace DetachHostFromCompanyProject {
    export type RequestParams = { companyId: string; projectId: string; hostId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Updates some company project default theme. If there's no default theme configured, a new one is automatically created
   * @tags Projects (Admin)
   * @name UpsertDefaultCompanyProjectTheme
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/themes/default
   * @secure
   */
  export namespace UpsertDefaultCompanyProjectTheme {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = SetProjectThemeRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectThemeEntityDto;
  }
  /**
   * @description Lists company project pages
   * @tags Projects (Admin)
   * @name ListCompanyProjectPages
   * @request GET:/admin/companies/{companyId}/projects/{projectId}/pages
   * @secure
   */
  export namespace ListCompanyProjectPages {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityPaginatedDto;
  }
  /**
   * @description Upsert some company project page. The unique key used to upsert is the page route pattern
   * @tags Projects (Admin)
   * @name UpsertCompanyProjectPage
   * @request POST:/admin/companies/{companyId}/projects/{projectId}/pages
   * @secure
   */
  export namespace UpsertCompanyProjectPage {
    export type RequestParams = { companyId: string; projectId: string };
    export type RequestQuery = {};
    export type RequestBody = SetProjectPageRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
  }
  /**
   * @description Gets a company project page by ID
   * @tags Projects (Admin)
   * @name GetCompanyProjectPageById
   * @request GET:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
   * @secure
   */
  export namespace GetCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {
      enableSimulation?: boolean;
      simulateUnauthenticatedUser?: boolean;
      simulateUserWhitelistAccesses?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
  }
  /**
   * @description Updates some company project page by id
   * @tags Projects (Admin)
   * @name UpdateCompanyProjectPageById
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
   * @secure
   */
  export namespace UpdateCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {};
    export type RequestBody = SetProjectPageRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
  }
  /**
   * @description Deletes some company project page by id
   * @tags Projects (Admin)
   * @name DeleteCompanyProjectPageById
   * @request DELETE:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
   * @secure
   */
  export namespace DeleteCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Activates some company project page by id
   * @tags Projects (Admin)
   * @name ActivateCompanyProjectPageById
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/activate
   * @secure
   */
  export namespace ActivateCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
  }
  /**
   * @description Deactivates some company project page by id
   * @tags Projects (Admin)
   * @name DeactivateCompanyProjectPageById
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/deactivate
   * @secure
   */
  export namespace DeactivateCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
  }
  /**
   * @description Duplicates some company project page by id
   * @tags Projects (Admin)
   * @name DuplicateCompanyProjectPageById
   * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/duplicate
   * @secure
   */
  export namespace DuplicateCompanyProjectPageById {
    export type RequestParams = { companyId: string; projectId: string; pageId: string };
    export type RequestQuery = {};
    export type RequestBody = DuplicateProjectPageRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
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
   * @description Requests an order exports XLS for all tenants based on listing params
   * @tags Orders (Super Admin)
   * @name RequestSystemOrdersExportGeneration
   * @request GET:/super-admin/orders/xls
   * @secure
   */
  export namespace RequestSystemOrdersExportGeneration {
    export type RequestParams = {};
    export type RequestQuery = {
      createdAt?: string;
      sortBy?: string[];
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
      userId?: string;
      currencyId?: string;
      paymentMethod?: PaymentMethodEnum;
      paymentProvider?: PaymentProviderEnum;
      utmCampaign?: string;
      productId?: string;
      excludeSandboxes?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExportEntityDto;
  }
  /**
   * @description Dispatches an order system event that will be used to execute some system functionalities
   * @tags Orders (Super Admin)
   * @name DispatchSystemOrderEvent
   * @request POST:/super-admin/orders/dispatch-order-event
   * @secure
   */
  export namespace DispatchSystemOrderEvent {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DispatchOrderEventDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
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
  /**
   * @description Lists system available component modules
   * @tags Globals
   * @name ListComponentModules
   * @request GET:/globals/component-modules
   * @secure
   */
  export namespace ListComponentModules {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: ComponentModuleSortByEnum;
      orderBy?: OrderByEnum;
      label?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ComponentModuleEntityPaginatedDto;
  }
  /**
   * @description Creates a component module globally of just for some company
   * @tags Globals
   * @name CreateComponentModule
   * @request POST:/globals/component-modules
   * @secure
   */
  export namespace CreateComponentModule {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateComponentModuleRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ComponentModuleEntityDto;
  }
  /**
   * @description Updates some component module
   * @tags Globals
   * @name UpdateComponentModule
   * @request PATCH:/globals/component-modules/{id}
   * @secure
   */
  export namespace UpdateComponentModule {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateComponentModuleRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = ComponentModuleEntityDto;
  }
  /**
   * @description Deletes some component module
   * @tags Globals
   * @name DeleteComponentModule
   * @request DELETE:/globals/component-modules/{id}
   * @secure
   */
  export namespace DeleteComponentModule {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Projects {
  /**
   * @description Gets some theme configs based on request url
   * @tags Projects
   * @name GetThemeByUrl
   * @request GET:/projects/get-theme
   * @secure
   */
  export namespace GetThemeByUrl {
    export type RequestParams = {};
    export type RequestQuery = { url?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectThemeEntityDto;
  }
  /**
   * @description Gets some page configs based on request url
   * @tags Projects
   * @name GetPageByUrl
   * @request GET:/projects/get-page
   * @secure
   */
  export namespace GetPageByUrl {
    export type RequestParams = {};
    export type RequestQuery = { url?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ProjectPageEntityDto;
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
 * @version 2.49.1
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
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        page?: number;
        limit?: number;
        search?: string;
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
     * @name GetUsageReport
     * @request GET:/companies/{companyId}/orders/usage-report
     * @secure
     */
    getUsageReport: (
      companyId: string,
      query?: {
        createdAt?: string;
        sortBy?: string[];
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
        currencyId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/companies/${companyId}/orders/usage-report`,
        method: 'GET',
        query: query,
        secure: true,
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
     * @tags Orders
     * @name GetPublicOrderByDeliverId
     * @request GET:/companies/{companyId}/orders/get-by-deliver-id/{deliverId}
     * @secure
     */
    getPublicOrderByDeliverId: (companyId: string, deliverId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/orders/get-by-deliver-id/${deliverId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name GetByKycUserContextId
     * @request GET:/companies/{companyId}/orders/get-by-kyc-user-context-id/{kycUserContextId}
     * @secure
     */
    getByKycUserContextId: (
      companyId: string,
      kycUserContextId: string,
      query?: { fetchNewestStatus?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<OrderEntityDto, void>({
        path: `/companies/${companyId}/orders/get-by-kyc-user-context-id/${kycUserContextId}`,
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
     * @name PayOrder
     * @request PATCH:/companies/{companyId}/orders/{orderId}/pay
     * @secure
     */
    payOrder: (companyId: string, orderId: string, data: PayOrderDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/orders/${orderId}/pay`,
        method: 'PATCH',
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
     * @description Lists available users payment providers
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name ListUserPaymentProviders
     * @request GET:/companies/{companyId}/users/{userId}/providers
     * @secure
     */
    listUserPaymentProviders: (
      companyId: string,
      userId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<UserPaymentProviderEntityPaginatedDto, void>({
        path: `/companies/${companyId}/users/${userId}/providers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets user state of missing/configured required company payment provider
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name CheckUserConfiguredPaymentProviders
     * @request GET:/companies/{companyId}/users/{userId}/providers/check-configured-providers
     * @secure
     */
    checkUserConfiguredPaymentProviders: (companyId: string, userId: string, params: RequestParams = {}) =>
      this.request<GetConfiguredProvidersResponseDto, void>({
        path: `/companies/${companyId}/users/${userId}/providers/check-configured-providers`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Requests a configuration of Stripe payment provider in the user (needs to be finished with oauth connection)
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name RequestUserStripePaymentProvider
     * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe
     * @secure
     */
    requestUserStripePaymentProvider: (
      companyId: string,
      userId: string,
      data: ConnectOrRefreshStripePaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<StripeConnectAccountResponseDto, void>({
        path: `/companies/${companyId}/users/${userId}/providers/stripe`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Finishes user connection of Stripe payment provider configuration
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name FinishUserStripePaymentProvider
     * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe/finish-connection
     * @secure
     */
    finishUserStripePaymentProvider: (companyId: string, userId: string, params: RequestParams = {}) =>
      this.request<UserPaymentProviderEntityDto, void>({
        path: `/companies/${companyId}/users/${userId}/providers/stripe/finish-connection`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Refreshes an user stripe payment provider connection
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name RefreshUserStripePaymentProvider
     * @request PATCH:/companies/{companyId}/users/{userId}/providers/stripe/refresh-connection
     * @secure
     */
    refreshUserStripePaymentProvider: (
      companyId: string,
      userId: string,
      data: ConnectOrRefreshStripePaymentProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<StripeConnectAccountResponseDto, void>({
        path: `/companies/${companyId}/users/${userId}/providers/stripe/refresh-connection`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some user payment provider configuration
     *
     * @tags Users Payment Providers (Used for Resale)
     * @name DeleteUserPaymentProvider
     * @request DELETE:/companies/{companyId}/users/{userId}/providers/{provider}
     * @secure
     */
    deleteUserPaymentProvider: (
      companyId: string,
      userId: string,
      provider: PaymentProviderEnum,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/companies/${companyId}/users/${userId}/providers/${provider}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Lists all available user credit cards
     *
     * @tags Users Credit Cards
     * @name ListUserCreditCards
     * @request GET:/companies/{companyId}/users/{userId}/credit-cards
     * @secure
     */
    listUserCreditCards: (
      companyId: string,
      userId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<PublicUserCreditCardEntityPaginatedDto, void>({
        path: `/companies/${companyId}/users/${userId}/credit-cards`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Saves a new user credit card
     *
     * @tags Users Credit Cards
     * @name SaveUserCreditCard
     * @request POST:/companies/{companyId}/users/{userId}/credit-cards
     * @secure
     */
    saveUserCreditCard: (companyId: string, userId: string, data: SaveUserCreditCardDto, params: RequestParams = {}) =>
      this.request<PublicUserCreditCardEntityDto, void>({
        path: `/companies/${companyId}/users/${userId}/credit-cards`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some user credit card by its id
     *
     * @tags Users Credit Cards
     * @name DeleteUserCreditCard
     * @request DELETE:/companies/{companyId}/users/{userId}/credit-cards/{creditCardId}
     * @secure
     */
    deleteUserCreditCard: (companyId: string, userId: string, creditCardId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/companies/${companyId}/users/${userId}/credit-cards/${creditCardId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Checks if some user wallet has approved an allowance to purchase using some amount of its ERC20 currency tokens
     *
     * @tags Currencies
     * @name HasCurrencyAllowance
     * @request GET:/companies/{companyId}/currencies/{currencyId}/has-allowance
     * @secure
     */
    hasCurrencyAllowance: (
      companyId: string,
      currencyId: string,
      query: { walletAddress?: string; amount: string },
      params: RequestParams = {},
    ) =>
      this.request<HasAllowanceResponseDto, void>({
        path: `/companies/${companyId}/currencies/${currencyId}/has-allowance`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sends to blockchain a request to increase some user wallet allowance of the ERC20 currency to a target amount. This is necessary to purchase using ERC20 tokens.
     *
     * @tags Currencies
     * @name IncreaseCurrencyAllowance
     * @request PATCH:/companies/{companyId}/currencies/{currencyId}/increase-allowance
     * @secure
     */
    increaseCurrencyAllowance: (
      companyId: string,
      currencyId: string,
      data: IncreaseCurrencyAllowanceDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/companies/${companyId}/currencies/${currencyId}/increase-allowance`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Checks if user can create a referral coupon for some product id
     *
     * @tags User Referral Coupons
     * @name CanCreateReferralCoupon
     * @request GET:/companies/{companyId}/referral/check-can-create
     * @secure
     */
    canCreateReferralCoupon: (companyId: string, query: { productId: string }, params: RequestParams = {}) =>
      this.request<CheckCanCreateReferralResponseDto, void>({
        path: `/companies/${companyId}/referral/check-can-create`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all user company referral coupons
     *
     * @tags User Referral Coupons
     * @name ListUserReferralCoupons
     * @request GET:/companies/{companyId}/referral
     * @secure
     */
    listUserReferralCoupons: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ReferralPromotionEntityPaginatedDto, void>({
        path: `/companies/${companyId}/referral`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Activates a new user referral coupon based on some company product
     *
     * @tags User Referral Coupons
     * @name ActivateUserReferralCoupon
     * @request POST:/companies/{companyId}/referral
     * @secure
     */
    activateUserReferralCoupon: (
      companyId: string,
      data: ActivateUserReferralPromotionDto,
      params: RequestParams = {},
    ) =>
      this.request<ReferralPromotionEntityDto, void>({
        path: `/companies/${companyId}/referral`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some user company referral coupon by product id
     *
     * @tags User Referral Coupons
     * @name GetUserReferralCoupon
     * @request GET:/companies/{companyId}/referral/{productId}
     * @secure
     */
    getUserReferralCoupon: (companyId: string, productId: string, params: RequestParams = {}) =>
      this.request<ReferralPromotionEntityDto, void>({
        path: `/companies/${companyId}/referral/${productId}`,
        method: 'GET',
        secure: true,
        format: 'json',
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
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        page?: number;
        limit?: number;
        search?: string;
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
        productId?: string;
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
     * @description Requests an order exports XLS based on listing params
     *
     * @tags Orders (Admin)
     * @name RequestCompanyOrdersExportGeneration
     * @request GET:/admin/companies/{companyId}/orders/xls
     * @secure
     */
    requestCompanyOrdersExportGeneration: (
      companyId: string,
      query?: {
        createdAt?: string;
        sortBy?: string[];
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
        productId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExportEntityDto, void>({
        path: `/admin/companies/${companyId}/orders/xls`,
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
     * @description List order products
     *
     * @tags Order Products (Admin)
     * @name ListOrderProducts
     * @request GET:/admin/companies/{companyId}/order-products
     * @secure
     */
    listOrderProducts: (
      companyId: string,
      query?: {
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        page?: number;
        limit?: number;
        search?: string;
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
        userId?: string;
        currencyId?: string;
        paymentMethod?: PaymentMethodEnum;
        paymentProvider?: PaymentProviderEnum;
        utmCampaign?: string;
        productId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/order-products`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Requests an order products export XLS based on listing params
     *
     * @tags Order Products (Admin)
     * @name RequestCompanyOrderProductsExportGeneration
     * @request GET:/admin/companies/{companyId}/order-products/xls
     * @secure
     */
    requestCompanyOrderProductsExportGeneration: (
      companyId: string,
      query?: {
        createdAt?: string;
        sortBy?: string[];
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
        userId?: string;
        currencyId?: string;
        paymentMethod?: PaymentMethodEnum;
        paymentProvider?: PaymentProviderEnum;
        utmCampaign?: string;
        productId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExportEntityDto, void>({
        path: `/admin/companies/${companyId}/order-products/xls`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
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
     * @description Gets some email company notification config by its type
     *
     * @tags Companies (Admin)
     * @name GetCompanyNotificationConfig
     * @request GET:/admin/companies/{companyId}/notifications/{notificationType}
     * @secure
     */
    getCompanyNotificationConfig: (
      companyId: string,
      notificationType: NotificationTypeEnum,
      params: RequestParams = {},
    ) =>
      this.request<CompanyNotificationEntityDto, void>({
        path: `/admin/companies/${companyId}/notifications/${notificationType}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Sets some company notification email config by its type
     *
     * @tags Companies (Admin)
     * @name SetCompanyNotificationConfig
     * @request PATCH:/admin/companies/{companyId}/notifications/{notificationType}
     * @secure
     */
    setCompanyNotificationConfig: (
      companyId: string,
      notificationType: NotificationTypeEnum,
      data: SetCompanyNotificationDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanyNotificationEntityDto, void>({
        path: `/admin/companies/${companyId}/notifications/${notificationType}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all company split configuration rules
     *
     * @tags Companies (Admin)
     * @name ListCompanySplitConfigurations
     * @request GET:/admin/companies/{companyId}/split-configurations
     * @secure
     */
    listCompanySplitConfigurations: (
      companyId: string,
      query?: {
        createdAt?: string;
        sortBy?: string[];
        orderBy?: OrderByEnum;
        page?: number;
        limit?: number;
        search?: string;
        type?: ('client_service_fee' | 'company_service_fee' | 'resale_fee' | 'gas_fee' | 'product_price')[];
        paymentProvider?: ('pagar_me' | 'paypal' | 'transfer' | 'stripe' | 'asaas' | 'crypto' | 'free' | 'braza')[];
        paymentMethod?: (
          | 'credit_card'
          | 'debit_card'
          | 'pix'
          | 'crypto'
          | 'transfer'
          | 'billet'
          | 'google_pay'
          | 'apple_pay'
        )[];
        contractAddress?: string[];
        chainId?: (1 | 3 | 4 | 42 | 1337 | 80001 | 137 | 1284 | 1285)[];
        productId?: string[];
        userId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<CompanySplitConfigurationEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/split-configurations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company split configuration rule
     *
     * @tags Companies (Admin)
     * @name CreateCompanySplitConfiguration
     * @request POST:/admin/companies/{companyId}/split-configurations
     * @secure
     */
    createCompanySplitConfiguration: (
      companyId: string,
      data: CreateCompanySplitConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanySplitConfigurationEntityDto, void>({
        path: `/admin/companies/${companyId}/split-configurations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company split configuration rule by its id
     *
     * @tags Companies (Admin)
     * @name GetCompanySplitConfigurationById
     * @request GET:/admin/companies/{companyId}/split-configurations/{id}
     * @secure
     */
    getCompanySplitConfigurationById: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<CompanySplitConfigurationEntityWithCorrelatedDto, void>({
        path: `/admin/companies/${companyId}/split-configurations/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company split configuration rule
     *
     * @tags Companies (Admin)
     * @name UpdateCompanySplitConfiguration
     * @request PATCH:/admin/companies/{companyId}/split-configurations/{id}
     * @secure
     */
    updateCompanySplitConfiguration: (
      companyId: string,
      id: string,
      data: UpdateCompanySplitConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<CompanySplitConfigurationEntityWithCorrelatedDto, void>({
        path: `/admin/companies/${companyId}/split-configurations/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company split configuration rule
     *
     * @tags Companies (Admin)
     * @name DeleteCompanySplitConfiguration
     * @request DELETE:/admin/companies/{companyId}/split-configurations/{id}
     * @secure
     */
    deleteCompanySplitConfiguration: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/split-configurations/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Gets some company split configuration correlated rules
     *
     * @tags Companies (Admin)
     * @name GetCorrelatedSplitConfigurations
     * @request GET:/admin/companies/{companyId}/split-configurations/{id}/correlated-configurations
     * @secure
     */
    getCorrelatedSplitConfigurations: (companyId: string, id: string, params: RequestParams = {}) =>
      this.request<CorrelatedSplitConfigurationsResponseDto, void>({
        path: `/admin/companies/${companyId}/split-configurations/${id}/correlated-configurations`,
        method: 'GET',
        secure: true,
        format: 'json',
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
     * @description Lists all company rewards
     *
     * @tags Companies Rewards (Admin)
     * @name ListRewards
     * @request GET:/admin/companies/{companyId}/rewards
     * @secure
     */
    listRewards: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<RewardEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/rewards`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new company reward
     *
     * @tags Companies Rewards (Admin)
     * @name CreateReward
     * @request POST:/admin/companies/{companyId}/rewards
     * @secure
     */
    createReward: (companyId: string, data: CreateRewardDto, params: RequestParams = {}) =>
      this.request<RewardEntityDto, void>({
        path: `/admin/companies/${companyId}/rewards`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company reward by id
     *
     * @tags Companies Rewards (Admin)
     * @name GetReward
     * @request GET:/admin/companies/{companyId}/rewards/{rewardId}
     * @secure
     */
    getReward: (companyId: string, rewardId: string, params: RequestParams = {}) =>
      this.request<RewardEntityDto, void>({
        path: `/admin/companies/${companyId}/rewards/${rewardId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company reward
     *
     * @tags Companies Rewards (Admin)
     * @name UpdateReward
     * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}
     * @secure
     */
    updateReward: (companyId: string, rewardId: string, data: UpdateRewardDto, params: RequestParams = {}) =>
      this.request<RewardEntityDto, void>({
        path: `/admin/companies/${companyId}/rewards/${rewardId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company reward
     *
     * @tags Companies Rewards (Admin)
     * @name DeleteReward
     * @request DELETE:/admin/companies/{companyId}/rewards/{rewardId}
     * @secure
     */
    deleteReward: (companyId: string, rewardId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/rewards/${rewardId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Activates some company reward by id
     *
     * @tags Companies Rewards (Admin)
     * @name ActivateRewardById
     * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}/activate
     * @secure
     */
    activateRewardById: (companyId: string, rewardId: string, params: RequestParams = {}) =>
      this.request<RewardEntityDto, void>({
        path: `/admin/companies/${companyId}/rewards/${rewardId}/activate`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deactivates some company reward by id
     *
     * @tags Companies Rewards (Admin)
     * @name DeactivateRewardById
     * @request PATCH:/admin/companies/{companyId}/rewards/{rewardId}/deactivate
     * @secure
     */
    deactivateRewardById: (companyId: string, rewardId: string, params: RequestParams = {}) =>
      this.request<RewardEntityDto, void>({
        path: `/admin/companies/${companyId}/rewards/${rewardId}/deactivate`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists all company exports
     *
     * @tags Exports (Admin)
     * @name ListCompanyExports
     * @request GET:/admin/companies/{companyId}/exports
     * @secure
     */
    listCompanyExports: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ExportEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/exports`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some specific company export by its ID
     *
     * @tags Exports (Admin)
     * @name GetCompanyExport
     * @request GET:/admin/companies/{companyId}/exports/{exportId}
     * @secure
     */
    getCompanyExport: (companyId: string, exportId: string, params: RequestParams = {}) =>
      this.request<ExportEntityDto, void>({
        path: `/admin/companies/${companyId}/exports/${exportId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Requests an order exports XLS based on some params
     *
     * @tags Exports (Admin)
     * @name RequestCompanyOrdersExport
     * @request POST:/admin/companies/{companyId}/exports/generate/orders
     * @secure
     */
    requestCompanyOrdersExport: (companyId: string, data: OrdersAdminExportDto, params: RequestParams = {}) =>
      this.request<ExportEntityDto, void>({
        path: `/admin/companies/${companyId}/exports/generate/orders`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists company projects
     *
     * @tags Projects (Admin)
     * @name ListCompanyProjects
     * @request GET:/admin/companies/{companyId}/projects
     * @secure
     */
    listCompanyProjects: (
      companyId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ProjectEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/projects`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a project inside a company context
     *
     * @tags Projects (Admin)
     * @name CreateCompanyProject
     * @request POST:/admin/companies/{companyId}/projects
     * @secure
     */
    createCompanyProject: (companyId: string, data: CreateProjectRequestDto, params: RequestParams = {}) =>
      this.request<ProjectEntityDto, void>({
        path: `/admin/companies/${companyId}/projects`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some company project by ID
     *
     * @tags Projects (Admin)
     * @name GetCompanyProject
     * @request GET:/admin/companies/{companyId}/projects/{projectId}
     * @secure
     */
    getCompanyProject: (companyId: string, projectId: string, params: RequestParams = {}) =>
      this.request<ProjectEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company project
     *
     * @tags Projects (Admin)
     * @name UpdateCompanyProject
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}
     * @secure
     */
    updateCompanyProject: (
      companyId: string,
      projectId: string,
      data: UpdateProjectRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company project
     *
     * @tags Projects (Admin)
     * @name DeleteCompanyProject
     * @request DELETE:/admin/companies/{companyId}/projects/{projectId}
     * @secure
     */
    deleteCompanyProject: (companyId: string, projectId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Checks if some host is available to be attached into a project
     *
     * @tags Projects (Admin)
     * @name CheckHostState
     * @request GET:/admin/companies/{companyId}/projects/check/host-availability
     * @secure
     */
    checkHostState: (companyId: string, query: { host: string }, params: RequestParams = {}) =>
      this.request<ProjectHostCheckResponseDto, void>({
        path: `/admin/companies/${companyId}/projects/check/host-availability`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Attach some host into a company project
     *
     * @tags Projects (Admin)
     * @name AttachHostToCompanyProject
     * @request POST:/admin/companies/{companyId}/projects/{projectId}/hosts
     * @secure
     */
    attachHostToCompanyProject: (
      companyId: string,
      projectId: string,
      data: AttachProjectHostRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectHostEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/hosts`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Detach some host from a company project
     *
     * @tags Projects (Admin)
     * @name DetachHostFromCompanyProject
     * @request DELETE:/admin/companies/{companyId}/projects/{projectId}/hosts/{hostId}
     * @secure
     */
    detachHostFromCompanyProject: (companyId: string, projectId: string, hostId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/hosts/${hostId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Updates some company project default theme. If there's no default theme configured, a new one is automatically created
     *
     * @tags Projects (Admin)
     * @name UpsertDefaultCompanyProjectTheme
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/themes/default
     * @secure
     */
    upsertDefaultCompanyProjectTheme: (
      companyId: string,
      projectId: string,
      data: SetProjectThemeRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectThemeEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/themes/default`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Lists company project pages
     *
     * @tags Projects (Admin)
     * @name ListCompanyProjectPages
     * @request GET:/admin/companies/{companyId}/projects/{projectId}/pages
     * @secure
     */
    listCompanyProjectPages: (
      companyId: string,
      projectId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityPaginatedDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Upsert some company project page. The unique key used to upsert is the page route pattern
     *
     * @tags Projects (Admin)
     * @name UpsertCompanyProjectPage
     * @request POST:/admin/companies/{companyId}/projects/{projectId}/pages
     * @secure
     */
    upsertCompanyProjectPage: (
      companyId: string,
      projectId: string,
      data: SetProjectPageRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets a company project page by ID
     *
     * @tags Projects (Admin)
     * @name GetCompanyProjectPageById
     * @request GET:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
     * @secure
     */
    getCompanyProjectPageById: (
      companyId: string,
      projectId: string,
      pageId: string,
      query?: {
        enableSimulation?: boolean;
        simulateUnauthenticatedUser?: boolean;
        simulateUserWhitelistAccesses?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some company project page by id
     *
     * @tags Projects (Admin)
     * @name UpdateCompanyProjectPageById
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
     * @secure
     */
    updateCompanyProjectPageById: (
      companyId: string,
      projectId: string,
      pageId: string,
      data: SetProjectPageRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some company project page by id
     *
     * @tags Projects (Admin)
     * @name DeleteCompanyProjectPageById
     * @request DELETE:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}
     * @secure
     */
    deleteCompanyProjectPageById: (companyId: string, projectId: string, pageId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Activates some company project page by id
     *
     * @tags Projects (Admin)
     * @name ActivateCompanyProjectPageById
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/activate
     * @secure
     */
    activateCompanyProjectPageById: (
      companyId: string,
      projectId: string,
      pageId: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}/activate`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deactivates some company project page by id
     *
     * @tags Projects (Admin)
     * @name DeactivateCompanyProjectPageById
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/deactivate
     * @secure
     */
    deactivateCompanyProjectPageById: (
      companyId: string,
      projectId: string,
      pageId: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}/deactivate`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Duplicates some company project page by id
     *
     * @tags Projects (Admin)
     * @name DuplicateCompanyProjectPageById
     * @request PATCH:/admin/companies/{companyId}/projects/{projectId}/pages/{pageId}/duplicate
     * @secure
     */
    duplicateCompanyProjectPageById: (
      companyId: string,
      projectId: string,
      pageId: string,
      data: DuplicateProjectPageRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ProjectPageEntityDto, void>({
        path: `/admin/companies/${companyId}/projects/${projectId}/pages/${pageId}/duplicate`,
        method: 'PATCH',
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
  superAdmin = {
    /**
     * @description Requests an order exports XLS for all tenants based on listing params
     *
     * @tags Orders (Super Admin)
     * @name RequestSystemOrdersExportGeneration
     * @request GET:/super-admin/orders/xls
     * @secure
     */
    requestSystemOrdersExportGeneration: (
      query?: {
        createdAt?: string;
        sortBy?: string[];
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
        userId?: string;
        currencyId?: string;
        paymentMethod?: PaymentMethodEnum;
        paymentProvider?: PaymentProviderEnum;
        utmCampaign?: string;
        productId?: string;
        excludeSandboxes?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExportEntityDto, any>({
        path: `/super-admin/orders/xls`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Dispatches an order system event that will be used to execute some system functionalities
     *
     * @tags Orders (Super Admin)
     * @name DispatchSystemOrderEvent
     * @request POST:/super-admin/orders/dispatch-order-event
     * @secure
     */
    dispatchSystemOrderEvent: (data: DispatchOrderEventDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/super-admin/orders/dispatch-order-event`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

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

    /**
     * @description Lists system available component modules
     *
     * @tags Globals
     * @name ListComponentModules
     * @request GET:/globals/component-modules
     * @secure
     */
    listComponentModules: (
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: ComponentModuleSortByEnum;
        orderBy?: OrderByEnum;
        label?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ComponentModuleEntityPaginatedDto, void>({
        path: `/globals/component-modules`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a component module globally of just for some company
     *
     * @tags Globals
     * @name CreateComponentModule
     * @request POST:/globals/component-modules
     * @secure
     */
    createComponentModule: (data: CreateComponentModuleRequestDto, params: RequestParams = {}) =>
      this.request<ComponentModuleEntityDto, any>({
        path: `/globals/component-modules`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Updates some component module
     *
     * @tags Globals
     * @name UpdateComponentModule
     * @request PATCH:/globals/component-modules/{id}
     * @secure
     */
    updateComponentModule: (id: string, data: UpdateComponentModuleRequestDto, params: RequestParams = {}) =>
      this.request<ComponentModuleEntityDto, any>({
        path: `/globals/component-modules/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Deletes some component module
     *
     * @tags Globals
     * @name DeleteComponentModule
     * @request DELETE:/globals/component-modules/{id}
     * @secure
     */
    deleteComponentModule: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/globals/component-modules/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  projects = {
    /**
     * @description Gets some theme configs based on request url
     *
     * @tags Projects
     * @name GetThemeByUrl
     * @request GET:/projects/get-theme
     * @secure
     */
    getThemeByUrl: (query?: { url?: string }, params: RequestParams = {}) =>
      this.request<ProjectThemeEntityDto, any>({
        path: `/projects/get-theme`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gets some page configs based on request url
     *
     * @tags Projects
     * @name GetPageByUrl
     * @request GET:/projects/get-page
     * @secure
     */
    getPageByUrl: (query?: { url?: string }, params: RequestParams = {}) =>
      this.request<ProjectPageEntityDto, any>({
        path: `/projects/get-page`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
