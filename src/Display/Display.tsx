import React, {ChangeEvent} from "react";
import s from "./Display.module.css";
import {useDispatch, useSelector} from "react-redux";
import { onChangeSetCounterValueAC} from "../bll/counter-reducer";
import {AppStateType} from "../bll/store";
//
// export type DisplayPropsType = {
//     incValue: number
//     maxValue: number
//
// }


export function Display() {

    const displayValue = useSelector<AppStateType, number>(state => state.counter.displayValue)



    return (
        <div className={s.disp}>
            <h1>{displayValue}</h1>
            {/*<div*/}
            {/*    className={incValue === maxValue ? s.red : ""}*/}
            {/*    onChange ={onChangeSetCounterValue}*/}
            {/*    >*/}
            {/*    {incValue}*/}

            {/*/!*   тернарное выражение, если есть ошибка - текст ошибки, если устанавливается значение, сообщение о необходимости наджать кнопку set*!/*/}
            {/*</div>*/}
        </div>
    )
}

