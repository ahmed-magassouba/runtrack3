document.addEventListener("DOMContentLoaded", (event) => {
  let keylogger = document.getElementById("keylogger");
  let b = document.body;
  
  b.addEventListener("keydown", (event) => {
    let key = event.key;

    console.log(key);

    if (keylogger.focus) {
      keylogger.value = keylogger.value + key;
    } else {
      keylogger.value = key;
    }
  });
});
