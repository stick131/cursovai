function reg(person, message){
    if(person.name.length == 0 || person.email.length == 0){
        message.text = "Ви не запонили усi даннi спробуйте ще раз";
    }else if(person.name.length !=0 && (person.email.indexOf("@gmail") == -1 && person.email.indexOf("@zac") == -1)){
        message.title ="Антиспам захист";
        message.text = "Будь ласка не використовуйте 10 хвилиннi пошти!"
    }


    return message;
}

module.exports = reg;