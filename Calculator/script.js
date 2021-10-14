class Calculator {
    constructor(previousOutput, currentOutput) {
        this.previousOutput = previousOutput;
        this.currentOutput = currentOutput;
        this.clear();
    }

    clear() {
        this.currentOutputText = '';
        this.previousOutputText = '';
        this.operation = undefined;
    }

    addNumber(value) {
        if (value === '.' && this.currentOutputText.includes('.')) return
        this.currentOutputText = this.currentOutputText.toString() + value.toString();
    }

    chosenOperation(operator) {
        this.operation = operator;
        if (this.currentOutputText === '') return;
        if (this.previousOutputText !== '')
        this.computation();

        this.previousOutputText = this.currentOutputText;
        this.currentOutputText = '';
    }

    updateDisplay() {
        this.currentOutput.innerText = this.currentOutputText;
        this.previousOutput.innerText = this.previousOutputText;
    }

    computation() {
        let calculation;
        const previous = parseFloat(this.previousOutputText);
        const current = parseFloat(this.currentOutputText);
        switch(this.operation){
            case '+':
                calculation = previous + current;
                break;
            case '-':
                calculation = previous - current;
                break;
            case '/':
                calculation = previous / current;
                break;
            default:
                return;
        }

        this.currentOutputText = calculation;
        this.previousOutputText = '';
        this.operation = undefined;
        return this.currentOutputText;
    }
}


const previousOutput = document.getElementById('previous-output');
const numbers = document.querySelectorAll('[data-number]');
const currentOutput = document.getElementById('current-output');
const operators = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');
const equal = document.querySelector('[data-equals]');

const calculator = new Calculator(previousOutput, currentOutput);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.addNumber(number.innerText);
        calculator.updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chosenOperation(operator.innerText);
        calculator.updateDisplay();
    });
});

equal.addEventListener('click', () => {
    calculator.computation();
    calculator.updateDisplay();
});

clear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});