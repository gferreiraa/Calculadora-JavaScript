class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();

    }
    
    initialize(){



        //dateEl.innerHTML = '10/12/2099';
        //timeEl.innerHTML = '23:59'; // propriedade que inseri um 'valor' no HTML

    }

    get displayCalc(){           // get and set para display
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){ 
        this._displayCalcEl.innerHTML = value
    }
    
    get currentDate(){           // get and set para data
        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }

}