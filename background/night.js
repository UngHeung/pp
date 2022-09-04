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

window.onload = () => {
    makeStars();
};
