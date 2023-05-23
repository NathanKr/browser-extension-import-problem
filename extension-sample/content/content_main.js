// --- put here your stuff
console.log('loading content_main.js');

export function sum(n1,n2){
    return n1+n2;
}


// --- add img to content
const img = document.createElement("img");
img.src = chrome.runtime.getURL("assets/lion.jpg");
document.body.appendChild(img);

// --- call utils
const src = chrome.runtime.getURL("content/utils.js");
const {mul} = await import(src);

console.log(mul(1,2));