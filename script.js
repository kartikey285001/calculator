let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch ((link unavailable)) {
            case 'clear':
                calculation = '';
                result = '';
                display.value = '';
                break;
            case 'backspace':
                calculation = calculation.slice(0, -1);
                display.value = calculation;
                break;
            case 'sqrt':
                result = Math.sqrt(calculation);
                display.value = result;
                break;
            case 'equals':
                try {
                    result = eval(calculation);
                    display.value = result;
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                calculation += button.textContent;
                display.value = calculation;
        }
    });
});
