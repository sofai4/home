//console.log("i'm working");
		// //console.log("i'm the global file")
    let clear = document.querySelector('#clear')
if(location.pathname == '/home/thanks.html') {
  if(localStorage.getItem('name') === null) {
      location.href = 'error.html'
  }else {
      clear.onclick = function() {
          window.localStorage.clear()
          location.href = 'index.html'
       }
      //console.log(localStorage.getItem('name'))
      let msg = document.querySelector('p')
      msg.innerHTML = `Thank You 
     <div class='red-1em'> ${localStorage.getItem('name')}</div> For your order 
       ${localStorage.getItem('page')}   <div class='red-1em'> 
        ${localStorage.getItem('order')}</div> and if you
        have any questions or issues <a href='https://x.com'>@4hForHelp</a>
        <br> stay green &#128732 we gona contact you.`
  }
}
let web = document.getElementById("web");
let adob = document.getElementById("adob");
let adver = document.getElementById("adver");
let over = document.getElementById("over");

function rout(page) {
  location.href = `buy.html?page=${page.id}`;
}

web.onclick = function () {
  rout(web);
};

adob.onclick = function () {
  rout(adob);
};

adver.onclick = function () {
  rout(adver);
};

over.onclick = function () {
  rout(over);
};

