window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('map').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.6286439412997!2d-0.3515976842135006!3d39.477717379485306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60489a56260cdb%3A0x7f4822b6c8d8bb2f!2sPla%C3%A7a+del+Poeta+Vicente+Gaos%2C+46021+Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1542454453811" width="320" height="260" style="border:0" allowfullscreen></iframe>'
  const comments = new Commets();
  comments.show(comments.index);
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
