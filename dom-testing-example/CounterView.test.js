/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const CounterView = require('./CounterView');

describe('Page view', () => {
  it('increments the counter', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new CounterView();
    
    view.increment();

    const counterEl = document.querySelector('#counter');
    expect(counterEl.innerText).toBe(1);
  })
})