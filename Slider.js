// create main class
class Tab {
    //in the parameters of the constructor, we enter the selector in which the tab class should be
    constructor (selector) {
        // create main property
        this.tab = document.querySelector(selector)
        this.btn = this.tab.querySelectorAll('.tabs__button')
        this.content = this.tab.querySelectorAll('.tab__body__item')
        // call the main method
        this.event()
        // Imitation of the first click
        this.click()
    }

    // main method
    event () {
        // check whether tabs exist
        if(this.tab) {
            // add event click to tabs
            this.tab.addEventListener('click', (e) => {
                // sort buttons
                this.btn.forEach(item => {
                    // add attribute to variables
                    let tabId = item.getAttribute('data-tab')
                    // found element with attribute, what we found
                    let element = document.querySelector(tabId)

                    // check target
                    if(e.target === item) {
                        // check class button
                        if(!item.classList.contains('active')) {
                            // sort buttons
                            this.btn.forEach(item => {
                                // remove class of sorting button
                                item.classList.remove('active')
                            })
                            // sort element
                            this.content.forEach(element => {
                                // remove class of sorting element
                                element.classList.remove('active')
                            })
                        }
                        // add class for element what we clicked
                        item.classList.add('active')
                        element.classList.add('active')
                    }
                });

            })
        }
    }

    // imitation method
    click() {
        // add class for first element
        this.btn[0].classList.add('active')
        this.content[0].classList.add('active')
    }
}
