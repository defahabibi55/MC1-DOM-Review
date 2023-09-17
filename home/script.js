function changeRed() {
     let val = document.getElementById('input-red').value;
     let red = document.getElementById('red-value');
     let green = document.getElementById('green-value');
     let blue = document.getElementById('blue-value');
     let alpha = document.getElementById('alpha-value');
     red.innerHTML = val;
     document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, ${alpha.innerHTML})`
}

function changeGreen() {
    let val = document.getElementById('input-green').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    let alpha = document.getElementById('alpha-value');
    green.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, ${alpha.innerHTML})`
}

function changeBlue() {
    let val = document.getElementById('input-blue').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    let alpha = document.getElementById('alpha-value');
    blue.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, ${alpha.innerHTML})`
}

function changeAlpha() {
    let val = document.getElementById('input-alpha').value;
    let red = document.getElementById('red-value');
    let green = document.getElementById('green-value');
    let blue = document.getElementById('blue-value');
    let alpha = document.getElementById('alpha-value');
    alpha.innerHTML = val;
    document.getElementById('box').style.backgroundColor = `rgba(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML}, ${alpha.innerHTML})`
}