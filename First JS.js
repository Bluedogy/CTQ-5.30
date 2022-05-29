alert("hi") // 위에 hi라고 알림창이 나온다 
console.log(1234);
console.log('hahahaha');
console.log("memememe");

console.log(5 + 2);
console.log(5 * 2);
console.log(6 / 2);

const a = 5; // 값을 저장하거나 유지하는 역할을 하는 variable을 만들기 위해서는 const을 이용한다. const는 변하지 않는 값이라는 뜻이다.
// variable의 이름은 a이고 이것은 5랑 같다는 뜻이다. 따라서 위 console.log에서 5대신 a 쓸수 있다.
console.log(a + 2); 
const b = 2;
const c = "d"; // 이런식으로 문자도 가능

console.log(a+b);
console.log(a*b);
console.log("d" + c);

let e = 1; // const는 constant을 의미하는데, 이것은 값이 불변함을 의미.
// let은 const와 달리 변함. 업데이트 하고 싶을때 언제든지 업데이트 가능. 
e = "MuYaHo"; // 이런식으로 1 -> "무야호"로 바꾸기 가능
console.log("your new name is " + e);//1이 아니라 무야호가 나온다
// 옛날에는 var만 있었으나, 항상 업데이트 될 수도 있고 이해도 가능하나, 몇몇 값들을 보호할 수 없다. 
// 그래서 const, let으로 쪼개진것. 
// 컴퓨터에서 0는 꺼져있음, 1은 켜져있음. 우리는 똑같은 표현방식으로 true, false 씀
const amIFat = true;// (= "true") 라 쓰면 다른거임 그리고 true는 켜져있음, false는 꺼져있음을 의미한다. 
console.log(amIFat);
const YouAreFat = null; // null은 아무것도 없다는것을 의미한다. 여기서 YouAreFat은 값은 있으나, 그 값에 아무것도 없다는 것을 뜻한다.
let Something;
console.log(Something); // 이경우 variable 인 Something은 존재하나, 정의되진 않음(undefined)

const d = 100;
const Total = [a, b, c, d, e]; // array임. 1. 대괄호로 묶이고, 2. 콤마(,)로 나누기
const Nonsense = ["hello", "Seil", "High"]; 
console.log(Total, Nonsense);
console.log(Total[3])// 만약 array안 데이터에 접근하고 싶으면, variable의 이름 적고 대괄호 열고 얻고 싶은 항목의 번호를 적기
console.log(Nonsense[0])// 주의: array는 0부터 시작
Total.push("sun"); // array에서 하나 더 추가하기(뒤쪽에)
console.log(Total); 
console.log(Total[99999]) // 이경우 100000번째 항에는 정의되지 않았다고 컴퓨터가 얘기할거임.

const player = {
    name: "Dog",
    points: 10,
    fat: true,
}; // 리스트 항목의 이름들까지 정해줌
console.log(player.name); // 출력시 이렇게 항목의 이름을 넣는다.
player.fat = false;
console.log(player); // constant 안의 내용은 constant 자체와 달리 업데이트 가능
player.points = player.points + 15;
console.log(player.points); // 중간에 포인트처럼 수치의 경우, 올리는 정도를 써서 업데이트도 가능하다.

function BuMin(ㄹㅇㅋㅋ, ㅎㅋ, 숫자){
    console.log("부민은 " + ㄹㅇㅋㅋ + "이고 " + ㅎㅋ + "을 좋아해 " + 숫자);
} // 중괄호 안 코드가 실행을 누를 때마다 실행된다. 또한 argument는 2개 이상도 가능
// argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법이다.
BuMin("씹덕", "원신", 1);
BuMin("오타쿠", "뱅드림", 2); 

function CalCulatorPlus(a, b){
    console.log(a + b);
}
function CalCulatorDivide(c, d){
    console.log(c / d);
    console.log(a / b); // 위쪽에 const a 와 const b를 잡아서 그리 나온것. 
}
function CalCulatorMinus(e, f){
    console.log(e - f);
    console.log(a - b);
    console.log(c - d); // 다른 함수에서 지정한 변수는 여기다 사용 불가함
}
//제곱은 a**b 이런식이다
CalCulatorPlus(3, 7);//a(첫번쨰 argument)는 2, b(2번째 argument)는 7이 되는 거임.
CalCulatorDivide(7, 2);
CalCulatorMinus(5, 4);

const PERSON = {
    name: "BuMin",
    Situation: function(현재상황) {
        console.log("정시 화이팅! " + 현재상황 + " 화이팅!");
    }//내부 중괄호
};

console.log(PERSON.name);
PERSON.Situation("님 지금 ㅈ망함");
PERSON.Situation("ㅋㅋㅋㅋㅋㅋㅋ"); 
// cf> 여기까지의 내용을 #2.9 Racap/ #2.10 Recap II 에서 요약설명해줌

const 상수1 = 96;
function 함수1(변수1) {
  return 변수1 + 2;
}// return: function이 function 밖에서와 소통 가능하게 만들어준다.

const 도출값1 = 함수1(상수1); // 함수1은 함수이고, 상수1은 위에 지정한 상수이다. 
console.log(도출값1);                // 이때, 변수1은 수학으로 치면 미지수 x이고, x+2를 지정한것. 
// 즉, 함수1자체가 x+2인데, 상수1이 96이므로 함수1(상수1) == 96+2 == 도출값1인것.
const 뻘짓계산 = 30;
function 개뻘짓(쓸모없는_숫자) {
    쓸모없는_숫자 + 20;
    return "부민은 씹덕이다" // return 값이 출력되는 것임.
    쓸모없는_숫자 - 30; // 보면 컴퓨터에서 흐리게 해놓음. 즉, return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝내버린다.
    console.log("이건 출력 안된다.")// 이것도 작동안되서 출력 안된다.
} 
const 뻘짓결과 = 개뻘짓(뻘짓계산);
console.log(뻘짓결과);

const age예시1 = prompt("How old are you?") // prompt는 사용자에게 창을 띄울 수 있도록 해준다. prompt는 2개의 agrument을 가지는데, 하나는 message, 다른건 default이다.
// 이 prompt는 js가(정확하게는 js코드가) 잠시 정지하게 만든다. 
console.log(age예시1); // cancel 누르면 null이라는 결과가, 아무것도 안쓰고 Ok 누르면 그냥 빈 상태(안친걸 값으로 하는듯)로 다음으로 넘어감.
// value의 type을 보려면, "typeof"라는 걸 적으면 된다.
console.log(typeof age예시1, typeof parseInt(age예시1)); // 이경우, age는 string임을 알 수 있다. string은 따옴표 안에 있는 걸 의미.
// string은 대소비교가 불가능한 반면, number은 가능하다. 
// 그리고 이제 위 prompt 코드에다 문자쓰면 NaN(Not a Number)이 뜨면서 숫자가 아닌건 거를수 있게 된다.
const 중간고사_점수 = parseInt(prompt("너 중간 몇점임?") ); // function은 내부에서부터 외부로 실행된다.
// 즉 prompt, parseInt 순으로 작동한다.
console.log(isNaN(중간고사_점수) );// isNaN은 함수임. 이건 하나의 agrument가 숫자인지 아닌지 알려주는 역할을 함.
// isNaN은 boolean(숫자가 아니면 true/ 숫자가 맞으면 false)을 return한다.
if(isNaN(중간고사_점수) || 중간고사_점수 < 0 ) {
    // isNaN(중간고사_점수) == true인경우 혹은 음수를 친 경우
    alert("ㅈㄹㄴㄴ 걍 점수 까셈");
} else if (중간고사_점수 > 95) {
    // isNaN(중간고사_점수) == false이며 90점 이상인 경우
    alert("기만자새끼..");
} else if (중간고사_점수 <= 80) {
    alert("정시 화이팅!");
} else {
    alert("ㅇㅋㅇㅋ 화이팅")
}

const Conditionals_practice = parseInt(prompt("조건1: 5 이하 10 이상인 수 치기/조건2: 20치기/조건3: 15가 아닌 수 치기"))
if(isNaN(Conditionals_practice) ){
    console.log("잘못된 숫자");
} else if(Conditionals_practice <= 10 && Conditionals_practice >= 5) {
    console.log ("확인 완료: 조건 1");
} // A && B -> A,B둘다 참이어야 참(AND), A || B -> A B 중 하나만 참이어도 참(OR)
else if(Conditionals_practice == 20) {
    console.log ("확인 완료: 조건 2");
} else if(Conditionals_practice == 7) {
    console.log("이건 안떠야 정상"); // 7의 경우, 위에 있는 조건1에서 끝내기 때문.
} else if(Conditionals_practice !== 15) {
    console.log("확인 완료: 조건 3");
} else {
    console.log("조건을 모두 만족 못함");
}
const Five27 = document.querySelector(".hello h1");//querySelectorAll로 바꾸면 다른 결과가 나온다.
//아래 html 코드에 따르면,getElementbyId는 HTML에서 id를 통해 element를 찾아줄거임. 이때, Id는 html과 동일해야함. 다르면 아무것도 못한다.
//처음 html 부분<h1 autofocus class="Hello" id="title1234">grab me</h1> 이다. 여기서 바꾼거임. js는 노마드코더 3.2 참고
// 원래 기준 title.innerText = "Got You!";// 가능한 이유는 html 파트에서 h1 id= ...로 id를 추가했기 때문이고 위에 "title"이라는 element를 가져왔기 때문이다.

// console.log(title.id); 처음 html 부분 기준 이걸로 하면 title1234가 나온다
// console.log(title.className); 이것은 Hello가 나온다.
console.log(Five27);
// querySelector는 element를 CSS 방식으로 검색할 수 있다. CSS selector이므로 .hello라 쓴거임. 여기서는 hello가 class name이라는것과 그 안의 h1을 명시해야함
// querySelector는 단 하나의 element를 return 해준다. 첫번쨰 element만 가져온다.
// 반면 querySelectorAll은 2개의 h1이 들어있는 array(즉, 전부)를 가져다 줄거임.
// 만약에 id를 통해 찾고 싶다 해도 querySelector를 활용해 찾을 수 있다. id만 전달해 주면 된다. 
//querySelector("#hello") 이렇게. 이건 getElementById("hello")와 같다.

function handleTitleClick() { // 5번째: toggle function: class name이 있는지 확인하고, 있으면 없에고 없으면 추가함
    const clickedClass = "clicked" 
Five27.classList.toggle("clicked");//toggle(clickedClass)라 할 수도 있는데, 여기서는 한번만 쓰므로 ㄱㅊ // 4번째: if (Five27.classList.contains(clickedClass)) { // ClassList에는 contains라는 함수가 있음. 이 함수는 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다는 것이다.   // 3번째: if (Five27.className === clickedClass) { // classList는 class들의 목록으로 작업할 수 있게 도와주는 반면, className은 이전 class와 관련없이 다 바꿈
// 4번째:    Five27.classList.remove(clickedClass); //3번째: Five27.className = "";
// 4번째: } else {
// 4번째:    Five27. classList.add(clickedClass);// 3번쨰: Five27.className = clickedClass;
 // cf) = 부호가 3개면, className이 active와 같은지 확인하는거고 = 값이 하나면 해당 값을 ""부분 값으로 변경하는거임. 
    //2번째: const currentColor = Five27.style.color; // 1번째: 이줄이랑 다음줄(newcolor부분) 없을 때임.
    // 2번째: let newColor;
    // 2번째: if(currentColor === "blue") { // 1번쨰: if(Five27.style.color === "blue") {
    // 2번째:    newColor = "tomato"; // 1번째: Five27.style.color = "tomato";
    // 2번쨰: } else {
    // 2번쨰:    newColor = "blue"; //1번쨰: Five27.style.color = "blue";
    // 2번쨰: }
    // 2번쨰: Five27.style.color = newColor;
}

Five27.addEventListener("click", handleTitleClick);//추가적인 내용은 3.4 Events part 2 보기
console.dir(Five27);

function handleMouseEnter(){
    Five27.innerText ="Mouse is here"
}

function handleMouseLeave(){
    Five27.innerText = "Mouse is gone"
}
Five27.addEventListener("mouseenter", handleMouseEnter)
Five27.addEventListener("mouseleave", handleMouseLeave)
//Five27은 걍 5월 27일에 이거 한거란 뜻임 ㅇㅇ
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowOffline(){
    alert("SOS no WIFI");
}
function handleWindowOnline(){
    alert("YYYYEEESSS WWIIFFII")
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);