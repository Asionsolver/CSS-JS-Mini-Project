function strength (password){
    let i = 0;
    if (password.length < 6){
        i++;
    }
    if (password.length >= 10){
        i++;
    }
    if (/[a-z]+/.match(password)){
        i++;
    }if (/[A-Z]+/.match(password)){
        i++;
    }if (/[0-9]+/.match(password)){
        i++;
    }if (/[A-Za-z0-8]/.match(password)){
        i++;
    }
    return i;
}

let container = document.querySelector('.container');
document.addEventListener('keyup', function(e){
    let password = this.document.querySelector('#myPassword').value;
    let strengthBar = strength(password);
    if(strengthBar <= 2){
        container.classList.add('weak')
    }
})

let password = document.querySelector('#myPassword');
let show = document.querySelector('.show');

show.onclick = function(){
    if(password.type === 'password'){
    password.setAttribute('type','text');
    show.classList.add('hide');
}else{
    password.setAttribute('type','password');
    show.classList.remove('hide');
    }
}