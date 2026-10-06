function addTask(){
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if(task==="") return;
  let li = document.createElement("li");
  li.innerHTML = task + ' <span onclick="this.parentElement.remove()" style="color:red; cursor:pointer"> X</span>';
  document.getElementById("taskList").appendChild(li);
  input.value="";
}
