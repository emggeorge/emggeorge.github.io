const myImage = document.querySelector("img");

myImage?.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc  === "images/me.png") {
        myImage.setAttribute("src", "images/attention.png");
    } else if (mySrc === "images/attention.png") {
        myImage.setAttribute("src", "images/excited.png");
    } else if (mySrc === "images/excited.png") {
        myImage.setAttribute("src", "images/think.png");
    } else {
        myImage.setAttribute("src", "images/relief.png");
    }
})