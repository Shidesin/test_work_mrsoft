import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../redux/store'
import { visible } from '../pages/mainPage/page-reducer'
import { getFilteredDataByNumber, getFilteredDataBySubstring } from '../selectors/selectorResultComponent'

export const ResultComponent = React.memo(() => {
    const visibleSelector = useSelector<AppRootStateType>((state) => state.mainPage.visible)

    let filterResultByNumber = useSelector(getFilteredDataByNumber)
    let filterResultByString = useSelector(getFilteredDataBySubstring)

    if (visibleSelector === visible.visibleStr) {
        return filterResultByString.length ? (
            <div>
                {filterResultByString.map((word) => (
                    <div key={word}>{word}</div>
                ))}
            </div>
        ) : (
            <div>No Result</div>
        )
    }
    if (visibleSelector === visible.visibleNum) {
        return filterResultByNumber.length ? (
            <div>
                {filterResultByNumber.map((word) => (
                    <div key={word}>{word}</div>
                ))}
            </div>
        ) : (
            <div>No Result</div>
        )
    }
    return <div>No Result</div>
})
