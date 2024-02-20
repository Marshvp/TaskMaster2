import { buildNav } from './components/DOMbuild.js/navbar';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', async function() {
    const body = document.querySelector('body')
    const hr = document.createElement('hr')
    const nav = await buildNav();
    const content = document.createElement('div');
    content.classList.add('content');
    content.id = 'content-container';
    body.append(nav, hr, content);
    
})