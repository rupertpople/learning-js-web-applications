class ParagraphView {
  display(newContent) {
    document.querySelector('p').innerText = newContent;
  }
}

module.exports = ParagraphView;