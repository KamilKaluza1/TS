const taskContainer: HTMLElement = document.querySelector(".tasks");
const taskNameInput: HTMLInputElement = document.querySelector("#name");
const addButton: HTMLButtonElement = document.querySelector("button");
const categoriesContainer: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category;
type Category = "general" | "work" | "hobby" | "gym";

const categories: Category[] = ["general", "work", "hobby", "gym"];

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}


const tasks: Task[] = [
  {
    name: "Trow out trash",
    done: false,
    category: "general",
  },
  {
    name: "Feed a Pitek",
    done: false,
    category: "general",
  },
  {
    name: "Go to gym",
    done: true,
    category: "gym",
  },
];

const renderCategories = () => {
  categories.forEach((category: Category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioElement: HTMLInputElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "category";
    radioElement.id = `id-${category}`;
    radioElement.value = category;
    radioElement.addEventListener(
      "change",
      () => (selectedCategory = category)
    );
    const label: HTMLLabelElement = document.createElement("label");
    label.setAttribute("for", `category-${category}`);
    label.innerText = category;

    categoriesContainer.appendChild(categoryElement);
    categoryElement.appendChild(radioElement);
    categoryElement.appendChild(label);
  });
};

const renderTasks = () => {
  taskContainer.innerHTML = "";
  tasks.forEach((task, index) => {
      const taskElement: HTMLElement = document.createElement("li");
      taskElement.classList.add(task.category)
      const id: string = `task-${index}`;

      const labelElement: HTMLLabelElement = document.createElement("label");
      labelElement.innerText = task.name;
      labelElement.setAttribute("for", id);

      const checkboxElement: HTMLInputElement = document.createElement("input");
      checkboxElement.type = "checkbox";
      checkboxElement.name = task.name;
      checkboxElement.id = id;
      checkboxElement.checked = task.done;
      checkboxElement.addEventListener("change", () => task.done = !task.done);

      taskElement.appendChild(labelElement);
      taskElement.appendChild(checkboxElement);
      taskContainer.appendChild(taskElement);

  });

};



addButton.addEventListener("click", (e)=>{
  taskContainer.innerHTML ='';
  e.preventDefault();
  tasks.push({
      name: taskNameInput.value,
      done: false,
      category: selectedCategory,
  })
  renderTasks()
})


renderCategories();
renderTasks();
