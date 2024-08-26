let opt1 = document.querySelector('#opt1')
let opt2 = document.querySelector('#opt2')
let opt3 = document.querySelector('#opt3')
let opt4 = document.querySelector('#opt4')
let most = document.querySelector('.card')
let params = new URL(document.location.toString()).searchParams;
let number = params.get("number");
let titleOf = params.get("titleOf");
let image = params.get("image");
let url = params.get("url")
let timeOf = params.get("timeOf")
let numberOf = params.get("numberOf")
let hash = params.get('hash')
let next = document.getElementById('next');
let count = 1;
opt1.onclick = function() {
    app = 'script';
    if(titleOf == 'script') {
        console.log('good')
    }else {
        location.href = 'https://4h.kesug.com/store.php?store='+this.textContent+'&app='+app+"&count="+count;
    }
    if(hash == null) {
        console.log(this.textContent)

        location.href = 'https://4h.kesug.com/store.php?store='+this.textContent+'&app='+app+"&count="+count;
    
    }else {
        $(most).show(900,function(){
            if(most.style.display == 'none') {
                console.log('do nothing')
            }else {
                $(most).css({
                    display: 'flex'
                })
                $('#next').show(900)
            }
           })
           $('.card h3').text(titleOf)
           let selectImage = document.querySelector('.card img');
           selectImage.setAttribute('src',image)
           let selectLink = document.querySelector('.card a');
           selectLink.setAttribute('href',url)
    }
}
opt2.onclick = function() {
    app = 'mod'
    if(titleOf == 'mod') {
        console.log('good')
    }else {
        location.href = 'https://4h.kesug.com/store.php?store='+this.textContent+'&app='+app+"&count="+count;
    }
    // console.log(this.textContent)
    // location.href = 'http://localhost/4h/store.php?store='+this.textContent;
}
opt3.onclick = function() {
    app = 'tool'
    if(titleOf == 'tool') {
        console.log('good')
    }else {
        location.href = 'https://4h.kesug.com/store.php?store='+this.textContent+'&app='+app+"&count="+count;
    }
}
opt4.onclick = function() {
    console.log(this.textContent)
    // location.href = 'http://localhost/4h/store.php?store='+this.textContent;
}   

// console.log(hash);
var a = 1
let newNan = parseFloat(localStorage.getItem('global1'))
oldNan = parseFloat(localStorage.setItem('global1',newNan))
next.onclick = function() {
    if(numberOf.trim() == '') {
        localStorage.removeItem('global1')
        let con1 = confirm('No Item Left You Want to reload the page')
        if(con1 == true) {
            location.href = '../store/index.html'
        }else {

        }
        
    }
    if(titleOf.trim() == 'script') {
      
        if(localStorage.getItem('global1') == 'NaN') {
            newNan = 1
        }
        newNan++
         oldNan = parseFloat(localStorage.setItem('global1',newNan))
        app = 'script'
        console.log(titleOf)
        location.href = 'https://4h.kesug.com/store.php?store='+'Mod Games'+'&app='+app+"&count="+newNan;
    }else if(titleOf.trim() == 'mod') {
        if(localStorage.getItem('global1') == 'NaN') {
            newNan = 1
        }
        newNan++
         oldNan = parseFloat(localStorage.setItem('global1',newNan))
        app = 'mod'
        console.log(titleOf)
        location.href = 'https://4h.kesug.com/store.php?store='+'Script Free Fire'+'&app='+app+"&count="+newNan;
    }else if(titleOf.trim() == 'tool') {
        if(localStorage.getItem('global1') == 'NaN') {
            newNan = 1
        }
        newNan++
         oldNan = parseFloat(localStorage.setItem('global1',newNan))
        app = 'tool'
        console.log(titleOf)
        location.href = 'https://4h.kesug.com/store.php?store='+'Hacking Tools'+'&app='+app+"&count="+newNan;
    }else {
        console.log('no match')
    }
}

// var oldNan = parseFloat(localStorage.setItem('global1',1))

window.onload = function() {
    if(hash == null) {

        
    }else {
        if(titleOf.trim() == 'tool') {
            $(opt2).hide(200)
            $(opt1).hide(200)
            $(opt4).hide(200)
        }
       
        if(titleOf.trim() == 'mod') {
            $(opt3).hide(200)
            $(opt1).hide(200)
            $(opt4).hide(200)
        }
        if(titleOf.trim() == 'script') {
            $(opt2).hide(200)
            $(opt3).hide(200)
            $(opt4).hide(200)
        }
        $('.card h3').text(titleOf)
        let selectImage = document.querySelector('.card img');
        selectImage.setAttribute('src',image)
        let selectLink = document.querySelector('.card a');
        selectLink.setAttribute('href',url)
        $(most).show(900,function(){
            if(most.style.display == 'none') {
                console.log('do nothing')
            }else {
                $(most).css({
                    display: 'flex'
                })
                $('#next').show(900)
            }
           })
    }
}