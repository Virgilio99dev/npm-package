export class Loader {
  constructor(select, className) {
    this.$loader = document.createElement("img");
    this.$loader.src = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
    this.$loader.alt = "Loading";
    this.$loader.classList.add(className);
    document.querySelector(select).appendChild(this.$loader);
  }

  remove() {
    if (this.$loader && this.$loader.parentNode) {
      this.$loader.parentNode.removeChild(this.$loader);
    } else {
      const loader = document.querySelector(".loader");
        loader.remove();
    }
  }
}

export function Observer(selector, addClassName) {
  // Intersection Observer
  const observedSections = document.querySelectorAll(selector);

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(addClassName);
      }
      else {
        entry.target.classList.remove(addClassName);
      }

    });
  }

  const observer = new IntersectionObserver(handleIntersection);

  observedSections.forEach(section => {
    observer.observe(section);
  });
}