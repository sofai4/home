$().ready(function() {
    // console.log("hello world")
    $('img').show(800)
})
function makeThebarsMove(){
    $('.technic').show(3000)
    
}
document.onmousemove = function() {
     
    if(scrollY > 392) {
        // console.log("you are here")
        makeThebarsMove()
     }
 
}

let  clickOnKey = addEventListener('keydown',function(e) {
    if(scrollY > 392) {
        // console.log("you are here")
        makeThebarsMove()
     }
 
})

