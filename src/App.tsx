import React, {useState} from 'react';
import s from './App.module.css';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {Setting} from "./Setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {counterReducer, incValueAC, resetValueAC, setValueAC, setValueFromLocalstorageAC} from "./bll/counter-reducer";

function App() {

    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const incValue = useSelector<AppStateType, number>(state => state.counter.displayValue)
    const dispatch = useDispatch()

    // const [counter, setCounter] = useState<number>(0)
    // const maxValue = 5
    // const minValue = 0

    const SetCount = () => {
        dispatch(setValueAC())
    }


    const IncCount = () => {
        dispatch(incValueAC())
        // setCounter(counter + 1)
    }

    const ResetCount = () => {
        dispatch(resetValueAC())
    }

    return (

        <div className={s.app}>
            <div className={s.container}>
                <div>
                    <Setting maxValue={maxValue} startValue={startValue}/>
                </div>
                <div className={s.btn_container}>
                    <Button onClick={SetCount} title="set" disabled={incValue === startValue}></Button> //????????????
                </div>
            </div>


            <div className={s.container}>
                <div>
                    <Display/>
                </div>
                <div className={s.btn_container}>
                    <Button onClick={IncCount} title="increase" disabled={incValue === maxValue}></Button>
                    <Button onClick={ResetCount} title="reset" disabled={incValue === startValue}></Button>
                </div>
            </div>

        </div>
    );
}

export default App;



