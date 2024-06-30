const cursor = document.getElementById('cursor');

let CursorX = 0, CursorY = 0;


const moveCursor = (e) => {
    CursorX = e.clientX;
    CursorY = e.clientY;
    Cursor.style.top = `${CursorY}px`;
    Cursor.style.left = `${CursorX}px`;
};

document.addEventListener('mousemove', (e) => {
    moveCursor(e);
});
