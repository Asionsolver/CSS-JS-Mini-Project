var isStatus = document.querySelector("h5");
var buttons = document.querySelector("#add");

var value = 0;

buttons.addEventListener("click", function(){
    if(value == 0){
        isStatus.innerHTML = "Friend";
        isStatus.style.color = "green";
        buttons.style.backgroundColor = "green";
        buttons.innerHTML = "Remove";
        value = 1;
    }
    else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "rgb(189, 43, 226)";
        buttons.innerHTML = "Add Friend";
        buttons.style.backgroundColor = "rgb(189, 43, 226)";
        value = 0;
    }
});
