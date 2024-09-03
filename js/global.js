window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0P29BVB28D');

let navX = document.querySelector('nav .nav-x');

let int = setInterval(() => {
    // //console.log($(document).width())
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


// test the routing 

function getOption(number) {
    order = btn[number].parentElement.parentElement.firstElementChild.textContent
    type =  document.querySelector('h1').textContent
    $('.confirm').show(400, function() {
        document.querySelector('.pack').style.opacity = '0'
    })
    $('.admin').text(type)
    $('.alert').text("do you want see demo for [ " + order + " ]")
    let tog = document.querySelector('.btn1')
    let tog1 = document.querySelector('.btn2')
    tog1.onclick = function() {
        $('.confirm').hide(400,function() {
            document.querySelector('.pack').style.opacity = '1'
        })
    }
    let i = 0;
    tog.onclick = function() {
        // location.href = `https://4h.kesug.com?order=${order}&type=${type}`
        //console.log(i)
        if(type == ' Web') {
            i++
            $('.alert').html(` You Can Vist  <a style='color: blue' 
            href='http://myproject4h.kesug.com' target='__blank'
            >MyProjects</a>  <hr> To See Your Order how its look like <hr>
            now if you are Comfortable you can confirm your order &#128512;
            `)
        }else if(type == ' Video Editing') {
            i++
            if(order == 'Basic  10$') {
                $('.alert').html(`You Can Watch This 
                <hr>
                 <iframe  src="https://www.youtube.com/embed/tmVPKRAdtUg"  allowfullscreen>
                </iframe> <hr> To See Your Order how its look like <hr>
                now if you are Comfortable you can confirm your order &#128512;`)
            }
            else if(order == 'premium  50$ - 100$') {
                $('.alert').html(`You Can Watch This 
                <hr>
                 <iframe  src="https://www.youtube.com/embed/TDdIHE8voqg"  allowfullscreen>
                </iframe> <hr> To See Your Order how its look like <hr>
                now if you are Comfortable you can confirm your order &#128512;`)
            }else if(order == ' Max +100$') {
                $('.alert').html(`You Can Watch This 
                <hr>
                 <iframe  src="https://www.youtube.com/embed/L8JGyvPe6lk"  allowfullscreen>
                </iframe> <hr> To See Your Order how its look like <hr>
                now if you are Comfortable you can confirm your order &#128512;`)
            }
            
        }else if(type == ' Advertasing') {
            i++
                if(order ==' SOFAI 4H 10$') {
                    $('.alert').html(`You Can Vist The channel <a
                     style='color: blue' href=
                    'https://youtube.com/@SOFAI4H'>SOFAI 4H</a> <hr>
                    To See Your Order how its look like <hr>
                now if you are Comfortable you can confirm your order &#128512;`)
                }else if(order == ' Morgan 4H 5$') {
                    $('.alert').html(`You Can Vist The channel <a
                     style='color: blue' href=
                    'https://youtube.com/@morgan4h'>MORGAN 4H</a>
                    <hr>
                    To See Your Order how its look like <hr>
                now if you are Comfortable you can confirm your order &#128512;`)
                }else if(order == 'Sponsor') {
                    $('.alert').html(`See This channels and decide what you want to sponsore
                    <hr>
                    <a
                     style='color: blue' href=
                    'https://youtube.com/@SOFAI4H'>Hacking content</a>
                    <hr>
                    <a
                     style='color: blue' href=
                    'https://youtube.com/@morgan4h'>Programming content</a>
                    <hr>
                    <a
                     style='color: blue' href=
                    'https://youtube.com/@tmk4h'>Gaming content</a>
                    `)
                }
        }else if (type == ' Voice Over') {
            i++
                if(order == 'Basic  10$') {
                    $('.alert').html(`You Can Watch arabic version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/lwz0jBPULrM"  allowfullscreen>
                    </iframe> <hr>
                    or  english version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/ThZBd9-PLRU"  allowfullscreen>
                    </iframe> <hr>
                    To See Your Order how its look like <hr>
                    now if you are Comfortable you can confirm your order &#128512;`)
                }else if(order == 'premium  50$') {
                    $('.alert').html(`You Can Watch arabic version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/FnBc_O5IKYw"  allowfullscreen>
                    </iframe> <hr>
                    or  english version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/xUnmy3f_xzs"  allowfullscreen>
                    </iframe> <hr>
                    To See Your Order how its look like <hr>
                    now if you are Comfortable you can confirm your order &#128512;`)
                }else if(order == ' Max +100$') {
                    $('.alert').html(`You Can Watch arabic version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/S3Wh2sT2AdE"  allowfullscreen>
                    </iframe> <hr>
                    or  english version 
                    <hr>
                     <iframe  src="https://www.youtube.com/embed/j26gG3aHu0I"  allowfullscreen>
                    </iframe> <hr>
                    To See Your Order how its look like <hr>
                    now if you are Comfortable you can confirm your order &#128512;`)
                }
        }

        if(i === 2) {
            //console.log(order)
           let newOrder =  localStorage.setItem('order',order);
           let newType =  localStorage.setItem('page',type);
            // let inp = document.getElementsByTagName('input')
            $('.sendInfo').show(400,function() {
                $('.confirm').hide(400)
            })
            
            //  location.href = `https://4h.kesug.com/routing.php?order=${order}&type=${type}`
        }else if(i > 2) {
            i = 0
        }
        
    }
}


// //console.log(location.search)
let btn = document.getElementsByTagName('button')
btn[0].onclick = function() {
    location.href = '#top'
   getOption(0)
}
btn[1].onclick = function() {
    location.href = '#top'
   getOption(1)
}
btn[2].onclick = function() {
    location.href = '#top'
    getOption(2)
}


if(location.search == '?page=web') {
    let head = document.querySelector('h1'),
        title = document.querySelectorAll('.p'),
        p = document.querySelectorAll('p')
    head.textContent = " Web"
    title[0].textContent += ' 10$'
    title[1].textContent += ' 50$ - 150$'
    title[2].textContent = ' Max +1000$'
    p[0].innerHTML = `build simple website with 
    html css and basic javascript <hr>
    build pages for your project  [Login
         page, home page,   ]
   <hr>build webSite for your business with links to your social media`
    p[1].innerHTML = `build Daynamic webapp with html css  and javasacript
     [front end]and PHP MYsql [back-end] <hr>
    Can Make your static website  more daynamic with php and mysql 
    <hr> Can Make a wordpress them or website or add back-end service to your wordpress`
    p[2].innerHTML = `this Mean you have some 
    larg project and you want me 
    <hr> work with libraries like react vuejs laraval etc `
}

if(location.search == '?page=adob') {
    let head = document.querySelector('h1'),
        title = document.querySelectorAll('.p'),
        p = document.querySelectorAll('p')
    head.textContent = " Video Editing"
    title[0].textContent += ' 10$'
    title[1].textContent += ' 50$ - 100$'
    title[2].textContent = ' Max +100$'
    p[0].textContent = `5 - 20 Min simple video edit [cut,background music,fix audio,edit color]`
    p[1].textContent = `40Min  editing with effect 
     and sound effect etc`
    p[2].innerHTML = `this Mean you have some 
    larg project and you want me 
    <hr> work for serial or long video + 40 Min `
}



if(location.search == '?page=adver') {
    let head = document.querySelector('h1'),
        title = document.querySelectorAll('.p'),
        p = document.querySelectorAll('p')
    head.textContent = " Advertasing"
    title[0].textContent = ' SOFAI 4H 10$'
    title[1].textContent = ' Morgan 4H 5$'
    title[2].textContent = 'Sponsor'
    p[0].textContent = `Hacking And It channel with more then 5K Sub And more 20K View in Months`
    p[1].textContent = `Programming channel Education Motivation Content`
    p[2].textContent = `this Mean you want support  
    the project for more then one video`
    let newOne = document.createElement('div')
        titleText = document.createElement('h3')
        titleText.textContent ='TMK 4H 5$'
        pargTxt = document.createElement('p')
        pargTxt.textContent = `Gaming Channel , Fany Content`
        button = document.createElement('button')
        button.textContent = 'Select'
        con = document.querySelector('.pack')
        newOne.appendChild(titleText)
        newOne.appendChild(pargTxt)
        newOne.appendChild(button)
        con.appendChild(newOne)
        newOne.className = 'b'
        titleText.className = 'p'
        button.onclick = function() {
            location.href = '#top'
            let order = titleText.textContent
            let type = document.querySelector('h1').textContent
            $('.confirm').show(400, function() {
                document.querySelector('.pack').style.opacity = '0'
            })
            $('.admin').text(type)
            $('.alert').text("do you want see demo for [ " + order + " ]")
            let tog = document.querySelector('.btn1')
            let tog1 = document.querySelector('.btn2')
            tog1.onclick = function() {
                $('.confirm').hide(400,function() {
                    document.querySelector('.pack').style.opacity = '1'
                })
            }
            l = 0
            tog.onclick = function() {
                if(type == ' Advertasing') {
                    l++
                        if(order =='TMK 4H 5$') {
                            $('.alert').html(`You Can Vist The channel <a
                             style='color: blue' href=
                            'https://youtube.com/@tmk4h'>TMK 4H</a>
                            <hr>
                            To See Your Order how its look like <hr>
                        now if you are Comfortable you can confirm your order &#128512;`)
                        }
                         }
                         if(l > 1 ) {
                            
                            let newOrder =  localStorage.setItem('order',order);
                            let newType =  localStorage.setItem('page',type);
                                // let inp = document.getElementsByTagName('input')
                                $('.sendInfo').show(400,function() {
                                    $('.confirm').hide(400)
                                })
                                
                         }
            }
            
        }
        newOne.style.marginTop = '55px'
        newOne.style.marginLeft = '-30px'
        newOne.style.rotate = '3deg'
        
}



if(location.search == '?page=over') {
    let head = document.querySelector('h1'),
        title = document.querySelectorAll('.p'),
        p = document.querySelectorAll('p')
    head.textContent = " Voice Over"
    title[0].textContent += ' 10$'
    title[1].textContent += ' 50$'
    title[2].textContent = ' Max +100$'
    p[0].textContent = `5 - 30 Min simple audio [English-Arabic]`
    p[1].textContent = `Motivation or advertisement audio with feeling`
    p[2].innerHTML = `this Mean you have some 
    larg project and you want me 
    <hr> work with you on book or game etc `
}

if(location.pathname == '/home/buy.html') {
    let mylinks = ['?page=over' , '?page=web', '?page=adver', '?page=adob']

    for(let i= 0; i < mylinks.length; i++) {
        if(mylinks.includes(location.search)) {
            // //console.log('good link')
            
        }else {
            location.href = 'error.html'
        }
    }
}



// send data to the server 

$('#send').on('click',function() {
    let inp = document.querySelectorAll('input')
    if(inp[0].value === '' || inp[1].value === '' || inp[2].value === '' ){
        $('.error').show(200,function() {
            $('.error').fadeToggle(1000)
        })
    }else {
      
        $.getJSON("https://api.ipify.org?format=json",
        function (data) {
            
            localStorage.setItem('userIp',data.ip)
        })
        let Fpage = localStorage.getItem('page')
        let fOrder = localStorage.getItem('order')
        let name = inp[0].value
        let thanks = localStorage.setItem('name',name);
        let email = inp[1].value
        let msg = inp[2].value
        let timeSend = new Date()
        let user = localStorage.getItem('userIp')
        location.href = `https://4h.kesug.com/routing.php?page=${Fpage}&order=${fOrder}&name=${name}&email=${email}&msg=${msg}&time=${timeSend}&user=${user}`
      }
})