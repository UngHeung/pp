// SPACE
const $sky = document.querySelector(".sky");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
    makeStars();
};

const makeStars = () => {
    // 브라우저 최대 크기
    const maxSize = Math.max(window.innerWidth, window.innerHeight);

    // 랜덤 X, Y 위치 값
    const getRandomX = () => Math.random() * maxSize;
    const getRandomY = () => Math.random() * maxSize;
    // 랜덤 크기
    const randomRadius = () => Math.random() * 0.7 + 0.6;

    const _size = Math.floor(maxSize / 2);

    const htmlDummy = new Array(_size)
        .fill()
        .map((_, i) => {
            return `<circle class = "star"
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star"/>`;
        })
        .join("");

    $sky.innerHTML = htmlDummy;
};

// TEXT
const textCont = "I LOVE JEJU!\n제주도 놀러가고싶다.";
const textArea = document.querySelector(".text-area");

let cnt = 0;

function typing() {
    // 1회
    if (cnt < textCont.length) {
        let text = textCont.charAt(cnt);
        textArea.innerHTML += text === "\n" ? "<br>" : text;
        cnt++;
    }

    // 무한
    // let text = textCont[cnt++];
    // textArea.innerHTML += text === '\n' ? '<br>' : text;

    // if(cnt > textCont.length) {
    //     textArea.textContent = "";
    //     cnt=0;
    // }
}

setInterval(typing, 100);

window.onload = () => {
    makeStars();
};
