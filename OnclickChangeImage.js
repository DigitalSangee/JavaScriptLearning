document.addEventListener("DOMContentLoaded", function() {
    const myImage = document.querySelector("img");
    console.log(myImage);
    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "Images/pensil-sharpner.jpg") {
            myImage.setAttribute("src", "Images/pensil-sharpner2.jpg");
        } else {
            myImage.setAttribute("src", "Images/pensil-sharpner.jpg");
        }
    }
    
});
