const scroreinput1 = document.getElementById('num1') as HTMLInputElement;
const scroreinput2 = document.getElementById('num2') as HTMLInputElement;
const result = document.getElementById('result') as HTMLInputElement;
function plus(): void {
    const anwser: number = Number(scroreinput1.value) + Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} + ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'blue';
}

function min(): void {
    const anwser: number = Number(scroreinput1.value) - Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} - ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'red';
}

function multi(): void {
    const anwser: number = Number(scroreinput1.value) * Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} * ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'purple';
}

function divid(): void {
    const anwser: number = Number(scroreinput1.value) / Number(scroreinput2.value);
    result.innerText = `${scroreinput1.value} / ${scroreinput2.value} = ${anwser}`;
    result.style.color = 'orange';
}

const btnplus = document.getElementById('btnplus') as HTMLButtonElement;
btnplus.addEventListener('click', plus);

const btnmin = document.getElementById('btnmin') as HTMLButtonElement;
btnmin.addEventListener('click', min);

const btnmulti = document.getElementById('btnmulti') as HTMLButtonElement;
btnmulti.addEventListener('click', multi);

const btndivid = document.getElementById('btndivid') as HTMLButtonElement;
btndivid.addEventListener('click', divid);