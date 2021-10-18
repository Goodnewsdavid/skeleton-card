const $el = document.querySelector(".user-card");
 setTimeout(() =>{
     $el.classList.remove("skeleton");
     $el
     .querySelectorAll("skeleton")
     .forEach((el) => el.classList.remove("hide-text"));
 }, 3000) ;