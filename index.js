var screen = document.getElementsByName('screen')[0];
var del = document.querySelector(".del");
var equal = document.querySelector(".equal");
var toggle = document.querySelector(".toggle");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var firstContianer = document.querySelector(".first-container");



equal.addEventListener("click" , function () {
    if(screen.value.length > 1){
        screen.value = eval(screen.value).toString();
    }
})



del.addEventListener("click" , function () {
    if(screen.value.length  === 1){
        screen.value = "";
    }else {
        screen.value = screen.value.substring(0 , screen.value.length-1).toString();
        console.log(typeof screen.value.substring(0 , screen.value.length-1));
    }
})

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



