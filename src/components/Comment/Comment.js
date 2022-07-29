import React from 'react';
import styles from './styles.module.less';

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