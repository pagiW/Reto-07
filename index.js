const cards = document.getElementsByClassName('card');
const darkmode = document.getElementById('state');
const circulo = document.getElementById('circle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const button = document.getElementById('button');
const n = document.getElementsByClassName('n');
const h1 = document.querySelectorAll('h1');
const numbers = document.getElementsByClassName('number');
const dm = document.getElementById('dark-m');
const overview = document.getElementById('overview');
const title = document.getElementById('title');
let state = 'light';
let circle = 0;

for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.tabIndex = i + 1;
}

darkmode.onclick = () => {

    if (circle === 0) {
        circulo.classList.add('cd');
        circulo.classList.remove('cl');
        circle = 1;
    } else {
        circulo.classList.add('cl');
        circulo.classList.remove('cd');
        circle = 0;
    }
    if (state === 'light') {
        dm.style.color = "white";
        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];
            element.style.backgroundColor = "hsl(228, 28%, 20%)";
            element.onmouseover = () => {
                element.style.backgroundColor = "hsl(228, 12%, 44%)";
            }
            element.onmouseout = () => {
                element.style.backgroundColor = "hsl(228, 28%, 20%)";
            }
        }
        for (let i = 0; i < n.length; i++) {
            const element = n[i];
            element.style.color = "white";
        }
        for (let i = 0; i < h1.length; i++) {
            const element = h1[i];
            element.style.color = "white";
        }
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            element.style.color = "white";
        }
        button.onmouseout = () => {
            button.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        }
        button.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        body.style.color = "hsl(228, 34%, 66%)";
        body.style.backgroundColor = "hsl(230, 17%, 14%)";
        circulo.style.backgroundColor = "hsl(232, 19%, 15%)";
        overview.style.color = "white";
        title.style.borderBottomColor = "hsl(228, 34%, 66%)";
        state = 'dark';
    } else {
        dm.style.color = "hsl(230, 22%, 74%)";
        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];
            element.style.backgroundColor = "hsl(227, 47%, 96%)";
            element.onmouseover = () => {
                element.style.backgroundColor = "hsl(230, 22%, 74%)";
            }
            element.onmouseout = () => {
                element.style.backgroundColor = "hsl(227, 47%, 96%)";
            }
        }
        for (let i = 0; i < n.length; i++) {
            const element = n[i];
            element.style.color = "hsl(230, 17%, 14%)";
        }
        for (let i = 0; i < h1.length; i++) {
            const element = h1[i];
            element.style.color = "hsl(230, 17%, 14%)";
        }
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            element.style.color = "hsl(230, 17%, 14%)";
        }
        button.onmouseover = () => {
            button.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        }
        button.onmouseout = () => {
            button.style.background = 'hsl(230, 22%, 74%)';
        }
        button.style.background = 'hsl(230, 22%, 74%)';
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        body.style.backgroundColor = "white";
        body.style.color = "hsl(228, 12%, 44%)";
        overview.style.color = "hsl(228, 12%, 44%)";
        circulo.style.backgroundColor = "hsl(225, 100%, 98%)";
        title.style.borderBottomColor = "black";
        state = 'light';
    }
}
