export class Loader {
  constructor(select, className) {
    this.$loader = document.createElement("img");
    this.$loader.src =
      "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
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
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(addClassName);
      } else {
        entry.target.classList.remove(addClassName);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);

  observedSections.forEach((section) => {
    observer.observe(section);
  });
}

export function NavBarMenu(select, callback, ...rest) {
  const width = rest[0] || "40px";
  const height = rest[1] || "50px";
  const color = rest[2] || "black";
  const height_bar = rest[3] || "5px";

  const hamMenu = document.createElement("div");
  const $container = document.querySelector(select);
  hamMenu.innerHTML = `
      <span></span>
      <span></span>
      <span></span>`;
  hamMenu.classList.add("ham-menu");
  $container.appendChild(hamMenu);

  // Add style
  const style = document.createElement("style");
  style.innerHTML = `
      /* ham menu */
      .ham-menu {
          height: ${height};
          width: ${width};
          margin-left: auto;
          position: relative;
          cursor: pointer;
      }
      .ham-menu span {
          height: ${height_bar};
          width: 100%;
          background-color: ${color};
          border-radius: 25px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: .3s ease;
      }
      .ham-menu span:nth-child(1) {
          top: 25%;
      }
      .ham-menu span:nth-child(3) {
          top: 75%;
      }
      .ham-menu.active span {
          background-color: ${color};
      }
      .ham-menu.active span:nth-child(1) {
          top: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
      }
      .ham-menu.active span:nth-child(2) {
          opacity: 0;
      }
      .ham-menu.active span:nth-child(3) {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
      }
  `;
  document.head.appendChild(style);

  // Add event listener
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    if (callback && typeof callback === "function") {
      callback();
    }
    // add hash change event
    window.addEventListener("hashchange", () => {
      hamMenu.classList.remove("active");
    });
  });
}

export function SliderImage(select, SrcImages, interval) {
SrcImages();
var container = document.querySelector(select);
var img = document.createElement('img');
img.src = SrcImages()[0];
container.appendChild(img);
// change the image every 2 seconds
var i = 0;
setInterval(function(){
    i++;
    if(i == SrcImages().length){
        i = 0;
    }
    img.src = SrcImages()[i];
}, interval || 2000);
// add dots to the slider
var dots = document.createElement('div');
dots.classList.add('dots');
dots.style.position = 'absolute';
dots.style.bottom = '10px';
dots.style.left = '50%';
dots.style.transform = 'translateX(-50%)';
container.appendChild(dots);
// create dots
for(var e = 0; e < SrcImages().length; e++){ 
    var dot = document.createElement('span');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'black';
    dot.style.display = 'inline-block';
    dot.style.margin = '0 5px';
    dot.style.cursor = 'pointer';
    dot.setAttribute('data-index', e); // set index to the dot
    dots.appendChild(dot);
}
// change the color of the dot when the image changes
var dot = document.querySelectorAll('.dots span');
dot[0].style.backgroundColor = 'white';
setInterval(function(){
    for(var e = 0; e < dot.length; e++) {
        dot[e].style.backgroundColor = 'black';
    }
    dot[i].style.backgroundColor = 'white';
}, interval || 2000);
// change the image when the dot is clicked and Change the color of the dot
dots.addEventListener('click', function(e) {
    if(e.target.tagName == 'SPAN'){
        i = e.target.getAttribute('data-index');
        img.src = SrcImages()[i];
        for(var e = 0; e < dot.length; e++) {
            dot[e].style.backgroundColor = 'black';
        }
        dot[i].style.backgroundColor = 'white';
    }
});
}
