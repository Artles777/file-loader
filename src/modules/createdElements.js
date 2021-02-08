import {createElement} from "../utils/utils";


export const $container = createElement('div', ['container'])

export const $input = createElement('input', ['input'], {
    id: 'input',
    type: 'file'
})

export const $open = createElement('button', ['btn'], {
    textContent: 'Открыть'
})