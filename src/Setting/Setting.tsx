import React, {ChangeEvent} from "react";
import s from "./Setting.module.css";
import {useDispatch} from "react-redux";
import {onChangeMaxValueAC, onChangeStartValueAC} from "../bll/counter-reducer";


export type SetPropsType = {
    maxValue: number
    startValue: number
    // errorText: string

}


export function Setting(props: SetPropsType) {

    const dispatch = useDispatch()

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxValueAC(Number(e.currentTarget.value)))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeStartValueAC(e.currentTarget.valueAsNumber))
    }

    return (
        <div className={s.set}>
            <div className={s.set_container}>
                <div className={s.set_text}>max value:</div>
                <input type='number'
                       className={s.set_input}
                       value={props.maxValue}
                       onChange={onChangeMaxValue}
                />

            </div>
            <div className={s.set_container}>
                <div className={s.set_text}>start value:</div>
                <input type='number'
                       className={s.set_input}
                       value={props.startValue}
                       onChange={onChangeStartValue}
                />
            </div>
        </div>
    )
}

