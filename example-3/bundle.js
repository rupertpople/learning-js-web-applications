(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
        }
        displayMessage() {
          let newElement = document.createElement("div");
          newElement.id = "message";
          newElement.innerText = "This message displayed by JavaScript";
          this.mainContainerEl.append(newElement);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
  console.log(view.mainContainerEl);
})();
