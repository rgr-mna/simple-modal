document.addEventListener("DOMContentLoaded", () => {
  // bg click close modal
  const closeModalOnOutsideClick = (e) => {
    let modalRoot = getModalRoot();
    if (modalRoot.innerHTML.trim() == "") return;
    let clickedModal = e.path.some((element) => element.className === "modal");
    if (clickedModal) return;
    clearModal();
  };
  document.addEventListener("click", closeModalOnOutsideClick);
  let modal1Button = document.querySelector("#modal-1");
  modal1Button.addEventListener("click", (e) => {
    e.stopPropagation();
    createModal();
  });
});

const getModalRoot = () => {
  return document.querySelector(".modal__root");
};

/**
 * Allows to clear the modals from the global namespace.
 */
const clearModal = () => {
  let modalRoot = getModalRoot();
  modalRoot.innerHTML = null;
  modalRoot.classList.toggle("active");
};
window.clearModal = clearModal;

const createModal = () => {
  let modalRoot = getModalRoot();
  modalRoot.classList.toggle("active");
  modalRoot.innerHTML = `<div class="modal">
        <header class="modal__header row">
          <div class="modal__title">Modal title</div>
          <span onclick="clearModal()" class="modal__x" title="Close the modal window.">
            x
          </span>
        </header>
        <main class="modal__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          illo officiis illum delectus dicta. Numquam, placeat. Ipsa obcaecati
          illo aliquam ab. At aut quod eaque perspiciatis aliquid accusantium
          consectetur iusto.
        </main>
        <footer class="modal__footer">
          <button onclick="clearModal()" class="btn">Close</button>
        </footer>
      </div>`;
};
