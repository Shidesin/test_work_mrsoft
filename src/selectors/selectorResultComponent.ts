import { AppRootStateType } from '../redux/store'
import { createSelector } from '@reduxjs/toolkit'

const getWordArray = (state: AppRootStateType) => {
    return state.mainPage.data
}

const getFilterNumber = (state: AppRootStateType) => {
    return state.mainPage.filterNumber
}

const getFilterSubstring = (state: AppRootStateType) => {
    return state.mainPage.filterString
}

const getRegisterValue = (state: AppRootStateType) => {
    return state.mainPage.registerSensitivity
}

export const getFilteredDataByNumber = createSelector([getWordArray, getFilterNumber], (state, number) => {
    return state.filter((word) => word.length > number)
})

export const getFilteredDataBySubstring = createSelector(
    [getWordArray, getFilterSubstring, getRegisterValue],
    (state, string, register) => {
        if (register) {
            return state.filter((word) => word.indexOf(string) > -1)
        } else {
            return state.filter((word) => word.toLowerCase().indexOf(string.toLowerCase()) > -1)
        }
    }
)
