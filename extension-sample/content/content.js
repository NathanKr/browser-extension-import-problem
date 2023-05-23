(async () => {
  // --- dynamic load utils1
  const urlUtils1 = chrome.runtime.getURL("content/utils1.js");
  const { sum } = await import(urlUtils1);
  console.log(`sum(1,2) : ${sum(1, 2)}`);

  // --- dynamic load utils2
  const urlUtils2 = chrome.runtime.getURL("content/utils2.js");
  const { mul } = await import(urlUtils2);
  console.log(`mul(1,2) : ${mul(1, 2)}`);

  // --- add img to content
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("assets/lion.jpg");
  document.body.appendChild(img);
})();
