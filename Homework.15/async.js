const container = document.querySelector(".users");
const showButton = document.querySelector(".show-users");
const deleteButton = document.querySelector(".delete-users");
let users = [];

showButton.addEventListener("click", () => {
  renderUsers(users);
});

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function getUsers() {
  await delay(2000);
  const response = await fetch("./async.json");
  const users = await response.json();
  return users;
}
async function saveData() {
  const users = await getUsers();
  console.log(users);
  const jsonStrin = JSON.stringify(users);
  console.log(jsonStrin);
  localStorage.setItem("users", jsonStrin);
}
function renderUsers(users) {
  console.log("Функция запустились");
  container.innerHTML = "";

  users.forEach((user) => {
    console.log("создаю карточки");
    const card = document.createElement("div");
    card.classList.add("user-card");
    const id = document.createElement("p");
    id.textContent = user.id;
    const name = document.createElement("h3");
    name.textContent = user.name;
    const surname = document.createElement("h3");
    surname.textContent = user.surname;
    const age = document.createElement("p");
    age.textContent = user.age;
    const email = document.createElement("p");
    email.textContent = user.email;
    const button = document.createElement("button");
    button.textContent = "Удалить";
    button.addEventListener("click", () => {
      users = users.filter((user) => user.id !== Number(id.textContent));
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers(users);
    });
    card.append(id, name, surname, age, email, button);
    container.append(card);
  });
}

async function init() {
  try {
    users = localStorage.getItem("users");
    if (users === null) {
      await saveData();
      users = JSON.parse(localStorage.getItem("users"));
    } else {
      users = JSON.parse(users);
    }
    console.log(users);
    renderUsers(users);
    document.querySelector(".title").remove();
  } catch (error) {
    container.textContent = "Ошибка при загрузке данных";
  }
}
init();
deleteButton.addEventListener("click", () => {
  users = [];
  localStorage.removeItem("users");
  renderUsers(users);
});
