var btn1 = document.querySelector('.btn1');
console.log(document.querySelector('#ct1'))
btn1.onclick = function(){
    document.querySelector('#ct1').innerHTML = 'Hello JavaScript';
}
//()=判斷條件  {}=執行動作

var btn2_1 = document.querySelector('.btn2-1');
var btn2_2 = document.querySelector('.btn2-2');


btn2_1.onclick = function(){
    document.querySelector('#myImage').src="https://www.w3schools.com/js/pic_bulboff.gif"
}


btn2_2.onclick = function(){
    document.querySelector('#myImage').src="https://www.w3schools.com/js/pic_bulbon.gif"
}

var btn3_1 = document.querySelector('.btn3-1');
var btn3_2 = document.querySelector('.btn3-2');

btn3_1.onclick = function(){
    document.querySelector('#ct3').style.fontSize ="10px";
}


btn3_2.onclick = function(){
    document.querySelector('#ct3').style.fontSize ="36px";
}
// var btn2_3 = document.querySelector('#btn2-3')
// btn2_3.addEventListener('click', () => {
// 	window.open('https://download.mozilla.org/?product=firefox-stub&os=win&lang=zh-TW&attribution_code=c291cmNlPXd3dy5nb29nbGUuY29tLnR3Jm1lZGl1bT1yZWZlcnJhbCZjYW1wYWlnbj0obm90IHNldCkmY29udGVudD0obm90IHNldCk.&attribution_sig=5fc5708883c45525772b1a444f5559ab50bdbd9d78e026ddf232df3c7f9ddf1f')
// }) //將網頁所不認同的檔案打開=下載 認同的話=開啟頁面


var btn4_1 = document.querySelector('.btn4-1');
var btn4_2 = document.querySelector('.btn4-2');

btn4_1.onclick = function(){
    document.querySelector('#ct4').style.display ="none";
}


btn4_2.onclick = function(){
    document.querySelector('#ct4').style.display ="block";
}