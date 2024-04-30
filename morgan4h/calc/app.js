let num1 = document.querySelectorAll('input'),
    num2 = document.querySelectorAll('input'),
    p    = document.querySelector('.p'),
    m    = document.querySelector('.m'),
    mul  = document.querySelector('.mul'),
    d    = document.querySelector('.d'),
    res  = document.querySelector('.res');


p.onclick = function() {
    // console.log(parseInt(num1[0].value) + parseInt(num2[1].value))
    res.textContent = parseInt(num1[0].value) + parseInt(num2[1].value)
    location.href = "#r";
}

m.onclick = function() {
    res.textContent = parseInt(num1[0].value) - parseInt(num2[1].value)
    location.href = "#r";
}

mul.onclick = function() {
    res.textContent = parseInt(num1[0].value) * parseInt(num2[1].value)
    location.href = "#r";
}

d.onclick = function() {
    res.textContent = parseInt(num1[0].value) / parseInt(num2[1].value)
    location.href = "#r";
}