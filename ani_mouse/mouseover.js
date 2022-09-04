let boxNum = 1;
let boxArea = document.querySelector('#mouse-over');

boxArea.addEventListener('mousemove', () => {
    if(boxNum <= 400) {
        let newBox = document.createElement('div');
        boxArea.prepend(newBox);
        newBox.setAttribute('class', 'box');
        newBox.style.backgroundColor = '#333';
        
        boxNum++;
    }
    

    let box = document.querySelector('.box');
    
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = '#fff';
        setTimeout(() => box.style.backgroundColor = 'lightblue', 1000)
    });
});