import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchData,
    loadStatus,
    setFilterByNumber,
    setFilterBySubstring,
    setRegister,
    setVisible,
    visible,
} from './page-reducer'
import { ResultComponent } from '../../components/ResultComponent'
import { StyledInput } from '../../components/Input/Input'
import { StyledButton } from '../../components/Button/Button'
import styled from 'styled-components'
import { Preloader } from '../../components/Preloader/Preloader'
import { AppRootStateType } from '../../redux/store'

const StyledWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const loading = useSelector<AppRootStateType>((state) => state.mainPage.loading)

    const [filterValue, setFilterValue] = useState<string>('')
    const [registerValue, setRegisterValue] = useState<boolean>(false)

    const checkRegister = () => {
        setRegisterValue(!registerValue)
    }

    const filterByLength = () => {
        dispatch(setFilterByNumber(+filterValue))
        dispatch(setVisible(visible.visibleNum))
        dispatch(setRegister(registerValue))
        setFilterValue('')
    }

    const filterBySubstring = () => {
        dispatch(setFilterBySubstring(filterValue))
        dispatch(setVisible(visible.visibleStr))
        dispatch(setRegister(registerValue))
        setFilterValue('')
    }

    const buttonNumberDisabled = !Number(filterValue)

    const buttonStringDisabled = () => {
        if (filterValue === '') {
            return true
        }
        return !isNaN(Number(filterValue))
    }

    return (
        <StyledWrapper>
            {loading === loadStatus.loadingOn ? (
                <Preloader />
            ) : (
                <div>
                    <StyledInput
                        value={filterValue}
                        placeholder={'Please, input value filter...'}
                        onChangeText={setFilterValue}
                    />
                    <div>
                        Register sensitivity: <input type={'checkbox'} onClick={checkRegister} />
                    </div>
                    <div>
                        <StyledButton onClick={filterByLength} disabled={buttonNumberDisabled}>
                            Filter by length
                        </StyledButton>
                        <StyledButton onClick={filterBySubstring} disabled={buttonStringDisabled()}>
                            Filter by substring
                        </StyledButton>
                    </div>
                    <ResultComponent />
                </div>
            )}
            {loading === loadStatus.loadingError ? <>'Error loading data'</> : null}
        </StyledWrapper>
    )
}
