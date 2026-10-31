//selecting element

const userInput = document.getElementById('user-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('tasklist');

//function for adding task

const addTask = () =>{
    const userText = userInput.value.trim();

    //alert if the user enter empty task
    if(userText === ""){
        alert("please Enter a task!")
        return;
    }
    
    //creating <p> and <button> element for list
    const p = document.createElement('p');
    p.innerText = userText;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'X'
    delBtn.classList.add('del-btn')

    p.addEventListener('click',function(){
        p.classList.toggle('completed');
    });

    //deleting task from list
    delBtn.addEventListener('click',function(event){
        event.stopPropagation();
        p.remove();
    });

    //appending task to tasklist
    taskList.appendChild(p);
    p.appendChild(delBtn);

    //empty the input box
    userInput.value = "";
};

addBtn.addEventListener('click',addTask);
    
userInput.addEventListener('keypress',function(event) {
    if(event.key === 'Enter'){
        addTask();
    }
});