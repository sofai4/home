console.log("i'm the global file")

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0P29BVB28D');

let navX = document.querySelector('nav .nav-x');

let int = setInterval(() => {
    // console.log($(document).width())
    if($('nav').width() < 1235 ) {
        $('nav ul').hide()
        $('.nav-x').show()
    }else if($('nav').width() > 1235) {
        $('nav ul').show()
        $('.nav-x').hide()
    }
}, 90);

navX.onclick = function() {
    $('nav ul').css({
        flexDirection: 'column',
    })
    $('nav a').css({
        flexDirection: 'column',
        marginBottom: '40px'
    })
    setTimeout(() => {
        $('nav ul').toggle()
        clearInterval(int)
    }, 80);
}


