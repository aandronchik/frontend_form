import React from 'react';
import styles from './styles.module.less';

export function TextField(props) {
    const {name, value, error, onChange} = props;
    let className = styles.inputItem;
    if (error) className = styles.inputItemError;
    return (
        <div className={styles.input}>
            <input className={className} type={props.type} value={value} name={name} onChange={onChange}></input>
            <label className={styles.errorMessage}>{error}</label>
        </div>
    );
}