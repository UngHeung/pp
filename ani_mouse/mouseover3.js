const addDot = document.getElementById('mouse-over');
let delay = 0; // dot 생성 딜레이

for(let i = 0; i < 400; i++) {
    delay+=50; 
    // 한바퀴마다 딜레이가 50씩 추가됨 
    // why: 모든 생성되는 div가 거의 동시에 생성되기 때문

    let newDot = document.createElement('div');
    
    setTimeout(() => {
        let rand1 = Math.floor(Math.random() * 256) + 1;
        let rand2 = Math.floor(Math.random() * 256) + 1;
        let rand3 = Math.floor(Math.random() * 256) + 1;
        addDot.prepend(newDot); // 선택한 요소의 시작부분에 삽입
        newDot.setAttribute('class', 'dot');
        newDot.addEventListener('mouseover', () => {
            let rand1 = Math.floor(Math.random() * 256) + 1;
            let rand2 = Math.floor(Math.random() * 256) + 1;
            let rand3 = Math.floor(Math.random() * 256) + 1;

            newDot.style.backgroundColor = '#333';
            setTimeout(() => {
                newDot.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
            }, 500);
        })
    }, delay);
}