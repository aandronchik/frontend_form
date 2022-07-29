import React from 'react';
import styles from './styles.module.less';

export function TitleInputField(props) {
    const {children} = props;
    return (
        <div className={styles.title}>
            <label className={styles.title__text}>{children}</label>
        </div>
    );
}