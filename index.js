var screen = document.getElementsByName('screen')[0];
var firstContianer = document.querySelector(".first-container");
var toggle = document.querySelector(".toggle");
var equal = document.querySelector(".equal");
var del = document.querySelector(".del");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var button1 = document.querySelector(".button-1");

document.addEventListener("keydown" , function({key}) {
    switch(key){
        case "1" : 
            screen.value += key;
        break;

        case "2" : 
            screen.value += key;
        break;
        case "3" :
            screen.value += key;
        break;
        case "4" :
            screen.value +=key;
        break;
        case "5" :
            screen.value +=key;
        break;
        case "6" :
            screen.value +=key;
        break;
        case "7" :
            screen.value +=key;
        break;
        case "8" :
            screen.value +=key;
        break;
        case "9" :
            screen.value +=key;
        break;
        case "0" :
            screen.value +=key;
        break;
        case "Delete" :
            deleteLetter();
        break;

        case "=" :
            evaluate();
        break;

        case "+" :
            screen.value +=key;
        break;
        case "-" :
            screen.value +=key;
        break;
        case "/" :
            screen.value +=key;
        break;
        case "*" :
            screen.value +=key;
        break;
        case "." :
            screen.value +=key;
        break;
        case "Escape" :
            screen.value ="";
        break;
    }
})

equal.addEventListener("click" , evaluate)

function evaluate() {
    if(screen.value.length > 1){
        screen.value = eval(screen.value).toString();
    }
}



del.addEventListener("click" , deleteLetter)

function deleteLetter() {
    if(screen.value.length  === 1){
        screen.value = "";
    }else {
        screen.value = screen.value.substring(0 , screen.value.length-1).toString();
        console.log(typeof screen.value.substring(0 , screen.value.length-1));
    }
}

one.addEventListener("click" , function(){
    toggle.style.left = "7px"
    document.body.classList.remove("theme2");
    document.body.classList.remove("theme3")
    
    
})

two.addEventListener("click" , function () {
    toggle.style.left = "25px"
    document.body.classList.remove("theme3");
    document.body.classList.add("theme2");
    

})

three.addEventListener("click" , function(){
    toggle.style.left = "50px";
    document.body.classList.remove("theme2")
    document.body.classList.add("theme3");

})
