import React from 'react';
import styles from './styles.module.less';

export function Status(props) {
    const {children} = props;
    return (
        <div id="status_tooltip" className={styles.statusTooltip}>
            <label id="status_text" className={styles.statusTooltip__text}>
                {children}
            </label>
        </div>
    );
}