let element = document.querySelector("body");
let arrImages = ["../img/desktop/boat.jpg", "../img/desktop/butterfly1.jpg", "../img/desktop/butterfly2.jpg",
                "../img/desktop/seattle.jpg", "../img/desktop/plant.jpg"];
let randomNumber = Math.floor(Math.random() * arrImages.length());

element.style.background = "url(" + arrImages[randomNumber]+ ")";