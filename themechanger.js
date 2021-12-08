let darkModeButton = document.getElementById('.switchcontainer');
let icone = document.getElementById('header i');

function darkMode(){
    if(localStorage.getItem('darkMode') === null){
        localStorage.setItem('darkMode', 'enabled');
    }
    if(localStorage.getItem('darkMode') === 'enabled'){
        localStorage.setItem('darkMode', 'disabled');
    }else{
        localStorage.setItem('darkMode', 'enabled');
    }
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