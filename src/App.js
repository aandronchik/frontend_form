import React, { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Greeting } from './components/Header/Greeting';
import { ChangeStatusButton } from './components/Header/ChangeStatusButton';
import { Status } from './components/Header/Status';
import { TitleInputField } from './components/TitleInputField/TitleInputField';
import { Comment } from './components/Comment/Comment';
import { TextField } from './components/TextField/TextField';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu';
import { DropdownOptions } from './components/DropdownMenu/DropdownMenu';
import { CheckBox } from './components/CheckBox/CheckBox';
import { SubmitButton } from './components/SubmitButton/SubmitButton';
import { useForm } from './components/UseForm/UseForm';
import styles from './app.styles.module.less';
import comment_styles from './components/Comment/styles.module.less';
let cities = require('./cities_data/cities.json');
const sortedCities = cities.sort((city1, city2) => parseInt(city1['population']) > parseInt(city2['population']) ? -1 : 1);

const initialValues = {
    status: 'Прежде чем действовать, надо понять',
    email: '',
    password: '',
    confirm_password: '',
    city: sortedCities[0].city,
    checkbox_notifications: true
}

function MonthByNumber(number) {
    switch(number) {
        case 0: return 'января';
        case 1: return 'февраля';
        case 2: return 'марта';
        case 3: return 'апреля';
        case 4: return 'мая';
        case 5: return 'июня';
        case 6: return 'июля';
        case 7: return 'август';
        case 8: return 'сентября';
        case 9: return 'октября';
        case 10: return 'ноября';
        case 11: return 'декабря';
        default: return '';
    }
}

export function AppComponent() {
    const {values, setValues, errors, setErrors, handleInputChanges} = useForm(initialValues);
    const [isStatusChange, setIsStatusChange] = useState(false);
    const [newStatus, setNewStatus] = useState('Прежде чем действовать, надо понять');
    const [currentTime, setCurrentTime] = useState('последние изменения 15 мая 2012 в 14:55:17');
    const [checkbox, setCheckbox] = useState(true);

    const handleChecked = (e) => {
        setCheckbox(e.target.checked);
    }

    const handleChangeStatus = (e) => {
        if (isStatusChange === false) {
            setIsStatusChange(true);
            values.status = document.getElementById('status_text').innerText;
        }
    }

    const validateForm = () => {
        let errors = {};

        if (values.password === "") {
            errors.password = "Укажите пароль";
        } else if (values.password.length < 5) {
            errors.password = "Используйте не менее 5 символов";
        } else {
            errors.password = "";
        }

        if (values.confirm_password === "") {
            errors.confirm_password = "Укажите пароль";
        } else if (values.confirm_password !== values.password) {
            errors.confirm_password = "Пароли не совпадают";
        } else {
            errors.confirm_password = "";
        }

        if (values.email === "") {
            errors.email = "Укажите E-mail";
        } else if (!(/$^|.+@.+..+/).test(values.email)) {
            errors.email = "Неверный E-mail";
        } else {
            errors.email = "";
        }
    
        setErrors({
            ...errors
        })
        return Object.values(errors).every(x => x === "");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            fetch('/data', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: values.status,
                    password: values.password,
                    confirm_password: values.confirm_password,
                    email: values.email, 
                    checkbox_notifications: checkbox,
                    city: values.city
                })
            })
            .then((res) => {return res.json()})
            .then((data) => {
                setNewStatus(data.new_status);
                let current = new Date(data.current_time);
                setCurrentTime(`последние изменения ${current.getDate()} ${MonthByNumber(current.getMonth())} ${current.getFullYear()} в
                 ${current.toLocaleTimeString('en-GB')}`);
                setIsStatusChange(false);
                console.log(data);
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div className={styles.header}>
                    <Greeting name="Человек №3596941">
                        Здравствуйте, 
                    </Greeting>
                    <ChangeStatusButton onClick={handleChangeStatus}>
                        Сменить статус
                    </ChangeStatusButton>
                </div>
                <div className={styles.item}>
                    <Status>
                        {newStatus}
                    </Status>
                </div>
                {isStatusChange && (
                    <div className={styles.item} style={{marginTop: 32, marginLeft: 10}}>
                        <TitleInputField>Статус</TitleInputField>
                        <TextField 
                            name="status" 
                            type="text" 
                            value={values.status} 
                            onChange={handleInputChanges}
                        />
                        <Comment className={comment_styles.comment}/>
                    </div>
                )}
                <div className={styles.item} style={{marginTop: 32, marginLeft: 10}}>
                    <TitleInputField>Ваш город</TitleInputField>
                    <DropdownMenu
                        onChange={handleInputChanges}
                        name="city"
                        value={values.city}
                    >
                        <DropdownOptions cities_arr={sortedCities}/>
                    </DropdownMenu>
                    <Comment className={comment_styles.comment}/>
                </div>
                <div className={styles.item} style={{marginTop: 32}}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.item} style={{marginTop: 32, marginLeft: 10}}>
                    <TitleInputField>Пароль</TitleInputField>
                    <TextField 
                        name="password" 
                        type="password"
                        error={errors.password}
                        onChange={handleInputChanges}
                        value={values.password}
                    />
                    <Comment className={comment_styles.comment}>Ваш новый пароль должен содержать не менее 5 символов.</Comment>
                </div>
                <div className={styles.item} style={{marginTop: 32, marginLeft: 10}}>
                    <TitleInputField>Пароль еще раз</TitleInputField>
                    <TextField 
                        name="confirm_password"
                        type="password"
                        error={errors.confirm_password}
                        onChange={handleInputChanges}
                        value={values.confirm_password}
                    />
                    <Comment className={comment_styles.comment}>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</Comment>
                </div>
                <div className={styles.item} style={{marginTop: 32}}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.item} style={{marginTop: 32, marginLeft: 10}}>
                    <TitleInputField>Электронная почта</TitleInputField>
                    <TextField 
                        name="email"
                        type="text"
                        value={values.email}
                        error={errors.email}
                        onChange={handleInputChanges}
                    />
                    <Comment className={comment_styles.comment}>Можно изменить адрес, указанный при регистрации.</Comment>
                </div>
                <div className={styles.item} style={{marginTop: 40, marginLeft: 10}}>
                    <TitleInputField>Я согласен</TitleInputField>
                    <CheckBox 
                        label="принимать актуальную информацию на емейл" 
                        id="checkbox_notifications" 
                        name="checkbox_notifications" 
                        onChange={handleChecked}
                        checked={checkbox}
                    />
                </div>
                <div className={styles.item} style={{marginTop: 40, marginLeft: 10}}>
                    <div className={styles.emptyBlock}></div>
                    <SubmitButton value="Изменить"></SubmitButton>
                    <Comment className={styles.lastChangeText}>{currentTime}</Comment>
                </div>
            </form> 
        </Layout>
    );
}