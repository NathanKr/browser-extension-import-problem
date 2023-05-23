console.log('background service worker is invoked');

chrome.runtime.onInstalled.addListener(({ reason, version }) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      showReadme();
    }
  });
  
  chrome.action.onClicked.addListener((tab) => {
    showReadme();
  });
  
  function showReadme(info, tab) {
    const url = chrome.runtime.getURL('assets/index.html');
    chrome.tabs.create({ url });
    chrome.tabs.create({ url : 'https://example.com/'});
  }