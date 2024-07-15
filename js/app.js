let char1 = document.querySelector(".char1"),
  char2 = document.querySelector(".char2"),
  char3 = document.querySelector(".char3");
  var i = 0;
// now let make a div when the game gona happened

// first i will make the mouth content changer with jquery// here i change the nodeText of mouth

let right = document.getElementById("right"),
    left = document.getElementById("left");

const myChars = [".char1", ".char2", ".char3"];
var count = 0;
function move() {
  if (count == 1) {
    $(myChars[0]).fadeOut(700, function () {
      $(myChars[count]).fadeIn(900);
      $(myChars[2]).fadeOut(900);
    });
  } else if (count == 2) {
    $(myChars[1]).hide(700, function () {
      $(myChars[count]).show(700);
      $(myChars[3]).hide(700);
    });
  } else if (count == 3) {
    count = 0;
    if (count == 0) {
      $(myChars[2]).slideUp(700, function () {
        $(myChars[count]).slideDown(900);
        $(myChars[1]).hide(700);
      });
    }
  } else if (count == 0) {
    $(myChars[2]).slideUp(700, function () {
      $(myChars[count]).slideDown(900);
      $(myChars[1]).hide(700);
    });
  } else if (count < 0) {
    count = 0;
  }
}
left.onclick = function () {
  count++;
  move();
};
right.onclick = function () {
  count--;
  move();
  console.log(count);
};

// make function for the charctare

char1.onclick = function () {
    // alert("Use the A D W S For Moving the charctare")
    console.log("hi");
    let bd = document.querySelector("#game");
    let btnBd = document.querySelector("#close");
    btnBd.onclick = function () {
      bd.style.display = "none";
      location.href = "#start";
    };
    bd.style.display = "block";
    bd.style.backgroundColor = "black";
    bd.style.color = "white";
    location.href = "#game";
    // now the user in the game let see where he is clicking
    let move = 1;
    let left = 1;
    addEventListener("keydown", function (event) {
      console.log(event.key);
      // now we make the movement of the charctare
      if (event.key == "s" || event.key == "ArrowDown") {
        location.href = "#game";
        let char1IN = document.querySelector(".map .skills .char1");
        move++;
        char1IN.style.top = move + "cm";
        console.log(char1IN.style.top);
        console.log(char1IN.style.left);
      } else if (event.key == "w") {
        location.href = "#game";
        let char1IN = document.querySelector(".map .skills .char1");
        console.log(char1IN);
        --move;
        char1IN.style.top = move + "cm";
        console.log(char1IN.style.top);
        console.log(char1IN.style.left);
      } else if (event.key == "a" || event.key == "ArrowLeft") {
        location.href = "#game";
        let char1IN = document.querySelector(".map .skills .char1");
        console.log(char1IN);
        --left;
        char1IN.style.left = left + "cm";
        console.log(char1IN.style.top);
        console.log(char1IN.style.left);
      } else if (event.key == "d" || event.key == "ArrowRight") {
        location.href = "#game";
        let char1IN = document.querySelector(".map .skills .char1");
        console.log(char1IN);
        left++;
        char1IN.style.left = left + "cm";
        console.log(char1IN.style.top);
        console.log(char1IN.style.left);
      } else if (event.key == "Enter") {
        $('.box h6').hide(900)
        i++
      if(i === 0) {
            console.log('case', i)
        }else if (i === 1) {
            console.log('case', i)
            let mydiv = document.querySelector('.basic')
            // mydiv.style.backgroundColor = 'red'
            mydiv.innerHTML += `<ul>
            <li>Vue Js, Bootstrap,</li>
            <li>Jquery, Json, Ajax</li>
            <li>DOM, BOM, EC6</li>
            </ul>`
        }else if (i === 2) {
            console.log('case', i)
            let mydiv = document.querySelector('.basic')
            mydiv.innerHTML += `<ul>
            <li>PHP</li>
            <li>Node Js</li>
            <li>Laravel</li>
            </ul>`
            // mydiv.style.backgroundColor = 'green'
        }else if (i === 3) {
            console.log('case', i)
            let mydiv = document.querySelector('.basic')
            // mydiv.style.backgroundColor = '#8b1be2'
            mydiv.innerHTML += `<ul>
            <li>Sql</li>
            <li>Mysql</li>
            <li>MongoDb</li>
            <li>git</li>
            <li>wordPress</li>
            </ul>`
        }else if (i === 4) {
          let user = confirm("Do You Want to See My Project !")
          if(user == true) {
            location.href = 'index.html#game'
          }else {
            l
          }
        }
      }
    });
  };

  
char2.onclick = function () {
      $('.edtin').show(900)
      location.href = '#edit'
}
//now let work on charctar 2

// charctar 3

char3.onclick = function () {
  location.href = '#voice'
  $('.voic').show(900)
};

// use the offsite to track the charctare
