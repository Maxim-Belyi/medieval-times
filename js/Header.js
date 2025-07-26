export class Header {
    selectors = {
        root: '[data-js-header]',
        burgerButton: '[data-js-header-burger-button]',
        body: '[data-js-body]',
    }

    stateClasses = {
        isActive: 'is-active',
        noScroll: 'no-scroll',
    }
    
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.bodyElement = document.querySelector(this.selectors.body)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.rootElement.classList.toggle(this.stateClasses.isActive)
        this.bodyElement.classList.toggle(this.stateClasses.noScroll)
    }
}