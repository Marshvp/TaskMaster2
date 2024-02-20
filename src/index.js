import { buildNav } from './components/DOMbuild.js/navbar';
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', async function() {
    const body = document.querySelector('body')
    const hr = document.createElement('hr')
    console.log('before buildNav');
    const nav = await buildNav();
    console.log('after buildNav');
   
   

    const content = document.createElement('div');
    content.classList.add('content');
    content.id = 'content-container';
    console.log('before append');
    body.append(nav, hr, content);
    console.log('after append');
})