"use strict";

getTooDoosInStoredg();
const DB = getTooDoosInStoredg();
render();
counter();
initCardListeners($("#todo-list"));

$("#add-todo").addEventListener("click", function () {
  createCard($("#input").value);
  setTodosInStorage($("#input").value);
  clearInput($("#input"));
  initCardListeners($("#todo-list"));
  counter();
  toast();
});

$(".toast").addEventListener("click", function (e) {
  if (e.target.className === "btn-close") {
    $(".toast").style.opacity = "0";
  }
});

function initCardListeners(list) {
  list.childNodes.forEach(function (element) {
    element.addEventListener("click", function (e) {
      if (e.target.className === "btn-close") {
        deliteCard(this.textContent);
        this.remove();
        counter();
        toast();
        //при обновлении чекбокс обнуляется, потому, что мы создаем карточки заново/ пока не знаю как исправить
      } else if (e.target.className === "form-check-input") {
        if (e.target.checked) {
          this.firstElementChild.className =
            "card-body d-flex justify-content-between text-decoration-line-through";
        } else {
          this.firstElementChild.className =
            "card-body d-flex justify-content-between";
        }
      }
    });
  });
}

function $(selector) {
  return document.querySelector(selector);
}

function createElement(tag, classNames, text = "") {
  let element = document.createElement(tag);
  element.className = classNames;
  element.innerText = text;
  return element;
}
function createCard(text) {
  let card = createElement("div", "card");
  let cardText = createElement(
    "div",
    "card-body d-flex justify-content-between",
    text
  );
  let checks = createElement("div", "form-check");
  let controls = createElement("div", "controls d-flex");
  let checksInput = createElement("input", "form-check-input");
  let checksLabel = createElement("label", "form-check-label");
  let btnClose = createElement("button", "btn-close");
  checksInput.setAttribute("type", "checkbox");
  checksInput.setAttribute("value", "");
  checksInput.setAttribute("id", "flexCheckDefault");
  checksLabel.setAttribute("for", "flexCheckDefault");
  checks.append(checksInput);
  checks.append(checksLabel);
  controls.append(checks);
  controls.append(btnClose);
  cardText.append(controls);
  card.append(cardText);
  $("#todo-list").append(card);
}

function clearInput(input) {
  input.value = "";
}

function getTooDoosInStoredg() {
  let data = JSON.parse(localStorage.getItem("todos")) || [];
  return data;
}

function setTodosInStorage(todoValue) {
  DB.push(todoValue);
  localStorage.setItem("todos", JSON.stringify(DB));
}

function render() {
  DB.forEach((todo) => {
    createCard(todo);
  });
}

function counter() {
  let headers = document.querySelectorAll(".card");
  $("#counter").innerText = headers.length;
}

//По другому пока не догадался, но помог Кате с filter, идея хорошая/ списывать не стал

function deliteCard(textCard) {
  let srtElement = ',"' + textCard + '"';
  let str = localStorage.todos;
  str = str.split(srtElement).join("");
  localStorage.setItem("todos", str);
}

function toast() {
  if ($("#counter").textContent > "6") {
    $(".toast").style.opacity = "1";
  } else {
    $(".toast").style.opacity = "0";
  }
}
