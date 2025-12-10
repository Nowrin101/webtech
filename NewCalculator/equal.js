function calculateResult(expression) {
    try {
        return eval(expression);
    } catch (e) {
        return "Error";
    }
}
