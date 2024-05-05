console.log("file Js Working...")

$().ready(function() {
    $('h1').hide(1000,function() {
        $('h1').show(2000) 
    })
})