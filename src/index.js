import { buildNav } from './components/DOMbuild.js/navbar';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    const hr = document.createElement('hr')
    body.appendChild(buildNav());
    body.appendChild(hr);
})