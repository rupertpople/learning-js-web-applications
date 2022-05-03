class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let newElement = document.createElement('p');
    newElement.innerText = 'This paragraph has been dynamically added by JS!';
    this.mainContainerEl.append(newElement);
    // console.log(body);
  }
}

module.exports = View;