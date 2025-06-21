let zIndexCounter = 0;

document.querySelectorAll('.window').forEach(windowDiv => {
    const titleBar = windowDiv.querySelector('.title-bar');

    titleBar.addEventListener('mousedown', onMouseDown);
  
    function onMouseDown(e) {
        windowDiv.style.zIndex = ++zIndexCounter;

        let shiftX = e.clientX - windowDiv.getBoundingClientRect().left;
        let shiftY = e.clientY - windowDiv.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            windowDiv.style.left = pageX - shiftX + 'px';
            windowDiv.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true});
    } 
});
