console.log(location.search)

if(location.search == '?html') {
    let main = 'https://www.youtube.com/embed/M7i6OC56hio'
    let playlist = ['https://www.youtube.com/embed/AFAuDN706CU',
                    'https://www.youtube.com/embed/ILRsaYDKEqY',
                    'https://www.youtube.com/embed/AQ50LAjImWU',
                    'https://www.youtube.com/embed/Qx082uE688c',
                    'https://www.youtube.com/embed/9wkh84JT1no',
                    'https://www.youtube.com/embed/E5qweEKAnI4',
                    'https://www.youtube.com/embed/Bmy-Kz-8XxY',
                    'https://www.youtube.com/embed/XruSB0GBhSc',
                    'https://www.youtube.com/embed/z0YUhvRSSpk',
                    'https://www.youtube.com/embed/B_UTupc6Ypc',
                    'https://www.youtube.com/embed/_UWoZUkRIPc',
                    'https://www.youtube.com/embed/M3GyAlprd8c',
                    'https://www.youtube.com/embed/q7RQI3lQxYM',
                    'https://www.youtube.com/embed/lhKW5co94XE'
]
    let vid = document.getElementById('#am')
    let myCon = document.querySelector('.next')
    am.setAttribute('src',main)
    for(i = 0; i < playlist.length; i++) {
        img = document.createElement('img')
        img.alt = playlist[i]
        nu = i + 1;
        img.src = 'https://placehold.jp/2e9455/ffffff/150x70.png?text=' + nu
        myCon.appendChild(img)
    }
    addEventListener('click',function(t) {
        console.log(t.target.alt)
        if(t.target.alt == undefined) {
            
        }else {
            am.setAttribute('src',t.target.alt)
            location.href = '#s'
        }
       
    })


}else if (location.search == '?css') {
    let main = 'https://www.youtube.com/embed/9osG9hx7Ipw'
    let playlist = ['https://www.youtube.com/embed/o5VxwWuUn4Y',
                    'https://www.youtube.com/embed/-QeiLKRALSY',
                    'https://www.youtube.com/embed/V4pmt-QYwfE',
                    'https://www.youtube.com/embed/7DUKz21DtCs',
                    'https://www.youtube.com/embed/4qk1k8IXsfo',
                    'https://www.youtube.com/embed/CIgpZGQLoxI',
                    'https://www.youtube.com/embed/m4Y9Z9gQ1XQ',
                    'https://www.youtube.com/embed/tG3m7dJZVMQ',
                    'https://www.youtube.com/embed/aO0le99o49U',
                    'https://www.youtube.com/embed/dVEZhSYg23Y',
                    'https://www.youtube.com/embed/BjVEYB1EEuI',
                    'https://www.youtube.com/embed/LrEnzCO9jNo',
                    'https://www.youtube.com/embed/yYkWCHtfi7k',
                    'https://www.youtube.com/embed/G_LOT4-3oVk',
                    'https://www.youtube.com/embed/qwKF2LOu95c',
                    'https://www.youtube.com/embed/UhAyHTOIt1g',
                    'https://www.youtube.com/embed/RDkEGb6L0vc',
                    'https://www.youtube.com/embed/we2tBBq_qL8',
                    'https://www.youtube.com/embed/YvItz1pRm2s',
                    'https://www.youtube.com/embed/l1xBYsGSdZc',
                    'https://www.youtube.com/embed/TBN4OrVhHLY'
]
    let vid = document.getElementById('#am')
    let myCon = document.querySelector('.next')
    am.setAttribute('src',main)
    for(i = 0; i < playlist.length; i++) {
        img = document.createElement('img')
        img.alt = playlist[i]
        nu = i + 1;
        img.src =  'https://placehold.jp/3d4070/ffffff/150x70.png?text=' + nu
        myCon.appendChild(img)
    }
    addEventListener('click',function(t) {
        console.log(t.target.alt)
        if(t.target.alt == undefined) {
            
        }else {
            am.setAttribute('src',t.target.alt)
            location.href = '#s'
        }
       
    })


}else if (location.search == '?js') {
    let main = 'https://www.youtube.com/embed/rWdN2u_i2Ro'
    let playlist = ['https://www.youtube.com/embed/si0HTg9UGK0',
                    'https://www.youtube.com/embed/kc3BTGWrE2g',
                    'https://www.youtube.com/embed/uR211bMTX4A',
                    'https://www.youtube.com/embed/vRqsv6rYtPc',
                    'https://www.youtube.com/embed/qqBx0Xt1sR4',
                    'https://www.youtube.com/embed/7YIRj3t2-T4',
                    'https://www.youtube.com/embed/mBZcBKSZNWc',
                    'https://www.youtube.com/embed/eGCVSrYKdog',
                    'https://www.youtube.com/embed/JbluARrSV8Y',
                    'https://www.youtube.com/embed/smxg37ndgVE',
                    'https://www.youtube.com/embed/XDE3aJ0rr-E',
                    'https://www.youtube.com/embed/0eYy16VezhU',
                    'https://www.youtube.com/embed/g2YfAzN9YJo',
                    'https://www.youtube.com/embed/-IMvjWMzPWk',
                    'https://www.youtube.com/embed/sjGDAJ-bWu4',
                    'https://www.youtube.com/embed/Fa6ECxJup8o',
                    'https://www.youtube.com/embed/YdcCNlkl-gI',
                    'https://www.youtube.com/embed/Gmw22vPDYp0',
                    'https://www.youtube.com/embed/fhWPRpOAAp8',
                    'https://www.youtube.com/embed/0v3WDu0-t54',
                    'https://www.youtube.com/embed/b5TgoTCtNeE',
                    'https://www.youtube.com/embed/TsigSp_qahI',
                    'https://www.youtube.com/embed/olmQ98Gqq7o'
]
    let vid = document.getElementById('#am')
    let myCon = document.querySelector('.next')
    am.setAttribute('src',main)
    for(i = 0; i < playlist.length; i++) {
        img = document.createElement('img')
        img.alt = playlist[i]
        nu = i + 1;
        img.src = 'https://placehold.jp/e3d326/ffffff/150x70.png?text=' + nu
        myCon.appendChild(img)
    }
    addEventListener('click',function(t) {
        console.log(t.target.alt)
        if(t.target.alt == undefined) {
            
        }else {
            am.setAttribute('src',t.target.alt)
            location.href = '#s'
        }
       
    })



}else if (location.search == '?php') {
    let main = 'https://www.youtube.com/embed/wOg1NUqFK-A'
    let playlist = ['https://www.youtube.com/embed/eHOy-BjYyfc',
                    'https://www.youtube.com/embed/R7Qe0RTYfpU',
                    'https://www.youtube.com/embed/tdGtl_sEPcw',
                    'https://www.youtube.com/embed/7P9IMYBlhH0',
                    'https://www.youtube.com/embed/HA3qGcWgeQk',
                    'https://www.youtube.com/embed/Gqz4Ynskcow',
                    'https://www.youtube.com/embed/Vji89EGQl90',
                    'https://www.youtube.com/embed/GMDfUCEvBnc',
                    'https://www.youtube.com/embed/TC5E4RJf6vU',
                    'https://www.youtube.com/embed/j9AqDqW2kac',
                    'https://www.youtube.com/embed/19uKcYLTjZw',
                    'https://www.youtube.com/embed/OcxCuNvYSL4',
                    'https://www.youtube.com/embed/oBeZNtvvh5g',
                    'https://www.youtube.com/embed/B9PlLurZXUE',
                    'https://www.youtube.com/embed/vVShinYiAAM',
                    'https://www.youtube.com/embed/4cf_zJ8M6Xs',
                    'https://www.youtube.com/embed/vKaSjq2SrSw',
                    'https://www.youtube.com/embed/xHWdvXxY2w4',
                    'https://www.youtube.com/embed/gFInL7JYtU0',
]
    let vid = document.getElementById('#am')
    let myCon = document.querySelector('.next')
    am.setAttribute('src',main)
    for(i = 0; i < playlist.length; i++) {
        img = document.createElement('img')
        img.alt = playlist[i]
        nu = i + 1;
        img.src = 'https://placehold.jp/ae2dd2/ffffff/150x70.png?text=' + nu
        myCon.appendChild(img)
    }
    addEventListener('click',function(t) {
        console.log(t.target.alt)
        if(t.target.alt == undefined) {
            
        }else {
            am.setAttribute('src',t.target.alt)
            location.href = '#s'
        }
       
    })


    
}else {
    location.href = '../error.html'
}

