import React from "react";
import s from "./Button.module.css";

export type ButtonPropsType = {
    onClick: () => void
    title: string
    disabled: boolean
}

export function Button(props:ButtonPropsType){
    return (
    <button
        className={`${s.btn_item} ${props.disabled ? s.disabled: s.green }`}
        onClick={props.onClick}
        disabled={props.disabled}>
        {props.title}
    </button>
)}

