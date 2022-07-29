import React from 'react';
import styles from './styles.module.less';

export function CheckBox(props) {
    const {id, name, value, label, checked, onChange} = props;
    return (
        <div className={styles.checkbox}>
            <label className={styles.checkboxItem} htmlFor={id}>
                <input 
                    className={styles.checkboxItem__input} 
                    type="checkbox" 
                    id={id} 
                    name={name} 
                    value={value} 
                    checked={checked} 
                    onChange={onChange}
                />
                <div className={styles.checkboxItem__box}></div>
                {label}
            </label>
        </div>
    );
}