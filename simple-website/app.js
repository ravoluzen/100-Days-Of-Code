'use strict'
const toggler = document.querySelector('.toggle');

toggler.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = documnet.body.className;
    if(className == 'light-theme'){
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
});