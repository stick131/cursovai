const reg = require("./reg")

describe(
    "Перевiрка форми регiстрацii", () => {
        let person;
        let message;
        beforeEach(() =>{
            person = {
                name: "",
                email: ""
            };
            message = {
                title: "Повiдомлення",
                text: `Дякуємо за реєстрацію та вітаємо вас у нашій музичній школі! Ми раді, що ви обрали шлях
        творчості та музичного розвитку разом із нами. У нашій школі ви зможете поринути у захоплюючий світ музики,
        розвивати свої таланти та відкривати нові горизонти.`
            };
        });
        test("Якщо форма пуста", () => {
            expect(reg(person, message)).toEqual({title: 'Повiдомлення', text: 'Ви не запонили усi даннi спробуйте ще раз'})
        });
        test("Якщо формi не праильний введен email", () => {
            person.name = "Егор"
            person.email = "asdasd@adnj.com"
            expect(reg(person, message)).toEqual({title: 'Антиспам захист', text: "Ви ввели некоректну пошту"})
        });
        test("Якщо усi даннi введенi правильно, використовуэ почту gmail", () => {
            person.name =  "Егор"
            person.email = "egor@gmail.com"
            expect(reg(person, message)).toEqual({title: 'Повiдомлення', text: `Дякуємо за реєстрацію та вітаємо вас у нашій музичній школі! Ми раді, що ви обрали шлях
        творчості та музичного розвитку разом із нами. У нашій школі ви зможете поринути у захоплюючий світ музики,
        розвивати свої таланти та відкривати нові горизонти.`})
        });
        test("Якщо усi даннi введенi правильно, використовуэ почту zac", () => {
            person.name =  "Егор"
            person.email = "egor@zac.org.ua"
            expect(reg(person, message)).toEqual({title: 'Повiдомлення', text: `Дякуємо за реєстрацію та вітаємо вас у нашій музичній школі! Ми раді, що ви обрали шлях
        творчості та музичного розвитку разом із нами. У нашій школі ви зможете поринути у захоплюючий світ музики,
        розвивати свої таланти та відкривати нові горизонти.`})
        });
        test("Ящко iм'я занадто велике", ()=>{
            person.name = "adjsafnjfnkjfnkjsnasdasasdaafkjjkjkaskkakajskskjkskjs",
            person.email = "anton@gmail.com";
            expect(reg(person, message)).toEqual({title: message.title, text: `Ваше ім'я занадто довге, воно має бути менше 20 символів`})
        });
    }
);