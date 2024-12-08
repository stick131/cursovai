function review(person, message){
    message.status = false;
    if(person.name.length === 0 || person.text.length === 0){
        message.text = "Ви не заповнили усi даннi, спробуйте ще раз";
    }else if(person.name.length > 20){
        message.text = "Ваше ім'я занадто довге, воно має бути менше 20 символів";
    }else if(person.text.length > 400){
        message.text = "Ваше вiдгук занадто довгий, вiн має бути менше 400 символів";
    }else{
        message.status = true
    }

    return message;
}

module.exports = review;
