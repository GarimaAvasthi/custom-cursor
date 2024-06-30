const cursor = document.getElementById('cursor');

let cursorX = 0, cursorY = 0;


const moveCursor = (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;
};

document.addEventListener('mousemove', (e) => {
    moveCursor(e);
});