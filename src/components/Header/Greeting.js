import React from 'react';
import styles from './styles.module.less';

export function Greeting(props) {
    const {children, name} = props;
    return (
        <div className={styles.greeting}>
            {children}
            <span className={styles.personId}>
                {name}
            </span>
        </div>
    );
}