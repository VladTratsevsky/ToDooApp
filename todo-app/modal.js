import { toggle } from "./utils.js";
import { render } from "./index.js";

export const initModal = () => {
  document.querySelector(".modal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-close")) {
      toggle();
    } else if (e.target.classList.contains("modal-save")) {
      toggle();
      localStorage.setItem("todos", {});
      render();
    }
  });
};
