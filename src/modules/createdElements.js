import {createElement} from "../utils/utils";


export const $container = createElement('div', ['container'])

export const $card = createElement('div', ['card'])

export const $input = createElement('input', ['input'], {
    id: 'input',
    type: 'file'
})

export const $open = createElement('button', ['btn'], {
    content: 'Открыть'
})

export const $load = createElement('button', ['btn', 'primary'], {
    content: 'Загрузить'
})

export const $preview = createElement('div', ['preview'])
