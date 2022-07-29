import React from 'react';
import styles from './styles.module.less';

export function Layout(props) {
    const {children} = props;
	return (
		<div className={styles.layout}>{children}</div>
	);
}