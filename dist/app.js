const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasks = [
    {
        name: "Trow out trash",
        done: false,
    },
    {
        name: "Feed a cat",
        done: false,
    },
    {
        name: "Go to gym",
        done: true,
    },
];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach(({ name, done }, index) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = name;
        taskContainerElement.appendChild(taskElement);
        const id = ;
    });
};
render();
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
    taskNameInputElement.value = "";
});
const addTask = (name) => {
    tasks.push({ name:  });
};
