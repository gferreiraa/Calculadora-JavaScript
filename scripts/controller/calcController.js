class CalcController {

    constructor(){ // Chamado automaticamente junto a instância de uma classe
        this._displayCalc = 0; // Por convensão _nome refere-se a um atribuito privado.
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = '4567';
        dateEl.innerHTML = '01/05/2020';
        timeEl.innerHTML = '00:00';

    }

    // Retorna uma valor.
    get displayCalc(){
        return this._displayCalc;
    }
    // Atribui um valor através de um parâmetro de entrada.
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }


}