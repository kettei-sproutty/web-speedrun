/// <reference types="chrome" />

let config = {
  background: '#000',
  color: '#fff',
  trasparency: 1,
}

chrome.runtime.onMessage.addListener(message => {
  const { type, payload } = message
  if (type === 'CONFIG') {
    config = payload
  }
})

chrome.runtime
