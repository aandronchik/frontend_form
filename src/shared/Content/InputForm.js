import React from 'react';
import styles from './content.less';
import { useForm } from './UseForm';

const initialValues = {
	'status': '',
	'active': false
}

export function InputField(props) {

	const {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChanges,
	} = useForm(initialValues);

	return (
		<input type="text" id="input_field" value={values.status} onChange={handleInputChanges}></input>
	);
}


export function CityChoise(props) {
	return (
		<div className={styles.input_wrapper}>
			<label htmlFor="cities" className={styles.input_title}>Ваш город</label>
			<select id="cities" form="citiesform" className={styles.input_city}>
		  		<option value="krasnoyarsk">Красноярск</option>
		  		<option value="moscow">Москва</option>
			</select>
		</div>
	);
}

export function Line(props) {
	return (
		<div className={styles.underline}>
		</div>
	);
}