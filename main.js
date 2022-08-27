let input = document.querySelector('#input');
let list = document.querySelector('#list');
let errorText = document.querySelector('#error-text');
let count = document.querySelector('#count-task');
let i = 1; 
var x= 0;

function filterText(text) {
    if(text) {
        if(text.length > 0) {
            return text;
        } 
    }
    errorText.innerHTML = 'Input cannot be empty.';
    return false;
}

function showList(input) {
    list.innerHTML += 
        `<li class="list-item" id="list${i}">
            <div class="list-item-wrapper">
                <div class="list-text">
                    <span id="list-text${i}">${input}</span>
                    
                </div>
                <div id="action-btn">
                    <i class="" onclick="deleteList(${i})">
                        <i class="fa-regular fa-trash-alt"></i>
                    </i>
                </div>
            </div>
        </li>`;
    i++;
}

function addList() {
    let inputText = input.value;

    if(filterText(inputText)) {
        showList(filterText(inputText));
        
        input.value = '';
        errorText.innerHTML = '';
        count.innerHTML = ++x ;
    }
}

function deleteList(id) {
    let deleteList = document.getElementById(`list${id}`);
    list.removeChild(deleteList);
    count.innerHTML =  --x ;
}

