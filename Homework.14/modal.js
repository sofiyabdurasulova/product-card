export class Modal {
  constructor(modalId, buttonId, closeOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.#initOpenButton(buttonId);
    this.#initCloseButton(closeOnOverlay);
    this.overlayClickHandler = this.overlayClickHandler.bind(this);
  }
  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.overlay.addEventListener("click", this.overlayClickHandler);
  }
  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.removeEventListener("click", this.overlayClickHandler);
    const openModal = document.querySelector(".modal-showed");
    if (!openModal) {
      this.overlay.classList.remove("overlay-showed");
    }
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpenButton(buttonId) {
    const openButton = document.getElementById(buttonId);
    if (!openButton) {
      console.warn(`Button with id "${buttonId}" not found.`);
      return;
    }
    openButton.addEventListener("click", () => {
      this.open();
    });
  }
  #initCloseButton(closeOnOverlay) {
    const closeButton = this.modal.querySelector(".modal-close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
  #handleOverlayClick(closeOnOverlay) {
    if (closeOnOverlay && this.isOpen()) {
      this.close();
    }
  }
}
