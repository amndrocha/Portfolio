window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, { passive: false });

function preventMotion(event)
{
    event.preventDefault();
    event.stopPropagation();
}

var loading = document.getElementById("loading");
var percent = document.getElementById("percent");
let loaded;

var files = ["assets/background.jpg","assets/main.png","assets/contacts.png","assets/di.png","assets/map.png","assets/drawing/0.jpeg","assets/drawing/1.jpeg","assets/drawing/2.jpeg","assets/drawing/3.jpeg",
"assets/drawing/4.jpeg","assets/drawing/5.jpeg","assets/drawing/6.jpeg","assets/drawing/7.jpeg"]
let i = 0;

while (i<=files.length) {
    loaded = i+"/"+files.length;
    percent.innerHTML = loaded;
    console.log(loaded);
    var my_image = new Image();
    my_image.src = files[1];
    i++
}