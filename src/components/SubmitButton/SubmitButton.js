import React from 'react';
import styles from './styles.module.less';

export function SubmitButton(props) {
    const {value, disabled} = props;
    return (
        <div className={styles.button}>
            <input className={styles.buttonItem} type="submit" value={value} disabled={disabled}></input>
        </div>
    );
}