class CalcController {
    constructor() {
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector('#display')
        this._hourEL = document.querySelector('#hora')
        this._dateEl = document.querySelector('#data')
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
        this.addEventListenerAll()
    }

    initialize() {
        // iniciando data e hora assim que entra na aplicação
        this.setDisplayDateTime()

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000);
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    initButtonsEvents() {
        // pegando todos os botões
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')

        // varrendo botões e pegando seu valor
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace('btn-', ''))
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer'
            })
        })
    }

    // trabalhando com data e hora
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            // personalizando data
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    // Definir como acessar os valores
    get displayTime() {
        return this._hourEL.innerHTML
    }

    set displayTime(value) {
        return this._hourEL.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value 
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(date) {
        this._currentDate = date
    }
}