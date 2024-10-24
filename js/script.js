const burger = document.querySelector(".burger");


burger.addEventListener("click", (event)=>{
    burger.classList.toggle("burger--active");
    document.querySelector(".menu-list").classList.toggle("menu-list--active");
});


document.querySelector(".footer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let person;
    let message = {
        title: document.querySelector(".popup__title").textContent,
        text: document.querySelector(".popup__text").textContent,
        color: "green"
    }
    if(!event.target.classList.contains("write-btn")){
    person = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value 
    };

    message = reg(person, message);

    document.querySelector(".popup__title").textContent = message.title;
    document.querySelector(".popup__text").textContent = message.text;
    }else{
    person = {
        name: document.querySelector("#name").value,
        text: document.querySelector("#text").value 
    };
    let reviews = document.querySelector(".review .container .review__content");
    reviews.innerHTML =  `<div class="review__text">
                <div class="review__name">${person.name}</div>
                <div class="review__descr">${person.text}</div>
            </div>` + reviews.innerHTML;
            
    }
    document.querySelector(".overlay").classList.add("overlay--active");
});


document.querySelector(".popup__close").addEventListener("click", (event) =>{
    event.preventDefault();
    document.querySelector(".overlay").classList.remove("overlay--active");
});

// document.querySelector(".write__btn").addEventListener("submit")
