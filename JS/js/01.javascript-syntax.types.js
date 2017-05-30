
var lunch, dinner;

lunch = '김밥';
dinner = lunch;

console.log('lunch :',lunch);
console.log('dinner :',dinner);

var suffer = '치맥';
console.log('suffer:',suffer);
{
    var suffer = '쏘맥';
    console.log('suffer:',suffer);
}
console.log('suffer:',suffer);
{
    let suffer = '쏘맥';
    console.log('suffer:',suffer);
}
console.log('suffer:',suffer);


// -----------------------------
//  Hoisting
// -----------------------------
console.log ('is exist variable `something`?:', something);
var something = "썸씽";
console.log ('is exist variable `something`?:', something);



// -----------------------------
//  Constant
// -----------------------------
const IS_ROTATION_EARTH = true;
const is_rotation_earth = true;

console.log('IS_ROTATION_EARTH : ',IS_ROTATION_EARTH);
console.log('is_rotation_earth : ',is_rotation_earth);



// ―――――――――――――――――――――――――――――――――
// Data format 
// ―――――――――――――――――――――――――――――――――
// 원시데이터 (Primitive Data Types)
//  - Undifined
//  - null
//  - Number
//  - String
//  - Boolean

// 참조데이터(Reference Data Types)
//  - Function
//  - Array
//  - Object


// 문자열
var txt_runscore = '<p class="message" title="달리기 기록">나의 하프 마라톤 기록은 50" 23\'이다.</p>';
console.log('txt_runcore:',txt_runscore);
// document.body.innerHTML(txt_runscore);



// ―――――――――――――――――――――――――――――――――
//  데이터 유형 변경 
// ―――――――――――――――――――――――――――――――――
var process_my_work = "텍스트 데이터 변수";