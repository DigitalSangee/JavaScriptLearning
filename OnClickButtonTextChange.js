document.addEventListener("DOMContentLoaded", function(){
    const btn=document.querySelector("button");
    const txt=document.querySelector("p");
    btn.onclick = () => {
        if(txt.textContent === "The Machine has Stopped!")
            {
             btn.textContent = "Stop Machine!";
             txt.textContent = "The Machine has Started!";
            }
        else
            {
             btn.textContent = "Start Machine!";
             txt.textContent = "The Machine has Stopped!";
            }
    }
});