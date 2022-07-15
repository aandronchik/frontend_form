import React from 'react';
import { Line } from './InputForm';
import styles from './content.less';
import { useForm } from './UseForm';

export function InputTitle(props) {
    const {children, id, className} = props;
    return (
        <div className={styles.title}>
            <label className={className}>{children}</label>
        </div>
    );
}

export function Line() {
    return (
        <div className={styles.line}></div>
    );
}

export function TextField(props) {
    const {className, id, name, value, type, error} = props;
    return (
        <div className={styles.input}>
            <input className={className} type={props.type}></input>
            <label className={styles.error_message}>{error}</label>
        </div>
    );
}

export function CheckBox(props) {
    const {className, id, name, value, title, label} = props;
    return (
        <div className={styles.checkbox}>
            <label className={styles.checkbox_item} htmlFor={id}>
                <input className={styles.checkbox_item__input} type="checkbox" id={id} name={name} value={value}></input>
                <div className={styles.checkbox_item__box}></div>
                {label}
            </label>
        </div>
    );
}

export function Select(props) {
    const {className, id, name, value, title, label, children} = props;
    return (
        <div className={styles.select}>
                <select className={styles.select_item} id={id} name={name}>
                    {children}
                </select>
        </div>
    );
}

export function Comment(props) {
    const {children, className} = props;
    return (
        <div className={className}>
            <label className={styles.comment__text}>
                {children}
            </label>
        </div>
    );
}

export function SubmitButton(props) {
    const {children, value} = props;
    return (
        <div className={styles.button}>
            <input className={styles.button_item} type="submit" value={value}></input>
        </div>
    );
}
