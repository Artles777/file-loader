export function createElement(tag, classes = []) {
    const node = document.createElement(tag)
    node.classList.add(...classes)
}