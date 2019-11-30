window.addEventListener('DOMContentLoaded', (event) => {
  const comments = new Commets();
  comments.show(this.index);
  comments.events();
});



class Commets {
  constructor () {
    this.index = 1;
    this.comments = document.querySelectorAll("blockquote");
    this.buttons = document.querySelectorAll("button");
  }
  render (index) {
    this.show(this.index += index);
  }
  show (index) {
    this._setPosition(index)
    this._hideAll()
    this._showComment()
  }
  events () {
    const position = [-1, 1]
    for(let i = 0; i < this.buttons.length; i ++){
      this.buttons[i].addEventListener('click', (index) => {
        this.render(position[i])
      })
    }
  }
  _setPosition (index) {
    this._start(index)
    this._end(index)
  }
  _start (index) {
    if (index > this.comments.length) {this.index = 1}
  }
  _end (index) {
    if (index < 1) {this.index = this.comments.length}
  }
  _hideAll () {
    for (let i = 0; i < this.comments.length; i++) {
      this.comments[i].style.display = "none";
    }
  }
  _showComment () {
    this.comments[this.index - 1].style.display = "block";
  }
}
