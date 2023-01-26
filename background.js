const l = ()=>{
    console.log('yo')
}

l();

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(function(stream) {
    // The user has granted permission and the stream variable contains the media stream
    console.log("Camera and microphone permission granted");
    // Do something with the stream, such as displaying it on a video element
    var video = document.getElementById("video-element");
    video.srcObject = stream;
  })
  .catch(function(error) {
    // The user has denied permission or there was an error
    console.log("Camera and microphone permission denied", error);
  });

// background.js
var fullscreen = false;
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
      if (tab.url.indexOf("example.com") != -1 && !fullscreen) {
        chrome.windows.update(tab.windowId, {state: "fullscreen"});
        chrome.tabs.executeScript(tab.id, {file: "content.js"});
      }
    });
  });
  
  chrome.storage.local.set({'ip': 'user ip'});
  chrome.storage.local.get(['ip'], function(result) {
    console.log('Value currently is ' + result.ip);
  });


  // background.js
chrome.runtime.onInstalled.addListener(function() {
    // Check for audio
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Audio is not supported in your browser");
    } else {
      console.log("Audio supported");
    }
  
    // Check for camera
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Camera is not supported in your browser");
    } else {
      console.log("Camera supported");
    }
  
    // Check for internet stability
    // You can use any library or service to check the internet connectivity 
    // and stability here, such as the navigator.onLine property or the 
    // Network Information API.
    if (navigator.onLine) {
      console.log("Internet is stable");
    } else {
      alert("No internet connection");
    }
  });
  