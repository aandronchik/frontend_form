import * as React from 'react';
import { Layout } from './shared/Layout/Layout';
import { Greeting, StatusButton, Status} from './shared/Content/Header';
import { Select, Line, TextField, CheckBox, InputTitle, Comment, SubmitButton } from './shared/Content/InputField';
import content_styles from './shared/Content/content.less';

export function AppComponent() {
    return (
        <Layout>
            <div className={content_styles.header}>
                <Greeting name="Человек №3596941">
                    Здравствуйте, 
                </Greeting>
                <StatusButton>
                    Сменить статус
                </StatusButton>
            </div>
            <div className={content_styles.item}>
                <Status>
                    Прежде чем действовать, надо понять
                </Status>
            </div>
            <div className={content_styles.item} style={{marginTop: 32, marginLeft: 10}}>
                <InputTitle className={content_styles.title__text}>Ваш город</InputTitle>
                <Select>
                    <option value="minsk">Минск</option>
                    <option value="krashoyarsk">Красноярск</option>
                </Select>
                <Comment className={content_styles.comment}></Comment>
            </div>
            <div className={content_styles.item} style={{marginTop: 32}}>
                <Line></Line>
            </div>
            <div className={content_styles.item} style={{marginTop: 32, marginLeft: 10}}>
                <InputTitle className={content_styles.title__text}>Пароль</InputTitle>
                <TextField className={content_styles.input_item_error} type="password" error="Укажите пароль"></TextField>
                <Comment className={content_styles.comment}>Ваш новый пароль должен содержать не менее 5 символов.</Comment>
            </div>
            <div className={content_styles.item} style={{marginTop: 32, marginLeft: 10}}>
                <InputTitle className={content_styles.title__text}>Пароль еще раз</InputTitle>
                <TextField className={content_styles.input_item} type="password"></TextField>
                <Comment className={content_styles.comment}>Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</Comment>
            </div>
            <div className={content_styles.item} style={{marginTop: 32}}>
                <Line></Line>
            </div>
            <div className={content_styles.item} style={{marginTop: 32, marginLeft: 10}}>
                <InputTitle className={content_styles.title__text}>Электронная почта</InputTitle>
                <TextField className={content_styles.input_item} type="text"></TextField>
                <Comment className={content_styles.comment}>Можно изменить адрес, указанный при регистрации.</Comment>
            </div>
            <div className={content_styles.item} style={{marginTop: 40, marginLeft: 10}}>
                <InputTitle className={content_styles.title__text}>Я согласен</InputTitle>
                <CheckBox label="принимать актуальную информацию на емейл" id="notification" name="notification" value="yes"></CheckBox>
            </div>
            <div className={content_styles.item} style={{marginTop: 40}}>
                <div className={content_styles.empty_block}></div>
                <SubmitButton value="Изменить"></SubmitButton>
                <Comment className={content_styles.last_change}>последние изменения 15 мая 2012 в 14:55:17</Comment>
            </div>
        </Layout>
    );
}