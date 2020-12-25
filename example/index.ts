import BoomJS from '../src/index';
function example() {
  document.body.innerHTML = `
  <h1>Demo</h1>
  <input type="text" value="input"/>
  <button>button</button>
  `;
  const boomjs = new BoomJS();
  document.body.addEventListener('click', (e) => {
    const ele = e.target;
    boomjs.boom(ele as Element);
  });
}
example();