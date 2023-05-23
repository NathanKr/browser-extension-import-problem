(async () => {
  const urlUtilsEntryPoint = chrome.runtime.getURL("content/utils-entry-point.js");
  await import(urlUtilsEntryPoint);

  // --- add p to content
  const pElem= document.createElement("imgElem");
  pElem.innerText = 'check the console for sum and mul used from utils1,utils2';
  document.body.appendChild(pElem);


  // --- add img to content simply to experiment with web_accessible_resources
  const imgElem = document.createElement("img");
  imgElem.src = chrome.runtime.getURL("assets/lion.jpg");
  document.body.appendChild(imgElem);
})();
