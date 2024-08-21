//console.log("i'm working");

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

