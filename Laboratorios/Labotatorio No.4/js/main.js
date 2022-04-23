(() => {

    'use strict';

    const containerCards = document.querySelector('#containerCards'),
        form = document.querySelector('#form'),
        inputNum = document.querySelector('#inputNum'),
        divException = document.querySelector('#exception'),
        sectionForm = document.querySelector('#sectionForm')

    const fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)


    const templateStr = (st = []) => {

        let template = '';

        for (const i of st) {
            template += `<div id="divCard" class="card"><h3>Fibonacci</h3><div class="container"><h4><b>${i}</b></h4></div></div>`
        }

        return template;

    }

    const formSubmitHandler = (e) => {

        e.preventDefault();
        divException.innerHTML = ''


        let num = inputNum.value;

        if (num <= 1) {

            divException.innerHTML = `<small class = "err";">El número debe ser mayor a uno</small>`
        } else {

            divException.innerHTML = ''

            let stack = [];

            for (let i = 0; i < num; i++) {

                stack.push(fibonacci(i))
            }

            containerCards.innerHTML = templateStr(stack);
        }



    }

    const childClickHandler = (e) => {

        const child = e.target
        let res = confirm('¿Está seguro de que desea eliminarlo?')

        if (res) {
            containerCards.removeChild(child.parentNode)
        }

    }
    form.addEventListener('submit', formSubmitHandler)
    
    containerCards.addEventListener('click', childClickHandler)


})();

