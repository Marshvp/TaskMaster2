export function createContentContainer() {
    const container = document.createElement('div');
    container.id = 'content-container';
    document.body.appendChild(container);
    return container;
}

