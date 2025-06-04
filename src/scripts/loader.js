import refs from "./refs";

const loader = {
  showLoader() {
    refs.spinner.classList.add("loader_visible");
  },
  hideLoader() {
    refs.spinner.classList.remove("loader_visible");
  },
};

export default loader;
