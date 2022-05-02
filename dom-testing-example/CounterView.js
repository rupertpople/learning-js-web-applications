class CounterView {
  constructor() {
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
    this.display();
  }

  display() {
    document.querySelector('#counter').innerText = this.getCounter();
  }

}

module.exports = CounterView;