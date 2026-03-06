let display = document.getElementById("display");

function append(value){

display.value += value;

}

function clearDisplay(){

display.value = "";

}

function deleteLast(){

display.value = display.value.slice(0,-1);

}

function calculate(){

try{

if(display.value.includes("/0")){
display.value = "Error";
return;
}

display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}