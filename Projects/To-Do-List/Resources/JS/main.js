


// USER clicked on the add button
// If there is any text in item field, add text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
        if (value) {
            addItemToDo(value);
            document.getElementById('item').value = '';
        }
});

// REMOVING ITEMS AND COMPLETING ITEMS

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);

}

function completeItem() {
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;
   console.log(parent);
   var id = parent.id;
   console.log(id);
   //Check if item should be added to completed or readded to the todo list
   var target = (id==='todo') ? document.getElementById('complete'):document.getElementById('todo');
   parent.removeChild(item);
   target.appendChild(item, target.childNodes[0]);
}   



// ADD NEW ITEM TO THE LIST
function addItemToDo(text) {

    //CREATING LIST ITEMS AND SETTING ATTRIBUTES
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    
    // Add click event for removing item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');

    // Add click event for completing items
    complete.addEventListener('click', completeItem);

//       Creating ICON Objects and setting Attributes
    var checkIcon = document.createElement('ion-icon');
    checkIcon.setAttribute('id','to-complete');
    checkIcon.setAttribute('name','checkmark-circle-outline');

    


    var garbageIcon = document.createElement('ion-icon');
    garbageIcon.setAttribute('id', 'remove');
    garbageIcon.setAttribute('name', 'trash-outline');

    //Appending icons to the list element
    complete.appendChild(checkIcon);
    remove.appendChild(garbageIcon);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}



/*
function completeItem() {
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;
   var id = parent.id;
   //Check if item should be added to completed or readded to the todo list
   var target = (id==='todo') ? document.getElementById('completed'):document.getElementById('todo');
   parent.removeChild(item);
   target.insertBefore(item, target.childNodes[0]);
}   

*/