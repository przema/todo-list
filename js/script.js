{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();

    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-list__button--remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-list__button--done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
        
        <div class="list">
          <button class="list__button${task.done ? " list__button--done" : ""} js-list__button--done"></button>
          <li 
            class="list__item${task.done ? " list__item--done" : ""}
            >
          <span class="list__item">${task.content}</span>
          </li>
          <button class="list__button--remove js-list__button--remove"><img src="images/trash-bin.png" width="25px" height="25px"></button>
        </div>
        <hr>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();


        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        const clearValue = document.querySelector(".js-newTask");
        clearValue.value = "";
        clearValue.focus();
    };




    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();


}

