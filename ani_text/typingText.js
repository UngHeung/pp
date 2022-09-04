const textCont = 'Typing test...\n Welcome to this page.';
const textArea = document.querySelector('.text-area');

let cnt = 0;

function typing() {
    // 1회
    if(cnt < textCont.length) {
        let text = textCont.charAt(cnt);
        textArea.innerHTML += text === '\n' ? '<br>' : text;
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