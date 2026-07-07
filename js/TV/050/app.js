window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
        <h1>Hello I am nav!</h1>
    `;
  console.log(nav);
});

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);
