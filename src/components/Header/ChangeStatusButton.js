import React from 'react';
import styles from './styles.module.less';

export function ChangeStatusButton(props) {
    const {children, onClick} = props;
    
    return (
        <div className={styles.statusButton}>
            <label className={styles.statusButton__text} onClick={onClick}>
                {children}
            </label>
        </div>
    );
}