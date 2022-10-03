import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ITracker, ITrackerResponse } from 'core/models/tracker.interface'
import { fetchTrackerData } from './actionCreators'

interface TrackerState {
  trackerData: ITracker
}

const initialState: TrackerState = {
  trackerData: {} as ITracker,
}

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    setIpAddress(state, action: PayloadAction<string>) {
      state.trackerData.ipAddress = action.payload
    },
  },
  extraReducers: {
    [fetchTrackerData.fulfilled.type]: (
      state,
      action: PayloadAction<ITrackerResponse>
    ) => {
      const { isp, location, ip } = action.payload
      state.trackerData = {
        ipAddress: ip,
        location: `${location.country}, ${location.region}, ${location.city}`,
        timezone: location.timezone,
        isp,
        coordinates: {
          lat: location.lat,
          lng: location.lng,
        },
      }
    },
    [fetchTrackerData.pending.type]: (
      state,
      action: PayloadAction<TrackerState>
    ) => {
      console.log('LOADING')
    },
    [fetchTrackerData.rejected.type]: (
      state,
      action: PayloadAction<TrackerState>
    ) => {
      console.log('ERROR')
    },
  },
})

export default trackerSlice.reducer
