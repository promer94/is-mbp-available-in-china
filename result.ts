export interface Result {
  head: Head
  body: Body
}

export interface Head {
  status: string
  data: Data
}

export interface Data {}

export interface Body {
  content: Content
}

export interface Content {
  pickupMessage: PickupMessage
  deliveryMessage: DeliveryMessage
}

export interface PickupMessage {
  stores: Store[]
  overlayInitiatedFromWarmStart: boolean
  viewMoreHoursLinkText: string
  storesCount: string
  little: boolean
  pickupLocationLabel: string
  pickupLocation: string
  notAvailableNearby: string
  notAvailableNearOneStore: string
  warmDudeWithAPU: boolean
  viewMoreHoursVoText: string
  availability: Availability
  viewDetailsText: string
  availabilityStores: string
}

export interface Store {
  storeEmail: string
  storeName: string
  reservationUrl: string
  makeReservationUrl: string
  state: string
  storeImageUrl: string
  country: string
  city: string
  storeNumber: string
  partsAvailability: PartsAvailability
  phoneNumber: string
  pickupTypeAvailabilityText: string
  address: Address
  hoursUrl: string
  storeHours: StoreHours
  storelatitude: number
  storelongitude: number
  storedistance: number
  storeDistanceVoText: string
  retailStore: RetailStore
  storelistnumber: number
  storeListNumber: number
  pickupOptionsDetails: PickupOptionsDetails
  rank: number
}

export interface PartsAvailability {
  Z14X: Z14X
}

export interface Z14X {
  storePickEligible: boolean
  storeSearchEnabled: boolean
  storeSelectionEnabled: boolean
  storePickupQuote: string
  pickupSearchQuote: string
  storePickupLabel: string
  partNumber: string
  purchaseOption: string
  ctoOptions: string
  storePickupLinkText: string
  storePickupProductTitle: string
  pickupDisplay: string
  pickupType: string
}

export interface Address {
  address: string
  address3: any
  address2: string
  postalCode: string
}

export interface StoreHours {
  storeHoursText: string
  bopisPickupDays: string
  bopisPickupHours: string
  hours: Hour[]
}

export interface Hour {
  storeTimings: string
  storeDays: string
}

export interface RetailStore {
  storeNumber: string
  storeUniqueId: string
  name: string
  storeTypeKey: string
  storeSubTypeKey: string
  storeType: string
  phoneNumber: string
  email: string
  carrierCode: any
  locationType: any
  latitude: number
  longitude: number
  address: Address2
  urlKey: any
  directionsUrl: any
  storeImageUrl: string
  makeReservationUrl: string
  hoursAndInfoUrl: string
  storeHours: StoreHour[]
  storeHolidays: any[]
  secureStoreImageUrl: string
  distance: number
  distanceUnit: string
  distanceWithUnit: any
  timezone: string
  storeIsActive: boolean
  lastUpdated: number
  lastFetched: number
  dateStamp: string
  distanceSeparator: string
  nextAvailableDate: any
  storeHolidayLookAheadWindow: number
  driveDistanceWithUnit: any
  driveDistanceInMeters: any
  dynamicAttributes: DynamicAttributes
  storePickupMethodByType: StorePickupMethodByType
  storeTimings: any
  availableNow: boolean
}

export interface Address2 {
  city: string
  companyName: string
  countryCode: string
  county: any
  district: string
  geoCode: any
  label: any
  languageCode: string
  mailStop: any
  postalCode: string
  province: any
  state: string
  street: string
  street2: any
  street3: any
  suburb: any
  type: string
  addrSourceType: any
  outsideCityFlag: any
  daytimePhoneAreaCode: any
  eveningPhoneAreaCode: any
  daytimePhone: string
  fullPhoneNumber: any
  eveningPhone: any
  emailAddress: any
  firstName: any
  lastName: any
  suffix: any
  lastNamePhonetic: any
  firstNamePhonetic: any
  title: any
  businessAddress: boolean
  uuid: string
  mobilePhone: any
  mobilePhoneAreaCode: any
  cityStateZip: any
  daytimePhoneSelected: boolean
  middleName: any
  residenceStatus: any
  moveInDate: any
  subscriberId: any
  locationType: any
  carrierCode: any
  metadata: Metadata
  verificationState: string
  expiration: any
  markForDeletion: boolean
  primaryAddress: boolean
  fullEveningPhone: any
  fullDaytimePhone: string
  correctionResult: any
  twoLineAddress: string
  addressVerified: boolean
}

export interface Metadata {}

export interface StoreHour {
  storeDays: string
  voStoreDays: any
  storeTimings: string
}

export interface DynamicAttributes {}

export interface StorePickupMethodByType {
  INSTORE: Instore
}

export interface Instore {
  type: string
  services: string[]
  typeCoordinate: TypeCoordinate
  typeDirection: TypeDirection
  typeMeetupLocation: TypeMeetupLocation
}

export interface TypeCoordinate {
  lat: number
  lon: number
}

export interface TypeDirection {
  directionByLocale: any
}

export interface TypeMeetupLocation {
  meetingLocationByLocale: any
}

export interface PickupOptionsDetails {
  whatToExpectAtPickup: string
  comparePickupOptionsLink: string
  pickupOptions: PickupOption[]
}

export interface PickupOption {
  pickupOptionTitle: string
  pickupOptionDescription: string
  index: number
}

export interface Availability {
  isComingSoon: boolean
}

export interface DeliveryMessage {
  Z14X: Z14X2
  geoLocated: boolean
  messageType: string
  geoEnabled: boolean
  dudeCookieSet: boolean
  processing: string
  contentloaded: string
  locationCookieValueFoundForThisCountry: boolean
  dudeLocated: boolean
  accessibilityDeliveryOptions: string
}

export interface Z14X2 {
  orderByDeliveryBy: string
  deliveryOptionMessages: DeliveryOptionMessage[]
  deliveryOptions: DeliveryOption[]
  showDeliveryOptionsLink: boolean
  messageType: string
  basePartNumber: string
  commitCodeId: string
  inHomeSetup: boolean
  idl: boolean
  defaultLocationEnabled: boolean
  isBuyable: boolean
  isElectronic: boolean
}

export interface DeliveryOptionMessage {
  displayName: string
  inHomeSetup: string
}

export interface DeliveryOption {
  displayName: string
  date: string
  shippingCost: string
  additionalContent: any
}
