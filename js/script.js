const burger = document.querySelector(".burger");

burger.addEventListener("click", (event)=>{
    burger.classList.toggle("burger--active");
    document.querySelector(".menu-list").classList.toggle("menu-list--active");
});

document.querySelector(".footer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".overlay").classList.add("overlay--active");
});

document.querySelector(".popup__close").addEventListener("click", (event) =>{
    event.preventDefault();
    document.querySelector(".overlay").classList.remove("overlay--active");
});


