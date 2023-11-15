var bar = document.querySelector(".bar");
var menu = document.querySelector(".menu");
var remove = document.querySelector(".remove");
var rocket = document.querySelector(".rocket");
var bitcoin = document.querySelector("#bitcoin");
var ethereum = document.querySelector("#ethereum");
var doge = document.querySelector("#doge");
var btc = document.querySelector(".btc");
var ether = document.querySelector(".ether");
var dog = document.querySelector(".dog");
var contact = document.querySelector(".contact");
var table = document.querySelector(".table");
var ball = document.querySelector("#ball");
var lost  = document.querySelector(".lost");
var word = document.querySelector(".word");


var requestID;
var number = 0;

function animate(){
    requestID = window.requestAnimationFrame(animate);
    number += 1;
    //contact.textContent = number;
if(number >= 1000){
     console.log(number);
     btc.style.margin = "auto";
    ether.style.margin = "auto";
    dog.style.margin = "auto";
    

}

   
}


bar.onclick = function(){
    menu.style.marginLeft = "0px";
     remove.style.marginLeft = "302px"  

}

remove.onclick = function(){
 menu.style.marginLeft  = "-3000px"; 
 remove.style.marginLeft = "300000px"  
}

/*
var scrolled = true;
window.onscroll = function(){ 
    scrolled = !scrolled
    if(scrolled && innerWidth < 700){
 rocket.style.display = "block";

} 
else{
 rocket.style.display = "none";}

 
 var scrollthreashold = 1150;
var scrollY = window.scrollY;

if(scrollY >= scrollthreashold && innerWidth > 700){
    btc.style.marginLeft = "200px";
    ether.style.marginLeft = "200px";
    dog.style.marginLeft = "200px";
    

}



if(scrollY >= scrollthreashold ){

    btc.style.position = "relative";
    ether.style.position = "relative";
    dog.style.position = "relative";
    
    btc.style.marginLeft = "73px";
    ether.style.marginLeft = "73px";
    dog.style.marginLeft = "73px";
    
    console.log("first");

    animate();
    
}

 else if(scrollY < scrollthreashold){
   btc.style.marginLeft = "500000px";   
    ether.style.marginLeft = "-50000px";
    dog.style.marginLeft = "50000px";
    btc.style.position = "fixed";
    ether.style.position = "fixed";
    dog.style.position = "fixed";
   
    
    number = 0;
    window.cancelAnimationFrame(requestID);
 
} ;

};

*/


function copyToClipboard(){
   var text= bitcoin.textContent;

    var textarea = document.createElement("textarea");
    textarea.value = text;
     document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert(text +" Bitcoin address copied to clipboard");
}

function copyToClipboardeth(){
    /*var textToCopy = document.getElementById("textToCopy");*/
   var text= ethereum.textContent;

    var textarea = document.createElement("textarea");
    textarea.value = text;
     document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert(text +" Ethereum address copied to clipboard");
}



function copyToClipboardoge(){
    var text= doge.textContent;

    var textarea = document.createElement("textarea");
    textarea.value = text;
     document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert(text +" Dogecoin address copied to clipboard");
}

ball.addEventListener('click', ()=>{
lost.style.display = "block";
lost.style.width = "350px";
lost.style.margin = "auto";
word.style.display = "block";
ball.style.color = "white";
})


lost.addEventListener('click', ()=>{
    lost.style.display = "none";
    word.style.display = "none";
    ball.style.color = "green";
})


