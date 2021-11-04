const handler = function (event) {
    if (!this.el.contains(event.target)) {
        this.binding.value()
    }
}

const outsideClick = {
    mounted (el, binding) {
        el.clickOutsideEvent = handler.bind({ el, binding })
        document.addEventListener('click', el.clickOutsideEvent)
    },
    beforeUnmount (el) {
        document.removeEventListener('click', el.clickOutsideEvent)
    },
}

export { outsideClick, handler }
