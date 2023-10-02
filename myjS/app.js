let opt = document.getElementById("down");
let btn = document.getElementById("btn-down");


function red() {


    if(opt.value == 'cours') {

 
        window.location.href = "https://sofai4.github.io/home/download/cours.html";
        
        }
        
        if(opt.value == 'games') {
        
            window.location.href = "https://sofai4.github.io/home/download/games.html";
        
        }
        
        
        if(opt.value == 'doc') {
        
            window.location.href = "https://sofai4.github.io/home/download/doc.html";
        
        }
        
        
        if(opt.value == 'res') {
        
            window.location.href = "https://sofai4.github.io/home/download/res.html";
        
        }


}


function send() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let ms = document.getElementById("ms");

    console.log(name.value);
    console.log(email.value);
    console.log(ms.value);
    alert("Thank You For Your Time")
    

}