let slc = document.querySelectorAll('select'),
    btn = document.getElementById('next');

btn.onclick = function() {
    if(slc[0].value == 'freefire') {
        console.log(slc[0].value);
        $(slc[1]).show(900)
    }else if(slc[0].value == 'gta') {
        console.log(slc[0].value)
    }
}
