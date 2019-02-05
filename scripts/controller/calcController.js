class CalcController {

    constructor() {

        this._displayCalc = "0";
        this._dataAtual;

    }
    // get and set para display
    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){ 
        this._displayCalc = valor
    }
    // get and set para data
    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this.dataAtual = valor;
    }

}