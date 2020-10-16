'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
    let randomNumber = parseInt(Math.random() * 101);  
    return function repeat() {
        //randomNumber - является замыканием функции
        let userNumber = prompt('Введите значение число');

        /*Если для userNumber присвоить +prompt, то сравнение при отмене (userNumber === null)
        не будет отыгрываться и следовательно программа не будет работать корректрно */ 

        // провереям введено число или строка
        if(isNumber(userNumber)) { //если число, то выполняем код с 13 по 25 строку
            // приводим userNumber к числу
            if (+userNumber > randomNumber) { //scope Closure
                alert('Ваше число больше');
                return repeat();
            // приводим userNumber к числу
            } else if (+userNumber < randomNumber){
                alert('Ваше число Меньше');
                return repeat();
            } else {
                if (confirm('Вы угадали! Сыграем еще?')) {
                    game()();
                }else {
                    alert('Вы завершили игру');
                }
            }
        } else if (userNumber === null) { //если нажата отмена - завершаем игру
            alert('Вы завершили игру');
        } else {
            return repeat(); //если введено число запускаем игру повторно
        }
        
    };
    
};
console.dir(game());
game()(); 
/*первый возов функции запускает саму функцию game, второй вызов позволяет войти
внутрь функции и отработать описанные условия (запустится функция repeat)*/