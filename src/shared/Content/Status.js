import React from 'react';
import styles from './content.less';
import { useForm } from './UseForm';
// console.log(document.getElementById("current_status"));


const initialValues = {
	'status': 'test',
	'active': false
}

export function ChangeStatusLabel(props) {
	return (
		<label id="current_status" onClick={onClickChangeStatus} className={styles.title_change_status}>{props.children}</label>
	);
}

export function StatusToolTip(props) {
	return (
		<div className={styles.tooltip}><span className={styles.tooltiptext}>{props.value}</span></div>
	);
}

export function ChangeStatus(props) {

	const {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChanges,
	} = useForm(initialValues);

	return (
		<input type="text" id="change_status" name="status" value={values.status} onChange={handleInputChanges}></input>
	);
}

function onClickChangeStatus() {
	initialValues.active = true
	// console.log('ok_change');
	// window.alert('ok');
}