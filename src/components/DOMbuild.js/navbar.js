export function buildNav() {
    // Create nav element
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary');
    
    // Create container-fluid
    const containerFluid = document.createElement('div');
    containerFluid.classList.add('container-fluid');
    nav.appendChild(containerFluid);

    // Create navbar-brand
    const brand = document.createElement('a');
    brand.classList.add('navbar-brand');
    brand.href = '#';
    brand.textContent = 'TaskMaster';
    containerFluid.appendChild(brand);

    // Create navbar-toggler button
    const button = document.createElement('button');
    button.classList.add('navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');
    const span = document.createElement('span');
    span.classList.add('navbar-toggler-icon');
    button.appendChild(span);
    containerFluid.appendChild(button);

    // Create collapse div
    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarNav';
    containerFluid.appendChild(collapseDiv);

    // Create navbar-nav ul
    const navUl = document.createElement('ul');
    navUl.classList.add('navbar-nav');
    collapseDiv.appendChild(navUl);

    // Create nav items
    const navItems = [
        { text: 'Home', href: '#', active: true },
        { text: 'Projects', href: '#' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        if (item.active) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navUl.appendChild(li);
    });

    return nav;
}
