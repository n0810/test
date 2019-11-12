// начальное состояние кнопки — не кликнута
var isClicked = false;
// найден и выбран элемент кнопки
var button = document.getElementsByTagName('button')[0];

// при клике по кнопке скрипт начинает выбирать
button.onclick = function() {
  if (isClicked) {
    // если состояние кнопки — кликнута, делай это
button.classList = '';
isClicked = false;
  } else {
    // если состояние кнопки — не кликнута, делай это
    button.classList.add('clicked');
    isClicked = true;
  }
}
