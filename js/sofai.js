// simple animate with jquery
$('.who ul').slideToggle(900)
// make statmaent for location
if(location.href == 'https://sofai4.github.io/home/sofai4h/blog.html?morgan') {
    //if news for sofai 4h
    console.log('welcome ' + location.search)
    // location.href = `https://4h.kesug.com/content.php?content='true'`
}else if(location.href == 'https://sofai4.github.io/home/sofai4h/blog.html?sofai' ) {
    // console.log('welcome ' + location.search)
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    //usage:
    readTextFile("https://4h.kesug.com/data.json", function(text){
        var data = JSON.parse(text);
        console.log(data)
        console.log(data[0].title);
        console.log(data[0].p1);
        console.log(data[0].p2);
        console.log(data[0].p3);
        console.log(data[0].video);
    });
}
// check the user who want the content 
if(location.pathname == '/home/sofai4h/blog.html') {
    if(location.search == '?sofai') {

    }else if(location.search == '?morgan') {

    }
    else {
        location.href = 'https://sofai4.github.io/home/error.html'
    }
}