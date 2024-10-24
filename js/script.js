const burger = document.querySelector(".burger");


burger.addEventListener("click", (event)=>{
    burger.classList.toggle("burger--active");
    document.querySelector(".menu-list").classList.toggle("menu-list--active");
});



document.querySelector(".footer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let person, NewMessage;
    let message = {
        title: "Повiдомлення",
        text: `Дякуємо за реєстрацію та вітаємо вас у нашій музичній школі! Ми раді, що ви обрали шлях творчості та музичного розвитку разом із нами. У нашій школі ви зможете поринути у захоплюючий світ музики, розвивати свої таланти та відкривати нові горизонти.`,
        status: true
    }
    if(!event.target.classList.contains("write-btn")){
    person = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value 
    };

    NewMessage = reg(person, message);

    }else{
    message.text = "Ваш вiдгук вiдправлен";
    person = {
        name: document.querySelector("#name").value,
        text: document.querySelector("#text").value 
    };
    NewMessage = review(person, message);
    let reviews = document.querySelector(".review .container .review__content");
    if(message.status){
        reviews.innerHTML =  `<div class="review__text">
                <div class="review__name">${person.name}</div>
                <div class="review__descr">${person.text}</div>
            </div>` + reviews.innerHTML;
    }
    }
    document.querySelector(".popup__title").textContent = NewMessage.title;
    document.querySelector(".popup__text").textContent = NewMessage.text;
    document.querySelector(".overlay").classList.add("overlay--active");
});


document.querySelector(".popup__close").addEventListener("click", (event) =>{
    event.preventDefault();
    document.querySelector(".overlay").classList.remove("overlay--active");
});

// document.querySelector(".write__btn").addEventListener("submit")
