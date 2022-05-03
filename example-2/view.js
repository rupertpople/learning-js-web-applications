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

  clearParagraphs() {
    let elementToRemove = document.querySelectorAll('p');
    for (let i = 0; i < elementToRemove.length; i++){
      elementToRemove[i].remove();
    }
      
  }
}

module.exports = View;