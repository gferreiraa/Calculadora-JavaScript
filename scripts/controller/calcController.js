class CalcController {

    constructor(){ // Chamado automaticamente junto a instância de uma classe
        // this._displayCalc = 0; Por convensão _nome refere-se a um atribuito privado.
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonEvents();

        this._operation = [];
    }

    // Seta o valor para Data e Hora
    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);

        });

    }

    // Botão CE
    clearAll(){

        this._operation = [];

    }

    // Botão CA
    clearEntry(){

        this._operation.pop();

    }
    // Pega o último item do array
    getLastOperation(){

        return this._operation[this._operation.length -1];
    }

    setLastOperation(value){
        return this._operation[this._operation.length -1] = value;
    }

    isOperator(value){

        return(['+', '-', '*', '/', '%'].indexOf(value) > -1);

    }

    // Adiciona item clicado ao array
    addOperation(value){
        console.log('a', isNaN(this.getLastOperation()));

        if(isNaN(this.getLastOperation())) {
            
            if(this.isOperator(value)) {

                this.setLastOperation(value);
            
            } else if(isNaN(value)) {

            } else {
                this._operation.push(value);
            }

        } else {
           let newValue = this.getLastOperation().toString() + value.toString();
           this.setLastOperation(parseInt(newValue));
        }
        console.log(this._operation);
    }

    // Error    
    setError(){

        this.displayCalc = 'Error';

    }

    execBtn(value){

        switch(value) {

            case 'ac':
            this.clearAll();
            break;

            case 'ce':
            this.clearEntry();
            break; 
            
            case 'soma':
            this.addOperation('+');
            break;            

            case 'subtracao':
            this.addOperation('-');
            break; 

            case 'divisao':
            this.addOperation('/');
            break;

            case 'multiplicacao':
            this.addOperation('*');
            break;

            case 'porcento':
            this.addOperation('%');
            break;

            case 'igual':
            this.clearEntry();
            break;

            case 'ponto':
            this.addOperation('.');
            break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.addOperation(parseInt(value));
            break;

            default:
            this.setError();
            break;
        }
    }

    // Captura Eventos de clique
    initButtonEvents(){
        
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '');
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover", e => {
                btn.style.cursor = "pointer";
            });

        });
    
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // Time
    get displayTime(){
        this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
    
    // Date
    get displayDate(){
        this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
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
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }


}