// simple animate with jquery
$('.who ul').slideToggle(900)
// make statmaent for location

if(localStorage.getItem('stay') == null) {
    console.log('no')
    location.href = 'https://4h.kesug.com/blog.php?title=co';
    localStorage.setItem('stay','true')
}else {
    let t = document.querySelector('h1')
    let p = document.querySelectorAll('p')
    let video  = document.querySelector('iframe')
    let params = new URL(document.location.toString()).searchParams;
    let t1 = params.get("t");
    let p1 = params.get("p1");
    let p2 = params.get("p2");
    let p3 = params.get("p3");
    let video1 = params.get("video");
    if(t1 == null) {
         location.href = 'https://4h.kesug.com/blog.php?title=co';
    }
    t.textContent = t1
    p[0].textContent = p1
    p[1].textContent = p2
    p[2].textContent = p3
    video.setAttribute('src',video1)
    localStorage.setItem('t',t1)
    localStorage.setItem('p1',p1)
    localStorage.setItem('p2',p2)
    localStorage.setItem('p3',p3)
    localStorage.setItem('video',video1)


}



