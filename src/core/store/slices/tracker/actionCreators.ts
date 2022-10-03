import { createAsyncThunk } from '@reduxjs/toolkit'

import { ITracker } from 'core/models/tracker.interface'
import { api } from 'core/api/api'

export const fetchTrackerData = createAsyncThunk(
  'tracker/fetchData',
  async (ipAddress: string, thunkAPI) => {
    try {
      const response = await api.get<ITracker>('', {
        params: {
          ipAddress,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Error')
    }
  }
)
