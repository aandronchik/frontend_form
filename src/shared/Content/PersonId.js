import React from 'react';
import styles from './content.less';

export function PersonId(props) {
	return (
		<h1 className={styles.hello}>{props.children}, <span className={styles.person_id}>{props.name}</span></h1>
	);
}