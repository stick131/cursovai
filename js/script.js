const burger = document.querySelector(".burger");

function reg(person){
    let message = {
        title: document.querySelector(".popup__title").textContent,
        text: document.querySelector(".popup__text").textContent
    }

    if(person.name.length == 0 || person.email.length == 0){
        message.text = "Ви не запонили усi даннi спробуйте ще раз";
    }else if(person.name.length !=0 && person.email.indexOf("@gmail.com") == -1){
        message.name ="Антиспам захист";
        message.text = "Будь ласка не використовуйте 10 хвилиннi пошти!"
    }

    console.log(message);
    console.log(person);

    return message;
}

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
    
    let message = reg(person);

    document.querySelector(".popup__title").textContent = message.title;
    document.querySelector(".popup__text").textContent = message.text;

    document.querySelector(".overlay").classList.add("overlay--active");
});

document.querySelector(".popup__close").addEventListener("click", (event) =>{
    event.preventDefault();
    document.querySelector(".overlay").classList.remove("overlay--active");
});

// document.querySelector(".write__btn").addEventListener("submit")
