// // HTML -> JS
// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');

// // 숫자 증가하자
// let count = 0;
// button.addEventListener('click', () => {
//     count++;
  
// // 숫자 표시하자
//     h1.textContent = count;
// }); 

let count = 0;
// HTML -> JS
// const resultH1 = document.querySelector('h1')[0];
// const plusButton = document.querySelector('button');    
// const resultH1 = document.getElementsByTagName('h1')[0]; //getElemens 엘리먼 츠! 여러개를 가져와서 하나를 꺼낸다.(시험)
// const plusButton = document.getElementsByTagName('button')[0]; //getElemens 엘리먼 츠! 여러개를 가져와서 하나를 꺼낸다.(시험)
const resultH1 = document.getElementById('result'); //방법1
// const resultH1 = document.getElementById('#resultH1');//방법2
// const resultH1 = resultH1;//방법3 (시험)
const plusButton = document.getElementById('plusBtn');

// plusButton.addEventListener('click', () => {  //plusButton.addEventListener('click', 처리함수()); //이렇게 하면 함수가 바로 실행되어버린다. 그래서 ()를 빼야한다.(시험)
//     // 숫자 증가하자
//     count++; //count += 1; //count = count +1;      

//     // 숫자 표시하자
//     resultH1.innerHTML = count;
// });

plusButton.onclick = () => {  //plusButton.addEventListener('click', 처리함수()); //이렇게 하면 함수가 바로 실행되어버린다. 그래서 ()를 빼야한다.(시험)
    // 숫자 증가하자
    count++; //count += 1; //count = count +1;      

    // 숫자 표시하자
    resultH1.innerHTML = count;
};

// function 처리함수() {

//     // 숫자 증가하자
//     count++; //count += 1; //count = count +1;

//     // 숫자 표시하자
//     resultH1.innerHTML = count;
// }

// (함수정의)();
// (function(){

// } )()
