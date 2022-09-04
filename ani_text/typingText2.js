let typeText = document.querySelector('.typeText');
let textToBeTyped = 'developer';
let textToBeTypedArr = [
    'Application',
    'Boolean',
    'Constant',
    'Developer',
    'Element',
    'False',
    'Greedy',
    'Hover',
    'Identify',
    'JavaScript',
    'kotlin',
    'Linux',
    'Mouse',
    'Node',
    'Opacity',
    'Python',
    'Question',
    'Ruby',
    'Software',
    'True',
    'Ubuntu',
    'Variable',
    'World',
    'Xposition',
    'Yposinion',
    'Zindex'
]; // 여러개의 텍스트 설정
let index = 0;
let isAdding = true;
let textToBeTypedIndex = 0; // 텍스트 Array index

function playAnim() {
    setTimeout(() => {
        // textToBeTyped 의 값을 typeText에 설정(index를 사용)

        // 하나의 텍스트일 때
        // typeText.innerText = textToBeTyped.slice(0, index);
        // 여러개의 텍스트일 때
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)

        // 문자 추가
        if(isAdding) {
            // 더이상 추가할 문자가 없을 때

            // 하나의 텍스트일 때
            // if(index > textToBeTyped.length) {
            // 여러개의 단어일 때
            if(index > textToBeTypedArr[textToBeTypedIndex].length) {
                // false -> 중단
                isAdding = false;
                // 타이핑 끝났을 때만 깜빡이기
                // showAnim 클래스 추가(css 추가)
                typeText.classList.add('showAnim');

                // 대기시간
                setTimeout(() => {
                    // 타이핑 끝났을 때만 깜빡이기
                    // showAnim 클래스 삭제(css 삭제)
                    typeText.classList.remove('showAnim');

                    playAnim();
                }, 1000);

                return
            }else {
                // index 1 증가
                index++;
            }
        // 문자 삭제
        }else {
            // 더이상 삭제할 문자가 없을 때
            if(index == 0) {
                isAdding = true;

                // 여러개의 텍스트일 때
                let rand = Math.floor(Math.random() * textToBeTypedArr.length) + 1;

                // 순서대로 가져오기
                // textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length;

                // 랜덤으로 가져오기
                textToBeTypedIndex = (rand) % textToBeTypedArr.length;
            }else {
                // index 1 감소
                index--;
            }
        }
        // 함수 불러옴
        playAnim();
    }, 100)
}

playAnim();