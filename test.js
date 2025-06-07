const buttons = document.querySelectorAll(`.button`);

const body = document.querySelector("body");
const canvas = document.querySelector(".canvas");

function colorChange(color){
    // body.style.backgroundColor = color;
    canvas.style.backgroundColor = color;
}

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        console.log(e.target);
        
        colorChange(e.target.id)
    })
    
})