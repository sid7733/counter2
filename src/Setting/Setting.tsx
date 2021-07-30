import React, {ChangeEvent} from "react";
import s from "./Setting.module.css";
import {useDispatch, useSelector} from "react-redux";
import {onChangeMaxValueAC, onChangeStartValueAC} from "../bll/counter-reducer";
import {AppStateType} from "../bll/store";

export function Setting() {

    const dispatch = useDispatch()
    const unsavedMaxValue = useSelector<AppStateType, number>(state => state.counter.unsavedMaxValue)
    const unsavedStartValue = useSelector<AppStateType, number>(state => state.counter.unsavedStartValue)

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
                       value={unsavedMaxValue}
                       onChange={onChangeMaxValue}
                />

            </div>
            <div className={s.set_container}>
                <div className={s.set_text}>start value:</div>
                <input type='number'
                       className={s.set_input}
                       value={unsavedStartValue}
                       onChange={onChangeStartValue}
                />
            </div>
        </div>
    )
}

