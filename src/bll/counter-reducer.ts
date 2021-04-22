const initialState = {
    maxValue: 3,  //если объект, то пишем as UserType
    startValue: 0,
    displayValue: 0,
    errorText: "",
}
type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {
                ...state,
                maxValue: action.maxValue
            }
        case 'SET-START-VALUE':
            return {
                ...state,
                startValue: action.startValue
            }

        case 'SET-COUNTER-VALUE': {
            return {
                ...state,
                startValue: action.startValue
            }
        }
        case 'SET-VALUE':
            return {
                ...state,
                displayValue: state.startValue
            }

        case 'INC-VALUE':
            debugger
            if (state.displayValue < state.maxValue) {
                return {
                    ...state, displayValue: state.displayValue + 1
                }
            } else {
                return {
                    ...state,

                }
            }


        case 'SET-VALUE-FROM-LOCALSTORAGE':
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue,
                displayValue: action.incValue
            }
        case 'RESET-VALUE':
            return {
                ...state, displayValue: state.startValue
            }
        case 'ERROR-VALUE':
            return {
                ...state,
                errorText: "Incorrect value!"
            }
        default:
            return state
    }


}


export const onChangeMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const onChangeStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
export const onChangeSetCounterValueAC = (startValue: number) => ({type: 'SET-COUNTER-VALUE', startValue} as const)
export const setValueAC = () => ({type: 'SET-VALUE'} as const)
export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalstorageAC = (maxValue: number, startValue: number, incValue: number) => ({
    type: 'SET-VALUE-FROM-LOCALSTORAGE',
    maxValue,
    startValue,
    incValue
} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const errorValueAC = () => ({type: 'ERROR-VALUE'} as const)


export type OnChangeMaxValueType = ReturnType<typeof onChangeMaxValueAC>
export type OnChangeStartValueType = ReturnType<typeof onChangeStartValueAC>
export type onChangeSetCounterValueType = ReturnType<typeof onChangeSetCounterValueAC>
export type SetValueActionType = ReturnType<typeof setValueAC>
export type IncValueActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalstorageActionType = ReturnType<typeof setValueFromLocalstorageAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type ErrorValueActionType = ReturnType<typeof errorValueAC>


type ActionType =
    OnChangeMaxValueType
    | OnChangeStartValueType
    | onChangeSetCounterValueType
    | SetValueActionType
    | IncValueActionType
    | SetValueFromLocalstorageActionType
    | ResetValueActionType
    | ErrorValueActionType
