import { alert, error } from '@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";


export function onWarning() {
  alert({
    text: "Too many matches found. Please enter a more specific query",
    delay: 2500
  })
}

export function onError() {
  error({
    text: "Nothing is found",
    delay: 2500
  })
}