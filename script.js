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

var files = ["assets/background.jpg","assets/main.png"]
let i = 0;

while (i<files.length) {
    loaded = i+"/"+files.length;
    percent.innerHTML = loaded;
    console.log("Loaded");
    var my_image = new Image();
    my_image.src = files[i];
    i++
}

loading.style.display = "none";