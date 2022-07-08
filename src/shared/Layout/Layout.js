import React from 'react';
import styles from './layout.less';

export function Layout(props) {
	return (
		<div className={styles.layout}>{props.children}</div>
	);
}

export function LayoutContent(props) {
	return (
		<div className={styles.layout_content}>
		 	{props.children}
		</div>
	);
}