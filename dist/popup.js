(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){chrome.tabs.query({active:!0,currentWindow:!0},(function(r){var e=r[0];return null==e?console.error("Popup Error: Active tab is null."):null==e.id?console.error("Popup Error: Active id is null."):void chrome.tabs.sendMessage(e.id,{action:"getProcessedText"},(function(r){if(chrome.runtime.lastError)return console.error("Popup Runtime lastError:",chrome.runtime.lastError);if(!r.success)return console.error("Popup Error: Response Failed.");var e=document.getElementById("result");return e?r.processedText?void(e.innerHTML=r.processedText.replace(/\n/g,"<br>")):console.error("Popup Error: processedText is null."):console.error("Popup Error: result element is null.")}))}))}))})();