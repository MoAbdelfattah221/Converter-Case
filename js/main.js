let textArea = document.querySelector(".textarea");
let lowBtn = document.querySelector(".lower")
let uppBtn = document.querySelector(".upper")
let capBtn = document.querySelector(".capitalize")
let clrBtn = document.querySelector(".clear")

// Focus The Text Area when the window Loading 
window.onload = function(){
    textArea.focus();
}

// Functions
lowBtn.onclick = function(){
    textArea.style.cssText = "text-transform: lowercase;";
}
uppBtn.onclick = function(){
    textArea.style.cssText = "text-transform: uppercase;";
}
capBtn.onclick = function(){
    textArea.style.cssText = "text-transform: capitalize;";
}
clrBtn.onclick = function(){
    textArea.value = "";
}
