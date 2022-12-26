window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks");

    //stops from refreshing page
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const task = input.value;
        if(task === ""){
            alert("Please enter something");
        }
        const tasklist = document.createElement("div");
        tasklist.classList.add("task");

        const taskcontent = document.createElement("div");
        taskcontent.classList.add("content");

        tasklist.appendChild(taskcontent);

        const taskinput = document.createElement("input");
        taskinput.classList.add("text");
        taskinput.value = task;
        taskinput.type = "text";
        taskinput.setAttribute("readonly", "readonly");

        taskcontent.appendChild(taskinput);

        const taskactions = document.createElement("div");
        taskactions.classList.add("actions");

        const taskedit = document.createElement("button");
        taskedit.classList.add("edit");
        taskedit.innerHTML = "Edit";

        const taskdelete = document.createElement("button");
        taskdelete.classList.add("delete");
        taskdelete.innerHTML = "Delete";

        taskactions.appendChild(taskedit);
        taskactions.appendChild(taskdelete);
        
        tasklist.appendChild(taskactions);

        list.appendChild(tasklist);

        input.value = "";

        taskedit.addEventListener("click", () => {
            if(taskedit.innerText.toLowerCase() == "edit"){
                taskinput.removeAttribute("readonly");
                taskinput.focus();
                taskedit.innerText = "Save";
            } else {
                taskinput.setAttribute("readonly", "readonly");
                taskedit.innerText = "Edit";
            }
        });

        taskdelete.addEventListener("click", () => {
            list.removeChild(tasklist);
        });
    })

})