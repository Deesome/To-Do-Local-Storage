// Todos
// Get input 
//set them to local storage  for set them first get list from localstorage so that
// it can return null and we can give in optional array so that it can become array
// and push input value to tasks
// then set them to local storage
//make input field clear
//display list on ui 
// get tasks from local stoage and run a loop and set them in li tag
// each li tage contains two button 1.edit 2.delete 
//create edit function
//create delete function


const addButton = document.getElementById("addButtton")


addButton.addEventListener("click",()=>{
    
    const input = document.getElementById("taskname")
    const inputValue = input.value

  let tasks =   JSON.parse(localStorage.getItem("tasks"))|| [] 
  tasks.push(inputValue)
  
  localStorage.setItem("tasks",JSON.stringify(tasks))
  displayTask()
  input.value = ""
})

//   Display list in UI

const taskList = document.getElementById("task-list")

function displayTask(){
    taskList.innerHTML = ""
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
console.log(tasks)

tasks.forEach((task,index) => {
    console.log(task)
    const li = document.createElement("li")
    li.className = "flex justify-between text-xl text-white p-4 rounded-lg bg-blue-900"
    li.innerText=task

    //Button Container
    const buttonContainer = document.createElement("div")
    buttonContainer.className = "flex gap-2 float-right"

    // Edit Button
    const editButton = document.createElement("button")
    editButton.innerText = "edit"
    editButton.className="text-lg py-1 px-2 bg-black border-solid border-black border-2 rounded-lg"
    editButton.addEventListener("click",()=>{
        const newTask = prompt("Edit Task",task)
        if(newTask!="" && newTask!=null){
            tasks[index] = newTask
            localStorage.setItem("tasks",JSON.stringify(tasks))
            displayTask()  // will give performace issues , because whole task list is drawing again , Solution : just change that li

        }

    })
    

    //Delete Button
    const deleteButton = document.createElement("button")
    deleteButton.innerText="delete"
    deleteButton.className="text-lg py-1 px-2 bg-red-500 border-solid border-black border-2 rounded-lg text-white"
    deleteButton.addEventListener("click",()=>{
        tasks.splice(index,1)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        displayTask()

    })

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    li.appendChild(buttonContainer)
    
    taskList.appendChild(li)
    
});
}

document.addEventListener("DOMContentLoaded", displayTask);


//Note : To do on this project edit inline and Dreag and drop for reordering 




