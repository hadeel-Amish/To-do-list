//setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
// let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksComleted = document.querySelector(".tasks-completed span");

//foucs on input
window.onload = function () {
  theInput.focus();
};
//adding the task
theAddButton.onclick = function () {
  //if input is empty
  if (theInput.value === "") {
    console.log("no value");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    // check if span with no tasks message is exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // Remove no tasks message
      noTasksMsg.remove();
    }
    // create main span element
    let mainSpan = document.createElement("span");
    // create delete button
    let deleteElement = document.createElement("span");
    // create the main span text
    let text = document.createTextNode(theInput.value);
    //create the delete button text
    let deleteText = document.createTextNode("Delete");
    // add text to main span
    mainSpan.appendChild(text);
    // add class to main span
    mainSpan.className = "task-box";
    // add text tp delete button
    deleteElement.appendChild(deleteText);
    // add class to delete button
    deleteElement.className = "delete";
    // add delete button to main span
    mainSpan.appendChild(deleteElement);
    // add the task to the container
    tasksContainer.appendChild(mainSpan);
    // empty the input
    theInput.value = "";
    //foucs on field
    theInput.focus();
    // calculate tasks
    calculateTasks();
  }
};
// document obiect model طريقة
document.addEventListener("click", function (e) {
  // delete task
  if (e.target.className == "delete") {
    // remove current task    //jqury:perantNode
    e.target.parentNode.remove();
    // check number of tasks inside the container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  // finish task
  if (e.target.classList.contains("task-box")) {
    // toggle class 'finished'
    e.target.classList.toggle("finished");
  }
  // calculate tasks
  calculateTasks();
});
// function to create no tasks message
function createNoTasks() {
  // create message span element
  let msgSpan = document.createElement("span");
  // create the task message
  let msgText = document.createTextNode("no tasks to show");
  // add text to message span element
  msgSpan.appendChild(msgText);
  // add class to message span
  msgSpan.className = "no-tasks-message";
  tasksContainer.appendChild(msgSpan);
}
// function to calculate tasks
function calculateTasks() {
  //calculate all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  //calculate complete tasks
  tasksComleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
