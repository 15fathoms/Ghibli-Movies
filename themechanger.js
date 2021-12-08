let darkModeButton = document.querySelector('.switchcontainer');
let icone = document.querySelector('header .far');

function darkMode(){
    if(localStorage.getItem('darkMode') === null){
        localStorage.setItem('darkMode', 'enabled');
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
        document.body.classList.add('dark');
    }
    if(localStorage.getItem('darkMode') === 'enabled'){
        localStorage.setItem('darkMode', 'disabled');
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
        document.body.classList.remove('dark');
    }else{
        localStorage.setItem('darkMode', 'enabled');
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
        document.body.classList.add('dark');
    }
}

if(!localStorage.getItem('darkMode')){
    localStorage.setItem('darkMode', 'disabled');
}
if(localStorage.getItem('darkMode') === 'enabled'){
    icone.classList.add('fa-moon');
    if(!document.body.classList.contains('dark')){
        document.body.classList.add('dark');
    }
}
else if(localStorage.getItem('darkMode') === 'disabled'){
    icone.classList.add('fa-sun');
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    }
}
else if(localStorage.getItem('darkMode') === null){
    icone.classList.add('fa-sun');
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    }
}

darkModeButton.addEventListener('click', darkMode);