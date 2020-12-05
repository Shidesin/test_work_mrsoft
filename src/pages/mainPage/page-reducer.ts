export enum visible  {
    visibleNum= 'number',
    visibleStr= 'string',
    visibleNull = 'null'
}

export enum loadStatus {
    loadingOn = 'Loading start',
    loadingOff = 'Loading finish',
    loadingError = 'Loading error'
}

let initialState: initialStateType = {
    loading: loadStatus.loadingOff,
    data: [],
    filterNumber: 0,
    filterString:'',
    registerSensitivity: false,
    visible: visible.visibleNull
}

export const mainPageReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'APP/LOAD_DATA':
            return {...state, loading: action.payload}
        case 'APP/SET_STATE':
            return {...state, data: action.payload}
        case 'APP/SET_FILTER_NUMBER':
            return {...state, filterNumber: action.payload}
        case 'APP/SET_FILTER_STRING':
            return {...state, filterString: action.payload}
        case 'APP/SET_VISIBLE':
            return {...state, visible: action.payload}
        case 'APP/SET_REGISTER':
            return {...state, registerSensitivity: action.payload}
        default:
            return state
    }
}

//actions

export const loadData = (payload: loadStatus) => ({type: 'APP/LOAD_DATA', payload}as const)
export const setInitialState = (payload: string[]) => ({type: 'APP/SET_STATE', payload}as const)
export const setFilterByNumber = (payload: number) => ({type: 'APP/SET_FILTER_NUMBER', payload}as const)
export const setFilterBySubstring = (payload: string) => ({type: 'APP/SET_FILTER_STRING', payload}as const)
export const setVisible = (payload: visible) => ({type: 'APP/SET_VISIBLE', payload}as const)
export const setRegister = (payload: boolean) => ({type: 'APP/SET_REGISTER', payload}as const)


//types

type ActionTypes =
    | ReturnType<typeof loadData>
    | ReturnType<typeof setInitialState>
    | ReturnType<typeof setFilterByNumber>
    | ReturnType<typeof setFilterBySubstring>
    | ReturnType<typeof setVisible>
    | ReturnType<typeof setRegister>

export type initialStateType = {
    loading: loadStatus
    data: string[]
    filterNumber: number
    filterString: string
    registerSensitivity: boolean
    visible: visible
}
