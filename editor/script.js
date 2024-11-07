// To change the console and output bars on click
let rightbar = document.querySelector(".right");
let consolebar = document.querySelector(".console-bar");
let outputbar = document.querySelector(".output-bar");
consolebar.addEventListener("click", function () {
  rightbar.classList.add("console-clicked");
});

outputbar.addEventListener("click", function () {
  if (rightbar.classList.contains("console-clicked")) {
    rightbar.classList.remove("console-clicked");
  }
});

// evaluating the javascript code into its console.

// (function () {
//   console.log = function (message) {
//     let consoleDiv = document.getElementById("console");
//     let paragraph = document.createElement("p");
//     paragraph.textContent = message;
//     consoleDiv.appendChild(paragraph);
//     consoleDiv.scrollTop = consoleDiv.scrollHeight;
//   };
// })();

(function () {
  const originalLog = console.log; // Save the original console.log

  console.log = function (message) {
    // Check if the message is NOT "Live reload enabled"
    if (message !== "Live reload enabled") {
      let consoleDiv = document.getElementById("console");
      let paragraph = document.createElement("p");
      paragraph.textContent = message;
      consoleDiv.appendChild(paragraph);
      consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

    // Still allow the original console.log to work in the browser's console
    originalLog.apply(console, arguments);
  };
})();

run = function () {
  let js_code = document.getElementById("js").value;
  eval(js_code);

  let html_code = document.getElementById("html").value;
  let css_code = document.getElementById("css").value;
  let output = document.getElementById("output");
  output.contentDocument.body.innerHTML =
    html_code + "<style>" + css_code + "</style>";
  // output.contentWindow.eval(js_code);
};
