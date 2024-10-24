function reg(person, message){
    if(person.name.length == 0 || person.email.length == 0){
        message.text = "Ви не запонили усi даннi спробуйте ще раз";
    }else if(person.name.length !=0 && person.name.length <= 20 && (person.email.indexOf("@gmail") == -1 && person.email.indexOf("@zac") == -1)){
        message.title ="Антиспам захист";
        message.text = "Ви ввели некоректну пошту";
    }else if(person.name.length > 20){
        message.text = "Ваше ім'я занадто довге, воно має бути менше 20 символів";
    }


    return message;
}

module.exports = reg;