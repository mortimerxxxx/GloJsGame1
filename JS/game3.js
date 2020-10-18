'use strict';


const game = function () {
    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    let tryNumber = 10;

    function repeat() {
        let randomNumber = parseInt(Math.random() * 101);
        let userNumber = prompt('Введите значение число');
        let question = function () {
            return confirm('Попытки закончились! Хотите поробовать еще?');
        };
        if (tryNumber > 1) {
            if (userNumber === null) {
                alert('Игра окончена');
            } else if (+userNumber > randomNumber) { //scope Closure
                alert('Ваше число больше');
                tryNumber--;
                console.log(tryNumber);
                return repeat();
            } else if (+userNumber < randomNumber) {
                alert('Ваше число Меньше');
                tryNumber--;
                console.log(tryNumber);
                return repeat();
            } else if (!isNumber(userNumber)) {
                alert('Введи число');
                return repeat();
            } else if (+userNumber === randomNumber) {
                alert('Вы угадали!');
                let userNumberTwo = confirm('Поиграем еще?');
                if (userNumberTwo === true) {
                    game();
                } else {
                    alert('Игра окончена');
                }
            } else if (tryNumber === 1 && +userNumber > randomNumber) {
                alert('Загаданное число меньше');
                if (question() === false) {
                    alert('Игра окончена');
                } else {
                    game();
                }
            } else if (tryNumber === 1 && +userNumber < randomNumber) {
                alert('Загаданное число меньше');
                if (question() === false) {
                    alert('Игра окончена');
                } else {
                    game();
                }
            }
        }
    }
    repeat();
};
game();
