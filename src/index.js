import { buildNav } from './components/DOMbuild.js/navbar';
import { createContentContainer } from './components/DOMbuild.js/buildContentCon'
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { showMain } from './components/DOMbuild.js/showMain';

document.addEventListener('DOMContentLoaded', async function() {
    const body = document.querySelector('body')
    const hr = document.createElement('hr')
    const nav = await buildNav();
    const content = await createContentContainer();
    body.append(nav, hr, content);
    // showMain();
    showMain();
    
})