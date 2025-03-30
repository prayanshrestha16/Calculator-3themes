let currentInput = '';
let currentOperation = null;
let previousInput = '';
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

document.querySelectorAll('.keypad button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if ('0123456789.'.includes(value)) {
            currentInput += value;
            updateDisplay();
        } else if ('+-x/'.includes(value)) {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    calculate();
                }
                previousInput = currentInput;
                currentInput = '';
                currentOperation = value;
            }
        } else if (value === '=') {
            calculate();
        } else if (value === 'RESET') {
            reset();
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }
    });
});

function updateDisplay() {
    display.value = currentInput || '0';
}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && currentOperation) {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        switch (currentOperation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case 'x': result = prev * current; break;
            case '/': result = prev / current; break;
        }
        const calculation = `${prev} ${currentOperation} ${current} = ${result}`;
        addToHistory(calculation);
        currentInput = result.toString();
        previousInput = '';
        currentOperation = null;
        updateDisplay();
    }
}

function reset() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function addToHistory(calculation) {
    const historyEntry = document.createElement('div');
    historyEntry.textContent = calculation;
    historyList.insertBefore(historyEntry, historyList.firstChild);
    if (historyList.children.length > 10) {
        historyList.removeChild(historyList.lastChild);
    }
}

const themeSlider = document.querySelector('.theme-slider');
const sliderButton = document.querySelector('.slider-button');
const body = document.body;

themeSlider.addEventListener('click', (e) => {
    const sliderWidth = themeSlider.offsetWidth;
    const clickPosition = e.offsetX;
    const buttonWidth = sliderButton.offsetWidth;
    
    if (clickPosition < sliderWidth / 3) {
        setTheme(1);
        sliderButton.style.left = '2px';
    } else if (clickPosition < 2 * sliderWidth / 3) {
        setTheme(2);
        sliderButton.style.left = `${sliderWidth / 2 - buttonWidth / 2}px`;
    } else {
        setTheme(3);
        sliderButton.style.left = `${sliderWidth - buttonWidth - 2}px`;
    }
});

function setTheme(themeNumber) {
    body.className = `theme-${themeNumber}`;
}

updateDisplay();