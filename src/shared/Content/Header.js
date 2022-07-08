import React from 'react';
import styles from './content.less';
import { PersonId } from './PersonId';
import { ChangeStatusLabel } from './Status';

export function Header() {
    return (
        <div className={styles.header}>
			<PersonId name='Человек №3596941'>Здравствуйте</PersonId>
            <ChangeStatusLabel>сменить статус</ChangeStatusLabel>
		</div>
    );
}