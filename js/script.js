const burger = document.querySelector(".burger");


burger.addEventListener("click", (event)=>{
    burger.classList.toggle("burger--active");
    document.querySelector(".menu-list").classList.toggle("menu-list--active");
});


document.querySelector(".footer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let person = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value 
    };
     
    let message = {
        title: document.querySelector(".popup__title").textContent,
        text: document.querySelector(".popup__text").textContent
    }

    message = reg(person, message);

    document.querySelector(".popup__title").textContent = message.title;
    document.querySelector(".popup__text").textContent = message.text;

    document.querySelector(".overlay").classList.add("overlay--active");
});

document.querySelector(".popup__close").addEventListener("click", (event) =>{
    event.preventDefault();
    document.querySelector(".overlay").classList.remove("overlay--active");
});

// document.querySelector(".write__btn").addEventListener("submit")
