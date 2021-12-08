let darkModeButton = document.querySelector('.switchcontainer');
let icone = document.querySelector('header .far');

function darkMode(){
    if(localStorage.getItem('darkMode') === null){
        localStorage.setItem('darkMode', 'enabled');
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
    }
    if(localStorage.getItem('darkMode') === 'enabled'){
        localStorage.setItem('darkMode', 'disabled');
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
    }else{
        localStorage.setItem('darkMode', 'enabled');
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
    }
}

if(!localStorage.getItem('darkMode')){
    localStorage.setItem('darkMode', 'disabled');
}

if(localStorage.getItem('darkMode') === 'enabled'){
    icone.classList.add('fa-moon');
}
else if(localStorage.getItem('darkMode') === 'disabled'){
    icone.classList.add('fa-sun');
}
else if(localStorage.getItem('darkMode') === null){
    icone.classList.add('fa-sun');
}

darkModeButton.addEventListener('click', darkMode);