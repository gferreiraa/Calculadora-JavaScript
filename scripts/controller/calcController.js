class CalcController {

    constructor() {

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initButtonsEvents()


    }
    
    initialize(){

        this.setDisplayDateTime();

        setInterval(() => {

        this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, 'click drag mouseover', e => {
                
                console.log(btn.className.baseVal.replace('btn-', ''));

            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {

                btn.style.cursor = 'pointer';

            });

        });



    }





    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long', 
            year: 'numeric'

        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){           // get time
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){          // get date
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){           // get and set para display
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){ 
        this._displayCalcEl.innerHTML = value
    }
    
    get currentDate(){           // get and set para data
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}