class CalcController {

    constructor() {

        this._displayCalc = "0";
        this._dataAtual;
        this.initialize();

    }
    
    initialize(){

        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = '4567';
        dateEl.innerHTML = '10/12/2099';
        timeEl.innerHTML = '23:59'; // propriedade que inseri um 'valor' no HTML

    }

    get displayCalc(){           // get and set para display
        return this._displayCalc;
    }

    set displayCalc(valor){ 
        this._displayCalc = valor
    }
    
    get dataAtual(){           // get and set para data
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }

}