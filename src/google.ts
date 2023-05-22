import * as browser from "webextension-polyfill";

// get the current tab's URL
browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
  console.log(tabs[0].url);
});

// test the script
console.log("Hello world! Hi  ")