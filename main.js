const textArea = document.querySelector('#input');

const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');

let capsLock = true;
let input = "";

textArea.addEventListener('click', function() {
  if (keyboard.classList.contains('hidden')) {
    keyboard.classList.remove('hidden');
    keyboard.classList.add('visible');
  }
});

keys.forEach(key => {
  key.addEventListener('click', (event) => {
    let value = event.target.textContent;
    
    switch (value) {
      case 'check_circle':
        keyboard.classList.remove('visible');
        keyboard.classList.add('hidden');
        break;
      case 'keyboard_capslock':
        if (capsLock) {
          keys.forEach(key => {
            if (key.textContent.length == 1 && key.textContent.charCodeAt(0) >= 65 && key.textContent.charCodeAt(0) <= 90) {
              key.innerHTML = key.textContent.toLowerCase();
            }
          });

          capsLock = false;
        } else {
          keys.forEach(key => {
            if (key.textContent.length == 1 && key.textContent.charCodeAt(0) >= 97 && key.textContent.charCodeAt(0) <= 122) {
              key.innerHTML = key.textContent.toUpperCase();
            }
          });

          capsLock = true;
        }
        break;
      case 'backspace':
        input = input.slice(0, input.length - 1);
        break;
      case 'keyboard_return':
        input += '\n';
        break;
      case 'space_bar':
        input += " ";
        break;
      default:
        input += value;
        break;
    }

    textArea.value = input;
  });
});