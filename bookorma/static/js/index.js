const btn = document.querySelector("button");
const list = document.querySelector("ul");
const UserInput = document.querySelector(".hola");

// Add
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (UserInput.value != "") {
    li = document.createElement("li");
    list.appendChild(li);
    names = document.createElement("span");
    names.textContent = UserInput.value;
    names.classList.add("name");
    li.appendChild(names);

    deleteBtns = document.createElement("span");
    deleteBtns.textContent = "delete";
    deleteBtns.classList.add("delete");
    li.appendChild(deleteBtns);

    UserInput.value = "";
  }
});

// Delete
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Hide
hideBook = document.querySelector("#hide");
hideBook.addEventListener("click", (e) => {
  if (hideBook.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

// Search
search.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const items = list.querySelectorAll("li");

  items.forEach((item) => {
    const name = item.querySelector(".name").textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
