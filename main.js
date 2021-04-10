const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Lorem ipsum dolor sit amet.', 'Duis aute irure dolor in reprehenderit.', 'Excepteur sint occaecat cupidatat.'];

let activeLetter = -15;
let activeText = 0;



//Implementation
const addLetter = ()  => {
    if (activeLetter >= 0) {
   spnText.textContent += txt[activeText][activeLetter];
    }
   activeLetter++;
   if(activeLetter === txt[activeText].length) {

    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
    activeLetter = 0;
    spnText.textContent = '';
    addLetter();
    }, 2000)
}
   setTimeout(addLetter,100)
}

addLetter ();

const cursorAnimation = () => {
spnCursor.classList.toggle('active');
}



//posluzymy sie funkcja setInterval ktora bedize nam przez okreslony przez nas czas dodawac jedna litere
setInterval(cursorAnimation, 400);