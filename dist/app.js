const taskContainer = document.querySelector(".tasks");
const taskNameInput = document.querySelector("#name");
const addButton = document.querySelector("button");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "hobby", "gym"];
const tasks = [
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
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "category";
        radioElement.id = `id-${category}`;
        radioElement.value = category;
        radioElement.addEventListener("change", () => (selectedCategory = category));
        const label = document.createElement("label");
        label.setAttribute("for", `category-${category}`);
        label.innerText = category;
        categoriesContainer.appendChild(categoryElement);
        categoryElement.appendChild(radioElement);
        categoryElement.appendChild(label);
    });
};
const renderTasks = () => {
    tasks.forEach(({ name, done, category }, index) => {
        const taskElement = document.createElement("li");
        taskElement.classList.add(category);
        const label = document.createElement("label");
        label.setAttribute("for", `task-${index}`);
        label.innerText = name;
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        input.id = `task-${index}`;
        input.addEventListener("change", () => { done = !done; });
        input.checked = done;
        taskElement.appendChild(label);
        taskElement.appendChild(input);
        taskContainer.appendChild(taskElement);
    });
};
addButton.addEventListener("click", (e) => {
    taskContainer.innerHTML = '';
    e.preventDefault();
    tasks.push({
        name: taskNameInput.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks();
});
renderCategories();
renderTasks();
