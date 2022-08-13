let generateBtn = document.getElementById('generate-btn');
let generateNums = document.getElementById('code-display');

generateBtn.addEventListener('click', function(){
    let generateNum = Math.round(Math.random() * 10000);
    generateNums.value = generateNum;
});

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.value = '';
                break;
            case '←':
                if(display.value){
                    display.value = display.value.slice(0, -1);
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    })
});

let submitBtn = document.getElementById('submit-btn');
let notifySuccess = document.getElementById('notify1');
let notifyFail = document.getElementById('notify2');
submitBtn.addEventListener('click', function(){
    if(generateNums.value == display.value){
        notifySuccess.style.display = "block";
        notifyFail.style.display = "none";
    }else{
        notifyFail.style.display = "block";
        notifySuccess.style.display = "none";
    }
});
submitBtn.addEventListener('click', function(){
    let leftAct = document.getElementById('left-act');
    let leftActnum = parseFloat(leftAct.innerText);
    if(generateNums.value !== display.value){
        leftAct.innerText = leftActnum - 1;
        document.getElementById('act-btn').style.display = "block";
    }
});