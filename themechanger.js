let head = document.querySelector('head');
let buttons = document.querySelectorAll('.grid-container button');

head.innerHTML += `<link class="switchcolor" href="#" rel="stylesheet">`;

/*for(i of buttons){
    i.addEventListener('click', () => {
        let link = document.querySelector('.switchcolor');
        let color = i.getAttribute('data-color');
        console.log(color);
        link.setAttribute('href', `https://starter.lvl1.fr/themeCssColor/${color}.css`);
    })
}*/

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let link = document.querySelector('.switchcolor');
        let color = button.getAttribute('data-color');
        console.log(color);
        link.setAttribute('href', `https://starter.lvl1.fr/themeCssColor/${color}.css`);
    })
})