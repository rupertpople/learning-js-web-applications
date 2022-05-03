class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
    let newElement = document.createElement('div')
    newElement.id = 'message';
    newElement.innerText = "This message displayed by JavaScript";
    this.mainContainerEl.append(newElement);
  }
}

module.exports = MessageView;