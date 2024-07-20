import rxjslogo from "./rxjs.svg";

export function print<T>(val: T) {
    document.addEventListener("DOMContentLoaded", () => {
        const el = document.createElement("div");
        el.innerHTML = `
            <img src="${rxjslogo}" class="logo rxjs" alt="RXJS logo" />
            <pre>${val}</pre>
        `
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.gap = '0.5rem';
        document.querySelector("#output")!.appendChild(el);
    })
}