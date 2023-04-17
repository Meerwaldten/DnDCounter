let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let total20Elem = document.querySelector('.total20s');
let total1Elem = document.querySelector('.total1s');

let count = 0;
let total20s = 0;
let total1s = 0;

update20s();
function update20s(){
    total20Elem.innerHTML = total20s;
};

update1s();
function update1s(){
    total1Elem.innerHTML = total1s;
};



updateDisplay();
counterPlusElem.addEventListener("click",()=>{
    count++;
    total20s++;
    update20s();
    updateDisplay();
});
counterMinusElem.addEventListener("click",()=>{
    count--;
    total20s--;
    update20s();
    updateDisplay();
});
function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};


let counterDisplayElem1 = document.querySelector('.counter-display1');
let counterMinusElem1 = document.querySelector('.counter-minus1');
let counterPlusElem1 = document.querySelector('.counter-plus1');

let count1 = 0;


updateDisplay1();
counterPlusElem1.addEventListener("click",()=>{
    count1++;
    total1s++;
    update1s();
    updateDisplay1();
}) ;
counterMinusElem1.addEventListener("click",()=>{
    count1--;
    total1s--;
    update1s();
    updateDisplay1();
});
function updateDisplay1(){
    counterDisplayElem1.innerHTML = count1;
};

let counterDisplayElem2 = document.querySelector('.counter-display2');
let counterMinusElem2 = document.querySelector('.counter-minus2');
let counterPlusElem2 = document.querySelector('.counter-plus2');

let count2 = 0;


updateDisplay2();
counterPlusElem2.addEventListener("click",()=>{
    count2++;
    total20s++;
    update20s();
    updateDisplay2();
}) ;
counterMinusElem2.addEventListener("click",()=>{
    count2--;
    total20s--;
    update20s();
    updateDisplay2();
});
function updateDisplay2(){
    counterDisplayElem2.innerHTML = count2;
};

let counterDisplayElem3 = document.querySelector('.counter-display3');
let counterMinusElem3 = document.querySelector('.counter-minus3');
let counterPlusElem3 = document.querySelector('.counter-plus3');

let count3 = 0;


updateDisplay3();
counterPlusElem3.addEventListener("click",()=>{
    count3++;
    total20s++;
    update20s();
    updateDisplay3();
}) ;
counterMinusElem3.addEventListener("click",()=>{
    count3--;
    total20s--;
    update20s();
    updateDisplay3();
});
function updateDisplay3(){
    counterDisplayElem3.innerHTML = count3;
};

let counterDisplayElem4 = document.querySelector('.counter-display4');
let counterMinusElem4 = document.querySelector('.counter-minus4');
let counterPlusElem4 = document.querySelector('.counter-plus4');

let count4 = 0;


updateDisplay4();
counterPlusElem4.addEventListener("click",()=>{
    count4++;
    total1s++;
    update1s();
    updateDisplay4();
}) ;
counterMinusElem4.addEventListener("click",()=>{
    count4--;
    total1s--;
    update1s();
    updateDisplay4();
});
function updateDisplay4(){
    counterDisplayElem4.innerHTML = count4;
};


let counterDisplayElem5 = document.querySelector('.counter-display5');
let counterMinusElem5 = document.querySelector('.counter-minus5');
let counterPlusElem5 = document.querySelector('.counter-plus5');

let count5 = 0;


updateDisplay5();
counterPlusElem5.addEventListener("click",()=>{
    count5++;
    total1s++;
    update1s();
    updateDisplay5();
}) ;
counterMinusElem5.addEventListener("click",()=>{
    count5--;
    total1s--;
    update1s();
    updateDisplay5();
});
function updateDisplay5(){
    counterDisplayElem5.innerHTML = count5;
};

let counterDisplayElem6 = document.querySelector('.counter-display6');
let counterMinusElem6 = document.querySelector('.counter-minus6');
let counterPlusElem6 = document.querySelector('.counter-plus6');

let count6 = 0;


updateDisplay6();
counterPlusElem6.addEventListener("click",()=>{
    count6++;
    total1s++;
    update1s();
    updateDisplay6();
}) ;
counterMinusElem6.addEventListener("click",()=>{
    count6--;
    total1s--;
    update1s();
    updateDisplay6();
});
function updateDisplay6(){
    counterDisplayElem6.innerHTML = count6;
};

let counterDisplayElem7 = document.querySelector('.counter-display7');
let counterMinusElem7 = document.querySelector('.counter-minus7');
let counterPlusElem7 = document.querySelector('.counter-plus7');

let count7 = 0;


updateDisplay7();
counterPlusElem7.addEventListener("click",()=>{
    count7++;
    total20s++;
    update20s();
    updateDisplay7();
}) ;
counterMinusElem7.addEventListener("click",()=>{
    count7--;
    total20s--;
    update20s();
    updateDisplay7();
});
function updateDisplay7(){
    counterDisplayElem7.innerHTML = count7;
};

let counterDisplayElem8 = document.querySelector('.counter-display8');
let counterMinusElem8 = document.querySelector('.counter-minus8');
let counterPlusElem8 = document.querySelector('.counter-plus8');

let count8 = 0;


updateDisplay8();
counterPlusElem8.addEventListener("click",()=>{
    count8++;
    total20s++;
    update20s();
    updateDisplay8();
}) ;
counterMinusElem8.addEventListener("click",()=>{
    count8--;
    total20s--;
    update20s();
    updateDisplay8();
});
function updateDisplay8(){
    counterDisplayElem8.innerHTML = count8;
};

let counterDisplayElem9 = document.querySelector('.counter-display9');
let counterMinusElem9 = document.querySelector('.counter-minus9');
let counterPlusElem9 = document.querySelector('.counter-plus9');

let count9 = 0;


updateDisplay9();
counterPlusElem9.addEventListener("click",()=>{
    count9++;
    total1s++;
    update1s();
    updateDisplay9();
}) ;
counterMinusElem9.addEventListener("click",()=>{
    count9--;
    total1s--;
    update1s();
    updateDisplay9();
});
function updateDisplay9(){
    counterDisplayElem9.innerHTML = count9;
};





