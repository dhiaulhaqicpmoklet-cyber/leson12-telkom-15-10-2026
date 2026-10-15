"use strict";
const scroreinput1 = document.getElementById('num1');
const scroreinput2 = document.getElementById('num2');
const result = document.getElementById('result');
function plus() {
    const anwser = Number(scroreinput1.value) + Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} + ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'blue';
}
function min() {
    const anwser = Number(scroreinput1.value) - Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} - ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'red';
}
function multi() {
    const anwser = Number(scroreinput1.value) * Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} * ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'purple';
}
function divid() {
    const anwser = Number(scroreinput1.value) / Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} / ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'orange';
}
const btnplus = document.getElementById('btnplus');
btnplus.addEventListener('click', plus);
const btnmin = document.getElementById('btnmin');
btnmin.addEventListener('click', min);
const btnmulti = document.getElementById('btnmulti');
btnmulti.addEventListener('click', multi);
const btndivid = document.getElementById('btndivid');
btndivid.addEventListener('click', divid);
