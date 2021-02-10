import {$input} from "./createdElements";

export function createApp(app) {
    return {
        render(selector) {
            const $el = document.querySelector(selector)
            $el.insertAdjacentElement('afterbegin', app)
            return this
        },
        use(options = {}) {
            if (options.multi) {
                $input.setAttribute('multiple', 'true')
            }

            if (options.accept && Array.from(options.accept)) {
                $input.setAttribute('accept', options.accept.join(','))
            }

            if (options.callback && Array.from(options.callback)) {
                options.callback.forEach(l => l())
            }
            return this
        }
    }
}