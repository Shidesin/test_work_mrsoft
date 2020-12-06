import { createSlice, Dispatch } from '@reduxjs/toolkit'

export enum visible {
    visibleNum = 'number',
    visibleStr = 'string',
    visibleNull = 'null',
}

export enum loadStatus {
    loadingOn = 'Loading start',
    loadingOff = 'Loading finish',
    loadingError = 'Loading error',
}

let initialState: initialStateType = {
    loading: loadStatus.loadingOn,
    data: [],
    filterNumber: 0,
    filterString: '',
    registerSensitivity: false,
    visible: visible.visibleNull,
}

const slice = createSlice({
    name: 'mainPage',
    initialState: initialState,
    reducers: {
        loadData(state, action) {
            state.loading = action.payload
        },
        setInitialState(state, action) {
            state.data = action.payload
        },
        setFilterByNumber(state, action) {
            state.filterNumber = action.payload
        },
        setFilterBySubstring(state, action) {
            state.filterString = action.payload
        },
        setVisible(state, action) {
            state.visible = action.payload
        },
        setRegister(state, action) {
            state.registerSensitivity = action.payload
        },
    },
})

export const mainPageReducer = slice.reducer

//actions

export const {
    loadData,
    setRegister,
    setFilterByNumber,
    setFilterBySubstring,
    setInitialState,
    setVisible,
} = slice.actions

// thunk

export const fetchData = () => (dispatch: Dispatch) => {
    dispatch(loadData(loadStatus.loadingOn))
    fetch('https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json')
        .then((responce) => responce.json())
        .then((result) => {
            dispatch(setInitialState(result['data']))
            setTimeout(() => dispatch(loadData(loadStatus.loadingOff)), 3000)
        })
        .catch((err) => {
            dispatch(loadData(loadStatus.loadingError))
        })
}

//types

export type initialStateType = {
    loading: loadStatus
    data: string[]
    filterNumber: number
    filterString: string
    registerSensitivity: boolean
    visible: visible
}
