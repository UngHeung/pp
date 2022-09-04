const textBox = document.getElementsByClassName('text-box');

const textCheck = 'ungHeung';

const textArr = [
    'u', 'n', 'g', 'H', 'e',
    '!', '@', '#', '$', '*', '^', '&', '*', 
    '(', ')', '-', '+', '='
]

for(let i = 0; i < textBox.length; i++) {
    let rand = Math.floor(Math.random() * textArr.length - 1) + 1;
    let textItem = textBox.item(i);
    textItem.innerHTML=`${textArr[rand]}`;
}

// for(let i = 0; i < textBox.length; i++) {

//     while(true) {
//         let rand = Math.floor(Math.random() * textArr.length - 1) + 1;
//         let textItem = textBox.item(i)

//         if(textCheck.charAt(i) == textBox(i)) break;
//     }

// }

count = 0;
while(count == 100) {
    let rand = Math.floor(Math.random() * textArr.length - 1) + 1;
    let textItem = textBox.item(rand)

    
    count++;
}

