class Tab {
    constructor (selector) {
        this.tab = document.querySelector(selector)
        this.btn = this.tab.querySelectorAll('.tabs__button')
        this.content = this.tab.querySelectorAll('.tab__body__item')
        this.event()
    }

    event () {
        if(this.tab) {
            this.tab.addEventListener('click', (e) => {
                this.btn.forEach(item => {
                    let tabId = item.getAttribute('data-tab')
                    let element = document.querySelector(tabId)

                    if(e.target === item) {
                        if(!item.classList.contains('active')) {
                            this.btn.forEach(item => {
                                item.classList.remove('active')
                            })
                            this.content.forEach(element => {
                                element.classList.remove('active')
                            })
                        }
                        item.classList.add('active')
                        element.classList.add('active')
                    }
                });

            })
        }
    }
}
