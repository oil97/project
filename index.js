let btn=document.querySelector(".main_button");

function Click_btn(){
    let bd=document.querySelector("body");
    bd.classList.toggle("body_style");
    btn.classList.toggle("new_style");
}

btn.addEventListener("click",Click_btn);