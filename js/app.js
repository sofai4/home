$().ready(function() {
    // console.log("hello world")
    $('img').show(800)
})
function makeThebarsMove(){
    $('.technic').show(1000)
    
}
document.onmousemove = function() {
     
    if(scrollY > 352) {
        // console.log("you are here")
        makeThebarsMove()
     }
 
}

let  clickOnKey = addEventListener('keydown',function(e) {
    if(scrollY > 352) {
        // console.log("you are here")
        makeThebarsMove()
     }
 
})

// changer content of footer 

// let ft = document.querySelector('footer')

//     ft.textContent = "hello world"

let sub = document.querySelector('.sub'),
    sup = document.querySelector('.support');

sub.onclick = function() {
   $('nav ul').slideToggle().css({
    display: 'flex'
   })
}
sup.onclick = function() {
    location.href = '/support';
}