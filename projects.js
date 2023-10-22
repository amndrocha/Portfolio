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
var modalOpen;

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
    modalOpen = "contactListModal";
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
    modalOpen = "dressUpModal";
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
    modalOpen = "ecommerceModal";
}
ecommerceClose.onclick = function() {
    modalBackground.style.display = "none";
    ecommerceModal.style.display = "none";
}

var mapOpen = document.getElementById("mapBtn");
var mapModal = document.getElementById("mapModal");
var mapClose = document.getElementById("mapClose");
mapOpen.onclick = function() {
    modalBackground.style.display = "flex";
    mapModal.style.display = "flex";
    modalOpen = "mapModal";
}
mapClose.onclick = function() {
    modalBackground.style.display = "none";
    mapModal.style.display = "none";
}

var diOpen = document.getElementById("diBtn");
var diModal = document.getElementById("diModal");
var diClose = document.getElementById("diClose");
diOpen.onclick = function() {
    modalBackground.style.display = "flex";
    diModal.style.display = "flex";
    modalOpen = "diModal";
}
diClose.onclick = function() {
    modalBackground.style.display = "none";
    diModal.style.display = "none";
}

var othersOpen = document.getElementById("othersBtn");
var othersModal = document.getElementById("othersModal");
var othersClose = document.getElementById("othersClose");
othersOpen.onclick = function() {
    modalBackground.style.display = "flex";
    othersModal.style.display = "flex";
    modalOpen = "othersModal";
}
othersClose.onclick = function() {
    modalBackground.style.display = "none";
    othersModal.style.display = "none";
}

var drawingsOpen = document.getElementById("drawingsBtn");
var drawingsModal = document.getElementById("drawingsModal");
var drawingsClose = document.getElementById("drawingsClose");
drawingsOpen.onclick = function() {
    modalBackground.style.display = "flex";
    drawingsModal.style.display = "flex";
    modalOpen = "drawingsModal";
}
drawingsClose.onclick = function() {
    modalBackground.style.display = "none";
    drawingsModal.style.display = "none";
}
