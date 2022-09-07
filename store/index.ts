import { configureStore } from '@reduxjs/toolkit'

import screenReducer from './screen'

export const store = configureStore({
    reducer: {
        screen: screenReducer,
    },
    devTools: false,
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
