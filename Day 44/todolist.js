const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const generateList = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateList(todo);
    addForm.reset();
  }
});

// Delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// search
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((item) => !item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.add("filtered"));

  Array.from(list.children)
    .filter((item) => item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});