import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/auth.reducer'
import { uiReducer } from '../reducers/ui.reducer'
import {notesReducer} from '../reducers/notes.reducer'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        notes: notesReducer
    }
})