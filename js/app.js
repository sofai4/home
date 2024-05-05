console.log("file Js Working...")

$().ready(function() {
    $('h1').hide(100,function() {
        $('h1').show(200) 
    })
})