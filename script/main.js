const userInputData = document.querySelector("#todoInput");
const dataLogList = [];
let addData = document.querySelector("#todoButton");

//ADD TODO
addData.addEventListener('click', function () {
    if (userInputData.value == '' || userInputData.value.trim() == '') {
        alert("Please add task");
        return;
      }
      else {
        for (let i = 0; i < dataLogList.length; i++) {
          if (dataLogList[i] == userInputData.value.trim()) {
            userInputData.value = '';
            alert("Repeated task");
            return;
          }
        } }
        dataLogList.push(userInputData.value.trim());
    
        document.getElementById('todoListContainer').innerHTML+=`<ul class="newTodo" id="task">
        <li>${userInputData.value}</li>
        
        <button class="finishButton" type="submit">Finished</button>
        <button class="deleteButton" type="submit">Delete</button>
        

    </ul>`;

//DELETE TODO
var deleteIcons = document.querySelectorAll('.deleteButton');
var checkIcons = document.querySelectorAll('.finishButton');

for (let i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].addEventListener('click', function () {
        dataLogList.splice(i, 1);
        this.parentNode.remove();
      })
    }
for (let i = 0; i < checkIcons.length; i++) {
      checkIcons[i].addEventListener('click', function () {
        const a = checkIcons[i].parentElement;
        a.firstElementChild.classList.add("textUnderline");
      })
    }
userInputData.value = '';
  
} )

//All Button
var All = document.getElementById('All');
All.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].classList.remove("notVisible");
  }
})

//Incomplete Button
var Incomplete = document.getElementById('Incomplete');
Incomplete.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    console.log(newTodo[i]);
    if (newTodo[i].firstElementChild.classList.contains("textUnderline")) {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");
  }
})

//Complete Button
var Complete = document.getElementById('Complete');
Complete.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    if (!newTodo[i].firstElementChild.classList.contains("textUnderline")) {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");
  }
})



