const input = document.querySelector('.to-do-input');
const button = document.querySelector('.to-do-button');
const list = document.querySelector('.list');
const listElement = document.querySelector('.list-element');

button.addEventListener('click', function(){
    const newelement = document.createElement('DIV');
    const inputValue = document.createTextNode(input.value);
    console.log(inputValue);
    newelement.appendChild(inputValue);
    list.appendChild(newelement);
    newelement.classList.add('list-element');

    newelement.addEventListener('click', function(){
        newelement.remove();
    });
});