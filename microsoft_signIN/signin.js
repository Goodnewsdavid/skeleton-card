const $el = document.querySelector(".main-div");
 setTimeout(() =>{
     $el.classList.remove("skeleton");
     $el
     .querySelectorAll("skeleton")
     .forEach((el) => el.classList.remove("inner-main-div"));
 }, 4000) ;