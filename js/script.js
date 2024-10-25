const burger = document.querySelector(".burger");
const form = document.querySelector("form");
let formData = {};
let reviewData = {}

burger.addEventListener("click", (event)=>{
    burger.classList.toggle("burger--active");
    document.querySelector(".menu-list").classList.toggle("menu-list--active");
});

form.addEventListener("input", (event)=> {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("formData", JSON.stringify(formData));
})
console.log(document.title)
let reviews = document.querySelector(".review .container .review__content");
try{
    if(localStorage.getItem("formData")){
        formData = JSON.parse(localStorage.getItem("formData"));
        for(let key in formData){
            form.elements[key].value = formData[key];
        }
    }
 
}catch(TypeError){
    formData.text = "";
}finally{
   if(localStorage.getItem("reviewData") && document.title == "Про нас"){
        let people = JSON.parse(localStorage.getItem("reviewData"));
        for(let key in people){
            reviews.innerHTML = `<div class="review__text">
                <div class="review__name">${key}</div>
                <div class="review__descr">${people[key]}</div>
            </div>` + reviews.innerHTML;
        }
    }
}


document.querySelector(".footer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let person, NewMessage;
    let message = {
        title: "Повiдомлення",
        text: `Дякуємо за реєстрацію та вітаємо вас у нашій музичній школі! Ми раді, що ви обрали шлях творчості та музичного розвитку разом із нами. У нашій школі ви зможете поринути у захоплюючий світ музики, розвивати свої таланти та відкривати нові горизонти.`,
        status: true
    }

    if (!event.target.classList.contains("write-btn")) {
        person = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value 
        };

        NewMessage = reg(person, message);
    } else {
        message.text = "Ваш вiдгук вiдправлен";
        person = {
            name: document.querySelector("#name").value,
            text: document.querySelector("#text").value 
        };
        NewMessage = review(person, message);
        
        let reviews = document.querySelector(".review .container .review__content");
        if (message.status) {
            let reviewData = JSON.parse(localStorage.getItem("reviewData")) || {};
            reviewData[person.name] = person.text;

            localStorage.setItem("reviewData", JSON.stringify(reviewData));

            reviews.innerHTML = `<div class="review__text">
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

