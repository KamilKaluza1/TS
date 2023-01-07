const taskContainer: HTMLElement = document.querySelector(".tasks");
const taskNameInput: HTMLInputElement = document.querySelector("#name");
const addButton: HTMLButtonElement = document.querySelector("button");
const categoriesContainer = document.querySelector(".categories");
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
  tasks.forEach(({ name, done, category  }, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.classList.add(category);


    const label: HTMLLabelElement = document.createElement("label");
    label.setAttribute("for", `task-${index}`);
    label.innerText = name;

    const input: HTMLInputElement = document.createElement("input");
    input.type = "checkbox";
    input.name = name;
    input.id = `task-${index}`;
    input.checked = done
    input.addEventListener("change", () => {done = !done})

    taskElement.appendChild(label)
    taskElement.appendChild(input)
    taskContainer.appendChild(taskElement)
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
