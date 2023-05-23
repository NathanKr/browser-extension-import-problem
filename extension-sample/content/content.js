(async () => {
  const src = chrome.runtime.getURL("content/content_main.js");
  const {sum} = await import(src);
  console.log(`sum(1,2) : ${sum(1, 2)}`);
})();

