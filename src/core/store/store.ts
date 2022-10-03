import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import trackerReducer from './slices/tracker/tracker.slice'

const rootReducer = combineReducers({
  tracker: trackerReducer,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
