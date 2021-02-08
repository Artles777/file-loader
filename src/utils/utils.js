export function createElement(tag, classes = [], attrs) {
    const node = document.createElement(tag)
    node.classList.add(...classes)
    if (attrs) {
        Object.keys(attrs).forEach(attr => {
            if (attr === 'textContent') {
                node.textContent = attrs[attr]
            } else {
                node.setAttribute(attr, attrs[attr])
            }
        })
    }

    return node
}

export function appendElement(parent, child) {
    return parent.append(child)
}

export function afterElement(parent, child) {
    return parent.after(child)
}