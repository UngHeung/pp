const addDot = document.getElementById('mouse-over');
let delay = 0; // dot 생성 딜레이

for(let i = 0; i < 400; i++) {
    delay+=50; 
    // 한바퀴마다 딜레이가 50씩 추가됨 
    // why: 모든 생성되는 div가 거의 동시에 생성되기 때문

    let newDot = document.createElement('div');
    
    setTimeout(() => {
        addDot.prepend(newDot); // 선택한 요소의 시작부분에 삽입
        newDot.setAttribute('class', 'dot');
        newDot.style.borderRadius = '20px';
        newDot.addEventListener('mouseover', () => {
            newDot.style.backgroundColor = '#fff';
            setTimeout(() => {
                newDot.style.backgroundColor = 'rgb(145, 145, 145)';
            }, 500);
        })
    }, delay);
}


// let dot = document.getElementsByClassName('dot');
// console.log(dot);

// dot.addEventListener('mouseover', () => {

// });