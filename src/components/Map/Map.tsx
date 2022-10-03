import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

import { useTypedSelector } from 'core/hooks'
import { ICoordinates } from 'core/models/tracker.interface'

import { mapIcon } from '../MapIcon/MapIcon'

const RecenterAutomatically = ({ lat, lng }: ICoordinates) => {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng])
  return null
}

export const Map = () => {
  const { trackerData } = useTypedSelector((state) => state.tracker)

  return (
    <>
      {Object.keys(trackerData).length !== 0 ? (
        <MapContainer
          style={{
            height: '60vh',
            width: '100%',
            zIndex: '-5',
          }}
          center={[trackerData.coordinates.lat, trackerData.coordinates.lng]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[
              trackerData.coordinates.lat,
              trackerData.coordinates.lng,
            ]}
            icon={mapIcon}
          ></Marker>
          <RecenterAutomatically
            lat={trackerData.coordinates.lat}
            lng={trackerData.coordinates.lng}
          />
        </MapContainer>
      ) : null}
    </>
  )
}
