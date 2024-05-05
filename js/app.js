console.log("file Js Working...")

$().ready(function() {
    $('h1').hide(100,function() {
        this.show(200)
    })
})