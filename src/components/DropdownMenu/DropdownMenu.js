import React from 'react';
import styles from './styles.module.less';

export function DropdownMenu(props) {
    const {id, name, value, children, onChange} = props;
    return (
        <div className={styles.select}>
                <select className={styles.selectItem} id={id} name={name} onChange={onChange} value={value}>
                    {children}
                </select>
        </div>
    );
}

export function DropdownOptions(props) {
    const {cities_arr} = props;
    let options = [];
    for (let i = 0; i < cities_arr.length; i++) {
        if (cities_arr[i].population >= 50000) {
            options.push(<option key={i} value={cities_arr[i].city}>{cities_arr[i].city}</option>);
        }
    }
    return (
        options
    );
}