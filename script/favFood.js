function add() {
  let inputBox = document.getElementById("task");
  let taskText = inputBox.value;

  if (taskText === "") {
    alert("Please Enter Your Food !!!");
    return;
  }

  let sub_list = document.createElement("li");

  let text = document.createElement("span");
  text.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.id='del-btn';
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    sub_list.remove();
  };  

  let editBtn = document.createElement("button");
   editBtn.id='edit-btn';
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    let input = document.createElement("input");
    input.id='saveinp';
    input.type = "text";
    input.value = text.textContent;

    let saveBtn = document.createElement("button");
      saveBtn.id='save-btn';
    saveBtn.textContent = "Update";
    saveBtn.onclick = function () {
      if (input.value === "") {
        alert("Text cannot be empty!");
        return;
      }
      text.textContent = input.value;
      sub_list.replaceChild(text, input);
      sub_list.replaceChild(editBtn, saveBtn);
    };
    sub_list.replaceChild(input, text);
    sub_list.replaceChild(saveBtn, editBtn);
  };
  document.getElementById("list")
  list.appendChild(sub_list);
  sub_list.appendChild(text);
  sub_list.appendChild(editBtn);
  sub_list.appendChild(delBtn); 
  inputBox.value = "";
}
