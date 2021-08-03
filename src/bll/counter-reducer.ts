const initialState = {
    savedMaxValue: 1,  //если объект, то пишем as UserType
    savedStartValue: 0,
    unsavedStartValue: 0,
    unsavedMaxValue: 1,
    displayValue: null as number | null,
    resetDisabled: false,
    incDisabled: false,
    setDisabled: false
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {
                ...state,
                unsavedMaxValue: action.maxValue,
                setDisabled: false

            }
        case 'SET-START-VALUE':
            return {
                ...state,
                unsavedStartValue: action.startValue,
                setDisabled: false
            }

        case 'SET-VALUES':
            return {
                ...state,
                savedMaxValue: state.unsavedMaxValue,
                savedStartValue: state.unsavedStartValue,
                displayValue: state.unsavedStartValue,
                setDisabled: true
            }

        case 'INCREASE-DISPLAY-VALUE':
            return {
                ...state,
                displayValue: (state.displayValue || 0) + 1,
            }

        case 'SET-VALUES-FROM-LOCALSTORAGE':
            return {
                ...state
            }

        case 'RESET-VALUE':
            return {
                ...state, displayValue: state.savedStartValue
            }
        default:
            return state
    }
}

export const onChangeMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const onChangeStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
export const onChangeSetCounterValueAC = (startValue: number) => ({type: 'SET-COUNTER-VALUE', startValue} as const)
export const setValueAC = () => ({type: 'SET-VALUES'} as const)
export const increaseDisplayValueAC = () => ({type: 'INCREASE-DISPLAY-VALUE'} as const)
export const setValuesFromLocalstorageAC = () => ({type: 'SET-VALUES-FROM-LOCALSTORAGE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)

export type OnChangeMaxValueType = ReturnType<typeof onChangeMaxValueAC>
export type OnChangeStartValueType = ReturnType<typeof onChangeStartValueAC>
export type onChangeSetCounterValueType = ReturnType<typeof onChangeSetCounterValueAC>
export type SetValueActionType = ReturnType<typeof setValueAC>
export type IncreaseDisplayValueActionType = ReturnType<typeof increaseDisplayValueAC>
export type SetValuesFromLocalstorageActionType = ReturnType<typeof setValuesFromLocalstorageAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>

type ActionType =
    OnChangeMaxValueType
    | OnChangeStartValueType
    | onChangeSetCounterValueType
    | SetValueActionType
    | IncreaseDisplayValueActionType
    | SetValuesFromLocalstorageActionType
    | ResetValueActionType

