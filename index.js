function addTodo(event){
    event.preventDefault();
    let list = document.querySelector('ul');
    let item = document.createElement('li');
    let text = document.getElementById('item').value;


    //// value is an attribute in HTML 
    //// .value returns the value inside the form element

    item.innerText = text;
    
    //// sets the value of the innertext to be the value of whatever is in the form

    item.addEventListener('click', toggleTodo)
    

    //// the code below creates a delete button, adds an event listener to it and appending it to the item
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "x";
    deleteButton.addEventListener('click', removeToDo);
    item.appendChild(deleteButton);

    //// deleteButton is a child of the list item


    list.appendChild(item);
    document.getElementById('item').value='';

}


function removeToDo(event){
    let value = event.target.getAttribute('aria-checked')
    let aside = document.getElementById('completed-message');
    if (value !== "true"){
        let aside = document.getElementById('completed-message');
        aside.setAttribute('id','completed-message')
        event.target.parentNode.remove();
    } else {
        let aside = document.getElementById('completed-message');
        aside.setAttribute('id','vis');
        setTimeout(function(){
            let aside = document.getElementById('vis');
            aside.setAttribute('id','completed-message')
            event.target.remove();
            }, 2000);

    }
    //// .remove() is a method (that takes no params) that removes the selected element
}



//// REMOVETODO FUNCTION IS A BIT BUGGY, WILL FIX WHEN TIME IS RIGHT




function toggleTodo(event){
    let value = event.target.getAttribute('aria-checked')
    //// the line above returns if aria-checked is true or false
    //// aria-checked = "" <---- is a falsy value
    if (value !== "true"){
        event.target.setAttribute('aria-checked', 'true');
        removeToDo(event);
        

    } else if (value !== 'false'){
        event.target.setAttribute('aria-checked', 'false')

    }
}




document.querySelector('button')
        .addEventListener('click', addTodo);
