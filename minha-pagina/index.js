let button = document.getElementById('button');
let texts = document.getElementsByClassName('title-red');

button.addEventListener('click', function() {
        for (let index = 0; index < texts.length; index++) {
        
                const currentElement = texts[index];
                const tagName = currentElement.tagName; 
        
        if (tagName === 'H3') {
            currentElement.textContent = "Esse texto é um H3";
        } 
        
                else if (tagName === 'H1') {
            currentElement.textContent = "Esse texto é um H1";
            currentElement.style.color = "purple";
        } 
        
        else {
            currentElement.textContent = "Texto alterado pelo JS";
            
        }
    }
});



//let button = document.getElementById(button)
//let text = document.getElementById('text-green')

//button.addEventListener('click', function() {
//    text.textContent = 'Texto alterado via JavaScript!'
//})

//document.getElementsByClassName('title-red')[0].textContent = 'novo texto via JavaScript!'

//document.getElementById('text-yellow').textContent = 'Texto alterado via JavaScript!'

// let text = document.getElementById('text-green').textContent

//console.log(text)