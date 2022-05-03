/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const messageInput = document.querySelector('#message-input')
    messageInput.value = 'Type something here'
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const message = document.querySelector('#message')
    console.log(message.innerText)

    expect(message.innerText).toEqual('Type something here');
  });
  it('click hide message button removes the message on the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hidebuttonEl = document.querySelector('#hide-message-button');
    hidebuttonEl.click();
    expect(document.querySelector('#message')).toBeNull();
  } )
});