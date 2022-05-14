import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/auth.reducer'
import { uiReducer } from '../reducers/ui.reducer'


export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
    }
})