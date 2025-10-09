function cambiarColor(divId, selector) {
    const valorSelect = document.getElementById(selector).value;
    let div = document.getElementById(divId);
    div.style.backgroundColor = valorSelect;
}