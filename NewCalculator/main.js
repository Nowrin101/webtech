function press(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let exp = document.getElementById("display").value;
    let result = calculateResult(exp);
    document.getElementById("display").value = result;
}
