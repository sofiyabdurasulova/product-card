export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.overlay = document.getElementById("overlay");
    this.addCloseListener();
  }
  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }
  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }
  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  addCloseListener() {
    this.overlay.addEventListener("click", () => {
      this.close();
    });
    const closeButton = this.modal.querySelector(".modal-close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
