function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }

}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function backspc() {
    display.value = display.value.substr(0, display.value.length - 1);
}

function log() {
    display.value = Math.log(display.value);
}

function ln() {
    display.value = Math.ln(display.value);
}

function pi() {
    display.value = 3.14159265359;
}

function e() {
    display.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    display.value = f;
}