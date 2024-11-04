var Menuitens = document.getElementById("Menuitens");

Menuitens.style.maxHeight = "0px";

function menucelular(){
    if(Menuitens.style.maxHeight == "0px"){
        Menuitens.style.maxHeight = "200px";
    }else{
        Menuitens.style.maxHeight = "0px";
    }
}