let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', slidenext)
function slidenext(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
}

prev.addEventListener('click', slideprev)
function slideprev(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
}

function autoSliding(){
    deletInterval = setInterval(timer, 5000);
    function timer(){
        slidenext();
        
    }
}
autoSliding();



