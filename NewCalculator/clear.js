function clearAll() {
    document.getElementById("display").value = "";
}

function deleteOne() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}
