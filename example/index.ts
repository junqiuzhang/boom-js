import boomJS from "../src/index";
function example() {
  document.body.innerHTML = `
  <h1>Demo</h1>
  <input type="text" value="input"/>
  <button>button</button>
  `;
  document.body.addEventListener("click", (e) => {
    const ele = e.target;
    boomJS(ele as HTMLElement, { speed: 0.01, duration: 3000 });
  });
}
example();
