class CalcController {
    constructor(){ // Chamado automaticamente junto a instância de uma classe
        this._displayCalc = 0; // Por convensão _nome refere-se a um atribuito privado.
        this._dataAtual;
    }
    // Retorna uma valor.
    get displayCalc(){
        return this._displayCalc;
    }
    // Atribui um valor através de um parâmetro de entrada.
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._dataAtual = valor;
    }


}