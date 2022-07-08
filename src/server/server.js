import express from 'express';
import ReactDOM from 'react-dom/server';
// import { Header } from '../shared/Header';
import { AppComponent } from '../App';
import { indexTemplate } from './indexTemplate';
const app = express();


app.use('/static', express.static('./dist/client'));
app.get('/', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(AppComponent())));
});
app.listen(8000, () => {
    console.log('server started on port http://localhost:8000/');
});