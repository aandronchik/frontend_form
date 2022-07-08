import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { AppComponent } from '../App.js';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app')
const root = createRoot(container)

window.addEventListener("load", () => {
    root.render(<AppComponent/>);
})