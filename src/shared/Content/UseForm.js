import React, {useState} from "react";

export function useForm(initialValues) {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleInputChanges = (e) => {
		const {name, value} = e.target;
		setValues (
			{
				...values,
				[name]: value
			}
		)
	}

	return {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChanges
	}
}
