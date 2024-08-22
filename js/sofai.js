// simple animate with jquery
$('.who ul').slideToggle(900)
// make statmaent for location
if(location.href == 'https://sofai4.github.io/home/sofai4h/blog.html?morgan') {
    //if news for sofai 4h
    console.log('welcome ' + location.search)
    // location.href = `https://4h.kesug.com/content.php?content='true'`
}else if(location.href == 'https://sofai4.github.io/home/sofai4h/blog.html?sofai' ) {
    // console.log('welcome ' + location.search)
   window.open('https://4h.kesug.com/content.php?get=co','_blank')
}else {
    let t = document.querySelector('h1')
    let p = document.querySelectorAll('p')
    let video  = document.querySelector('iframe').getAttribute('src')
    console.log(t)
    console.log(p)
    console.log(video)
}
