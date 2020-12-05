import {applyMiddleware, combineReducers, createStore} from 'redux';
import {mainPageReducer} from '../pages/mainPage/page-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    mainPage: mainPageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;

