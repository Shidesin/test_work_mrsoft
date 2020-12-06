import { combineReducers } from 'redux'
import { mainPageReducer } from '../pages/mainPage/page-reducer'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})
