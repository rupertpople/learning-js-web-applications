/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ParagraphView = require('./ParagraphView')

describe('Page view', () => {
  it('displays new paragraph content', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new ParagraphView();

    view.display('This is my new paragraph contents');

    const paragraphEl = document.querySelector('p');
    expect(paragraphEl.innerText).toBe('This is my new paragraph contents')
  });
});