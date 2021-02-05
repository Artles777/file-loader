export default class App {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    toHTML() {
        return `
            <div class="container">
                <input type="file" class="input">
            </div>
        `
    }

    render() {
        this.$el.insertAdjacentHTML('afterbegin', this.toHTML())
    }
}