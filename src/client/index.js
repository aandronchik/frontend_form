import * as React from 'react'
import { AppComponent } from '../App.js';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app')
const root = createRoot(container)

window.addEventListener("load", () => {
    root.render(<AppComponent/>);
})