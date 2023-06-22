var btn=document.querySelectorAll(".drum")
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        var key=this.innerHTML;
        
        makeSomeNoise(key);
        makeItAnimate(key);
        
    });
}
document.addEventListener("keypress",function(event){
    
    makeSomeNoise(event['key']);
    makeItAnimate(event.key);
});
function makeSomeNoise(box){
    switch(box){
        case 'a': 

        (new Audio("./sounds/tom-2.mp3")).play();
        break;
        case 'w': (new Audio("./sounds/tom-1.mp3")).play();
        break;
        case 's': (new Audio("./sounds/tom-3.mp3")).play();
        break;
        case 'd': (new Audio("./sounds/tom-4.mp3")).play();
        break;
        case 'j': (new Audio("./sounds/crash.mp3")).play();
        break;
        case 'k': (new Audio("./sounds/kick-bass.mp3")).play();
        break;
        case 'l': (new Audio("./sounds/snare.mp3")).play();
        break;
    }
}

function makeItAnimate(word){
    var c=document.querySelector("."+word).classList;
    c.add("pressed");
    setTimeout(() => {
        c.toggle("pressed");
    }, 100);
}