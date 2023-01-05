const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasks: {
  name: string;
  done: boolean;
}[] = [
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
  tasks.forEach(({name, done}, index) => {

    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = name;
    taskContainerElement.appendChild(taskElement);
    const id: string = 


  });
};

render();

addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  addTask(taskNameInputElement.value);
  render();
  taskNameInputElement.value = "";
});

const addTask = (name: string) => {
  tasks.push({name: });
};
