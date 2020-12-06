import {
    initialStateType,
    loadStatus,
    mainPageReducer,
    setFilterByNumber,
    setFilterBySubstring,
    setInitialState,
    setRegister,
    setVisible,
    visible,
} from './page-reducer'

let data: string[]
let initialState: initialStateType

beforeEach(() => {
    initialState = {
        loading: loadStatus.loadingOff,
        data: [],
        registerSensitivity: false,
        visible: visible.visibleNull,
        filterString: '',
        filterNumber: 0,
    }

    data = [
        'affenpinscher',
        'NEWFOUNDLAND',
        'OTTERHOUND',
        'PAPILLON',
        'PEKINESE',
        'SWISS MOUNTAIN',
        'weimaraner',
        'MINIATURE PINSCHER',
        'akita',
        'GERMAN POINTER',
        'vizsla',
        'POMERANIAN',
        'appenzeller',
        'MINIATURE POODLE',
        'yorkshire terrier',
        'STANDARD POODLE',
        'basenji',
        'BERNESE MOUNTAIN',
        'wheaten terrier',
        'TOY POODLE',
        'beagle',
        'MEXICANHAIRLESS',
        'westhighland terrier',
        'PUG',
        'bluetick',
    ]
})

test('data should be added to state', () => {
    const state = mainPageReducer(initialState, setInitialState(data))

    expect(state.data !== []).toBeTruthy()
    expect(state.data.length > 0).toBeTruthy()
})

test('Filter number should be added to state', () => {
    let filterNumber: number = 15

    const state = mainPageReducer(initialState, setFilterByNumber(filterNumber))

    expect(state.filterNumber > 0).toBeTruthy()
    expect(state.filterNumber).toBe(filterNumber)
})

test('Filter string should be added to state', () => {
    let filterString: string = 'SH'

    const state = mainPageReducer(initialState, setFilterBySubstring(filterString))

    expect(state.filterString.length > 0).toBeTruthy()
    expect(state.filterString).toBe(filterString)
})

test('Visible value should be changed', () => {
    let visibleValue: visible = visible.visibleStr

    const state = mainPageReducer(initialState, setVisible(visibleValue))

    expect(state.visible).toBe(visibleValue)
    expect(state.visible !== initialState.visible).toBeTruthy()
})

test('Register value should be changed', () => {
    let registerValue: boolean = true

    const state = mainPageReducer(initialState, setRegister(registerValue))

    expect(state.registerSensitivity).toBe(registerValue)
    expect(state.registerSensitivity !== initialState.registerSensitivity).toBeTruthy()
})
