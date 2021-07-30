import React from 'react';
import s from './App.module.css';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {Setting} from "./Setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    resetValueAC,
    setValueAC,
    increaseDisplayValueAC
} from "./bll/counter-reducer";

function App() {

    const savedMaxValue = useSelector<AppStateType, number>(state => state.counter.savedMaxValue)
    const savedStartValue = useSelector<AppStateType, number>(state => state.counter.savedStartValue)
    const displayValue = useSelector<AppStateType, number | null>(state => state.counter.displayValue)
    const unsavedMaxValue = useSelector<AppStateType, number>(state => state.counter.unsavedMaxValue)
    const unsavedStartValue = useSelector<AppStateType, number>(state => state.counter.unsavedStartValue)
    const dispatch = useDispatch()

    const SetCount = () => {
        dispatch(setValueAC())
    }

    const IncCount = () => {
        dispatch(increaseDisplayValueAC())
    }

    const ResetCount = () => {
        dispatch(resetValueAC())
    }
    let errorText = ''

    if (unsavedStartValue < 0) {
        errorText = 'start value can`t be negative'
    } else if (unsavedMaxValue < 0) {
        errorText = 'max value can`t be negative'
    } else if (unsavedMaxValue === 0) {
        errorText = 'max value can`t be zero'
    } else if (unsavedStartValue === unsavedMaxValue) {
        errorText = 'start value can`t be equal to max value'
    } else if (unsavedMaxValue < unsavedStartValue) {
        errorText = 'start value can`t be larger than max value'
    }

    return (
        <div className={s.app}>
            <div className={s.container}>
                <div>
                    <Setting/>
                </div>
                <div className={s.btn_container}>
                    <Button onClick={SetCount} title="set" disabled={Boolean(errorText)}></Button>


                </div>
            </div>


            <div className={s.container}>
                <div>
                    <Display errorText={errorText}/>
                </div>
                <div className={s.btn_container}>
                    <Button onClick={IncCount} title="increase" disabled={displayValue === savedMaxValue}></Button>
                    <Button onClick={ResetCount} title="reset" disabled={displayValue === savedStartValue}></Button>
                </div>
            </div>

        </div>
    );
}

export default App;



