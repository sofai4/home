let char1 = document.querySelector('.char1'),
    char2 = document.querySelector('.char2'),
    char3 = document.querySelector('.char3');
    // now let make a div when the game gona happened

// first i will make the mouth content changer with jquery
let mouth1 = document.querySelector(".char1 .mouth");
let mouth2 = document.querySelector(".char2 .mouth");
let mouth3 = document.querySelector(".char3 .mouth");
// here i change the nodeText of mouth
mouth1.textContent = "I'm Web Developer";
mouth2.textContent = "I'm Video Editor";
mouth3.textContent = "I'm Voice Commentator";
// now we gona do animation to the char;


let right = document.getElementById('right'),
    left  = document.getElementById('left');

const myChars = ['.char1','.char2','.char3'];
var count = 0;
function move() {
    if(count == 1) {
        $(myChars[0]).fadeOut(700,function(){
            $(myChars[count]).fadeIn(900)
            $(myChars[2]).fadeOut(900)
        })
    }else if(count == 2) {
        $(myChars[1]).hide(700,function(){
            $(myChars[count]).show(700)
            $(myChars[3]).hide(700)
        })
    }else if(count == 3) {
        count = 0;
        if(count == 0) {
            $(myChars[2]).slideUp(700,function(){
                $(myChars[count]).slideDown(900)
                $(myChars[1]).hide(700)
            })
        }
    }else if(count == 0) {
        $(myChars[2]).slideUp(700,function(){
            $(myChars[count]).slideDown(900)
            $(myChars[1]).hide(700)
        })
    }else if (count < 0 ) {
        count = 0
    }
}
left.onclick = function(){
    count++
    move() 
}
right.onclick = function() {
    count--
    move()
    console.log(count)
}

char1.onclick = function() {
    console.log("hi")
    let bd = document.querySelector('#game')
    let btnBd = document.querySelector('#close')
    btnBd.onclick = function() {
        bd.style.display = "none";
        location.href = "#start"
    }   
    bd.style.display = "block";
    location.href = "#game"
}