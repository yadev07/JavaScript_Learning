let task = document.getElementById('task');
let category = document.getElementById('category');
let date = document.getElementById('date');
let addBtn = document.getElementById('add-btn');
let s1 = document.getElementById('s1');


addBtn.onclick = function(){
    taskData = task.value;
    categoryData = category.value;
    taskDate = date.value;
    toAdd = "<div class='task-to-do'><h2 class='taskName'>"+taskData+"</h2><p>Category: "+categoryData+"</p><p>Date: "+taskDate+"</p></div>";
    s1.innerHTML += toAdd;
}


