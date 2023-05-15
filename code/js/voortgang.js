//creating variables for every popup
let container = document.getElementById("container");
let gray = document.getElementById("gray");
let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");
let popup4 = document.getElementById("popup4");
let popup5 = document.getElementById("popup5");
let popup6 = document.getElementById("popup6");

// opening every popup by clicking on it
function openPopup() {
    popup.classList.add("open-popup");
    popup6.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
    container.classList.add("background");
    gray.classList.add("grayscale");
}

function openPopup2() {
    popup2.classList.add("open-popup");
    popup.classList.remove("open-popup");
    popup6.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
    
}
function openPopup3() {
    popup3.classList.add("open-popup");
    popup.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup6.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
}
       
function openPopup4() {
    popup4.classList.add("open-popup");
    popup.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup6.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
}
function openPopup5() {
    popup5.classList.add("open-popup");
    popup.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup6.classList.remove("open-popup");
}
       
function openPopup6() {
    popup6.classList.add("open-popup");
    popup.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
}

// removing popups by clicking ok-button
function closePopup() {
    popup.classList.remove("open-popup");
    popup2.classList.remove("open-popup");
    popup3.classList.remove("open-popup");
    popup4.classList.remove("open-popup");
    popup5.classList.remove("open-popup");
    popup6.classList.remove("open-popup");
}
