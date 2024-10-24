function review(person, message){
    if(person.name.length === 0 || person.name.length === 0){
        message.text = "Ви не заповнили усi даннi, спробуйте ще раз"
    }

    return message;
}

module.exports = review;