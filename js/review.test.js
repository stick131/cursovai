const review = require('./review');

describe("Перевiрка форми для вiдгукiв", () => {
    let person;
    let message;
    beforeEach(() => {
        person = {
            name: "",
            text: ""
        };
        message = {
            title: "Повiдомлення",
            text: `Ваш вiдгук вiдправлен`,
            status: false
        };
    });
    test('Якщо усi даннi введденi вiрно', () => {
        person.name = "Егор";
        person.text = "Дуже класна школа, усiм рекомендую";
       expect(review(person, message)).toEqual({title: "Повiдомлення",text: "Ваш вiдгук вiдправлен", status: true})
    });
    test('Якщо форма пуста', () => {
       expect(review(person, message)).toEqual({title: "Повiдомлення",text: "Ви не заповнили усi даннi, спробуйте ще раз", status: false})
    });
    test('Якщо у полi name бiльше 20 cимволiв', () => {
       person.name = "sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
       person.text = "Класна школа"
       expect(review(person, message)).toEqual({title: "Повiдомлення",text: "Ваше ім'я занадто довге, воно має бути менше 20 символів", status: false})
    });
    test('Якщо у полi text бiльше 400 cимволiв', () => {
        person.name = "Egor";
        person.text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error voluptates nisi aliquid consectetur repellendus pariatur voluptas! Iusto soluta reiciendis, veniam temporibus eos, quis, consequuntur nemo quisquam vero nesciunt at?
Natus ab amet aspernatur officia quos. Animi sint est eum voluptate ea atque doloribus delectus! Voluptatibus voluptates debitis quae quo animi eius eligendi molestiae, delectus sit iste quibusdam, adipisci facere.
Mollitia error ea voluptates quae voluptatibus consequatur quisquam, quasi non, asperiores officiis quaerat eveniet dolor ut perspiciatis et. Ipsam debitis dolorum repudiandae vero at itaque est nam cum saepe error?
Fugit officiis nostrum excepturi et nam autem eos nulla ex, quam, dolorum illo explicabo quaerat error fugiat. Debitis laboriosam ea aliquid ut est repellendus, beatae itaque iste, unde dolores quasi.
Ducimus minima, laborum nihil provident accusamus esse dignissimos amet. Iste labore eligendi est iusto quo! Delectus, fugiat atque repellendus cupiditate corporis corrupti nulla iure ipsa officiis, qui aliquam. Hic, repellat?
Sequi hic, necessitatibus et consectetur, omnis saepe id eveniet sunt, deleniti impedit excepturi itaque iste ea vel eaque culpa alias ex quos. Cum facere recusandae amet illo architecto consequatur nulla.
Odio, vitae. Similique illo pariatur eligendi ipsa? Porro autem, non adipisci neque iusto iste nemo ad totam, a vero error fugit magnam earum debitis qui veniam numquam blanditiis cum quisquam?
Architecto quibusdam fugit nihil sint quo consequuntur sapiente quidem vel aperiam, voluptate ad aut, suscipit labore quod? Cum consequuntur, cupiditate provident beatae doloribus nostrum ipsum nobis vitae adipisci. Culpa, unde.
Debitis, illum placeat aliquam accusantium, vitae, laboriosam quaerat cupiditate corrupti fugit enim doloribus blanditiis sequi ipsum inventore autem consectetur consequuntur. Nihil vel eligendi a harum blanditiis praesentium nesciunt officiis debitis.
Aut, consequuntur iure? Quod, consectetur? Est assumenda explicabo sunt cupiditate dolore animi amet, quae ab magnam nihil porro impedit saepe nostrum vero fuga hic quidem omnis perferendis? Maiores, quo debitis.`
       expect(review(person, message)).toEqual({title: "Повiдомлення",text: "Ваше вiдгук занадто довгий, вiн має бути менше 400 символів", status: false})
    });
});
