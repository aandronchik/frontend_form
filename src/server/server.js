import express from 'express';
import ReactDOM from 'react-dom/server';
import { AppComponent } from '../App';
import { indexTemplate } from './indexTemplate';
import React from 'react';
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('./dist/client'));

app.post('/data', (req, res) => {
    console.log(req.body);
    let current_time = new Date()
    let res_data = {
        'current_time': current_time,
        'new_status': req.body.status
    }
    res.send(res_data);
});
app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(<AppComponent/>)));
});

app.listen(8000, () => {
    console.log('server started on port http://localhost:8000/');
});