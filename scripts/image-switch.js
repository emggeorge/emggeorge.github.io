const myImage = document.querySelector("img");

myImage?.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc  === "img/me/me.png") {
        myImage.setAttribute("src", "img/me/attention.png");
    } else if (mySrc === "img/me/attention.png") {
        myImage.setAttribute("src", "img/me/excited.png");
    } else if (mySrc === "img/me/excited.png") {
        myImage.setAttribute("src", "img/me/think.png");
    } else if (mySrc === "img/me/think.png") {
        myImage.setAttribute("src", "img/me/relief.png");
    } else {
        myImage.setAttribute("src", "img/me/me.png");
    }
})