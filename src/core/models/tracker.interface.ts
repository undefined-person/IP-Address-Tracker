export interface ITracker {
  ipAddress: string
  location: string
  timezone: string
  coordinates: ICoordinates
  isp: string
}

export interface ICoordinates {
  lat: number
  lng: number
}

export interface Location {
  country: string
  region: string
  city: string
  lat: number
  lng: number
  postalCode: string
  timezone: string
  geonameId: number
}

export interface As {
  asn: number
  name: string
  route: string
  domain: string
  type: string
}

export interface ITrackerResponse {
  ip: string
  location: Location
  as: As
  isp: string
}
