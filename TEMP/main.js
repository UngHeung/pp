function textDisplay(element) {
    const textArray = element.innerText.split("");
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    const exception = [" ", "\n", ".", ",", ":"];

    const randomIntBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const numArray = [];
    textArray.forEach((_) => {
        const num = randomIntBetween(5, 40);
        numArray.push(num);
    });

    let newText;
    let completeCount;
    const timer = setInterval(() => {
        completeCount = 0;
        newText = "";
        numArray.forEach((num, i) => {
            if (exception.includes(textArray[i]) || numArray[i] === 0) {
                newText += textArray[i];
                completeCount += 1;
            } else {
                newText += special[numArray[i] % special.length];
                numArray[i] = --num;
            }
        });

        element.innerText = newText;
        if (completeCount === numArray.length) clearInterval(timer);
    }, 100);
}

const p = document.querySelector("p");
textDisplay(p);

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
const textArea = document.querySelector(".text-area");

let cnt = 0;

window.onload = () => {
    makeStars();
};
