import React from 'react';
import styles from './content.less'

export function Greeting(props) {
    return (
        <div className={styles.greeting}>
            {props.children}
            <span className={styles.personid}>
                {props.name}
            </span>
        </div>
    );
}

export function Status(props) {
    return (
        <div className={styles.status_tooltip}>
            <label className={styles.status_tooltip__text}>
                {props.children}
            </label>
        </div>
    );
}

export function StatusButton(props) {
    return (
        <div className={styles.status_button}>
            <label className={styles.status_button__text}>
                {props.children}
            </label>
        </div>
    );
}

export function Header() {
    return (
        <div className={styles.info__header}>
            <Greeting name="Человек №3596941">
                Здравствуйте, 
            </Greeting>
            <ButtonStatus>
                Сменить статус
            </ButtonStatus>
            <Status>
                Прежде чем действовать, надо понять
            </Status>
        </div>
    );
}