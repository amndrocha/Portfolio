function openDev() {
    const dev = document.getElementById('dev');
    if (dev.style.display == "none") {
        dev.style.display = "block";
    } else {
        dev.style.display = "none";
    }
}
function openWireframes() {
    const dev = document.getElementById('wireframes');
    if (wireframes.style.display == "none") {
        wireframes.style.display = "block";
    } else {
        wireframes.style.display = "none";
    }
}

const modalBackground = document.getElementById("modalBackground");

function close() {
    modalBackground.style.display = "none";
    let modal = document.getElementById(modalOpen);
    modal.style.display = "none";
}

var contactListOpen = document.getElementById("contactListBtn");
var contactListModal = document.getElementById("contactListModal");
var contactListClose = document.getElementById("contactListClose");
contactListOpen.onclick = function() {
    modalBackground.style.display = "flex";
    contactListModal.style.display = "flex";
}
contactListClose.onclick = function() {
    modalBackground.style.display = "none";
    contactListModal.style.display = "none";
}

var dressUpOpen = document.getElementById("dressUpBtn");
var dressUpModal = document.getElementById("dressUpModal");
var dressUpClose = document.getElementById("dressUpClose");
dressUpOpen.onclick = function() {
    modalBackground.style.display = "flex";
    dressUpModal.style.display = "flex";
}
dressUpClose.onclick = function() {
    modalBackground.style.display = "none";
    dressUpModal.style.display = "none";
}

var ecommerceOpen = document.getElementById("ecommerceBtn");
var ecommerceModal = document.getElementById("ecommerceModal");
var ecommerceClose = document.getElementById("ecommerceClose");
ecommerceOpen.onclick = function() {
    modalBackground.style.display = "flex";
    ecommerceModal.style.display = "flex";
}
ecommerceClose.onclick = function() {
    modalBackground.style.display = "none";
    ecommerceModal.style.display = "none";
}

var mapOpen = document.getElementById("mapModalBtn");
var mapModal = document.getElementById("mapModal");
var mapClose = document.getElementById("mapClose");
mapOpen.onclick = function() {
    modalBackground.style.display = "flex";
    mapModal.style.display = "flex";
}
mapClose.onclick = function() {
    modalBackground.style.display = "none";
    mapModal.style.display = "none";
}

var diOpen = document.getElementById("diModalBtn");
var diModal = document.getElementById("diModal");
var diClose = document.getElementById("diClose");
diOpen.onclick = function() {
    modalBackground.style.display = "flex";
    diModal.style.display = "flex";
}
diClose.onclick = function() {
    modalBackground.style.display = "none";
    diModal.style.display = "none";
}

var othersModal = document.getElementById("othersModal");
var othersClose = document.getElementById("othersClose");
function openOthers() {
    modalBackground.style.display = "flex";
    othersModal.style.display = "flex";
}
othersClose.onclick = function() {
    modalBackground.style.display = "none";
    othersModal.style.display = "none";
}

var drawingsModal = document.getElementById("drawingsModal");
var drawingsClose = document.getElementById("drawingsClose");
function openDrawings() {
    modalBackground.style.display = "flex";
    drawingsModal.style.display = "flex";
}
drawingsClose.onclick = function() {
    modalBackground.style.display = "none";
    drawingsModal.style.display = "none";
}

var drawings = ["assets/drawings/0.jpeg","assets/drawings/1.png","assets/drawings/2.png","assets/drawings/3.png","assets/drawings/4.png","assets/drawings/5.png","assets/drawings/6.png","assets/drawings/7.png"];
var image = document.getElementById("drawingView")
var i = 0;

function left() {
    if (i > 0) {
        i--;
    } else {
        i = drawings.length-1;
    }
    console.log(i);
    image.src = drawings[i];
}

function right() {
    if (i < drawings.length-1) {
        i++;
    } else {
        i = 0;
    }
    image.src = drawings[i];
    console.log(i);
}