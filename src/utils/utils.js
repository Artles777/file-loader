export function createElement(tag, classes = [], attrs) {
    const node = document.createElement(tag)
    node.classList.add(...classes)
    if (attrs) {
        Object.keys(attrs).forEach(attr => {
            if (attr === 'content') {
                node.textContent = attrs[attr]
            } else {
                node.setAttribute(attr, attrs[attr])
            }
        })
    }

    return node
}

export function formatBytes(size, decimals= 2) {
    if (!size) {
        return"0 Bytes"
    }

    const dm = 0 > decimals ? 0 : decimals
    const arraySizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const idx = Math.floor(Math.log(size) / Math.log(1024))
    const value = Math.pow(1024, idx)

    return parseFloat(`${(size / value).toFixed(dm)}`) + ' ' + arraySizes[idx]
}

export function changeBlock(el) {
    el.style.bottom = '4px'
    el.innerHTML = '<div class="preview-info-progress"></div>'
}