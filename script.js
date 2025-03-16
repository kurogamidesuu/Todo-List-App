const todoList = [];
renderList()

function addItem() {
    const itemInput = document.querySelector('.js-input-item');
    const item = itemInput.value;
    const dateInput = document.querySelector('.js-input-date');
    const date = dateInput.value;
    if(item === '') {
        alert("Enter a task!");
        return;
    }
    if(date === '') {
        alert("Enter a date!");
        return;
    }
    todoList.push({
        item,
        date
    });
    itemInput.value = '';
    renderList();
}

function renderList() {
    if(!todoList.length) {
        document.querySelector('.js-list').innerHTML = `<div class="empty-list">"Your list is empty! Start adding tasks. 🚀"</div>`;
        return;
    }
    let HTMLstring = '';
    for(let i=0; i<todoList.length; i++) {
        const listObject = todoList[i];
        const {item, date} = listObject;
        HTMLstring += `
        <div class="entry">
            <div>${item}</div>
            <div>${date}</div>
            <div>
                <button onclick="swapUp(${i})" class="swap-btn">▲</button>
                <button onclick="swapDown(${i})" class="swap-btn">▼</button>
            </div>
            <button onclick="removeItem(${i})" class="delete-btn">Delete</button>
        </div>    
        `;
    }
    document.querySelector('.js-list').innerHTML = HTMLstring;
}

function removeItem(index) {
    todoList.splice(index, 1);
    renderList();
}

function swapUp(index) {
    if(index === 0) {
        alert("First Element can't be swapped up!");
        return;
    }
    const temp = todoList[index];
    todoList[index] = todoList[index - 1];
    todoList[index-1] = temp;
    renderList();
}

function swapDown(index) {
    if(index === todoList.length-1) {
        alert("Last Element can't be swapped down!");
        return;
    }
    const temp = todoList[index];
    todoList[index] = todoList[index + 1];
    todoList[index+1] = temp;
    renderList();
}