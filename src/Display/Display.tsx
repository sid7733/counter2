import React from "react";
import s from "./Display.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";

type PropsType = {
    errorText: string
}

export function Display({errorText}: PropsType) {
    const displayValue = useSelector<AppStateType, number | null>(state => state.counter.displayValue)
    const savedMaxValue = useSelector<AppStateType, number | null>(state => state.counter.savedMaxValue)

    const ErrorStyle = Boolean(errorText)
        ? s.red
        : displayValue === savedMaxValue
            ? s.red
            : ''

    return (
        <div className={s.disp}>
            <div className={ErrorStyle}>{
                Boolean(errorText)
                    ? errorText
                    : displayValue !== null
                    ? displayValue
                    : 'choose start value and press "set"'}</div>
        </div>
    )
}

