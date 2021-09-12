let calculator = document.getElementById("calculator");
let clear = document.getElementById("clear");
let words;
let cancel = document.getElementById("cancel");
let operation;
let numbers = document.getElementsByClassName("numbers");
let body = document.body;
let num1 = document.getElementById("num1");
let display = document.getElementById("display");
display.innerHTML = "";
let opStar = document.getElementById("opStar");
let opEqual = document.getElementById("opEqual");
let num2 = document.getElementById("num2");
if (innerWidth>innerHeight){
    calculator.setAttribute("style",`width: ${innerHeight * 25/100}px;height: ${innerHeight * 50/100}px;`);
}
else {
    if (innerHight==innerWidth){
        calculator.setAttribute("style",`width: ${innerHeight * 25/100}px;height: ${innerHeight * 50/100}px;`);
    }
    else {
        calculator.setAttribute("style",`width: ${innerWidth * 25/100}px;height: ${innerWidth * 50/100}px;`);
    }
}
num1.addEventListener("click",()=>{
    display.innerHTML = display.innerHTML+num1.innerHTML;
    
});
num2.addEventListener("click",()=>{
    display.innerHTML = display.innerHTML+num2.innerHTML;
    
});
opStar.addEventListener("click",()=>{
    display.innerHTML = display.innerHTML+opStar.innerHTML;
    
    
});
opEqual.addEventListener("click",()=>{
operation = eval(display.innerHTML);
display.innerHTML = operation;
});
let i = 0;
clear.addEventListener("click",()=>{
    words = Array.from(display.innerHTML);
    words.pop();
    words = words.toString(words);
    i = 0;
    while(i<=words.length){
        words = words.replace(",","");
        i++;
    }
    display.innerHTML = words;
});
cancel.addEventListener("click",()=>{
    display.innerHTML = "";
})