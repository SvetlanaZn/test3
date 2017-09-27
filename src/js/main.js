const Arr = [
    'hello', '2', 'str', '55', '77'
];

const List = document.getElementById('list');
console.log(Arr.length);

Arr.forEach((elem)=>{
    let li = document.createElement('li');
    li.innerHTML = elem;
    List.appendChild(li);
})

var API = '7df5b1a49f0afeadc46bd4b4a11cab13';
var token = '77377393de77343f577d43588f84acfc9ac55f2ffb623f1bfd08189f6903c902';
var cardID = '591759dd6fca0d49fb979735';
var FULL_URL = 'https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&keykey=' + API + '&token=' + token;
console.log(FULL_URL);
let data = '';

fetch(FULL_URL)
    .then(function(response) {
        //alert(response.headers.get(‘Content-Type’)); // application/json; charset=utf-8
        //alert(response.status); // 200
        return response.json();
    })
    .then(function(json){
        data = json;
    })
setTimeout(()=>{
    let a = document.createElement('a');
    const inner = data.name;
    const href = data.url;

    a.innerHTML = inner;
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    List.appendChild(a);
}, 1300); 

const modalButton = document.getElementsByClassName('modal-button')[0];
const modalWin = document.getElementsByClassName('modalWin')[0];
const modalClose = document.getElementsByClassName('modal-close')[0];
const modalBack = document.getElementsByClassName('black-back')[0];

function modal(state) {
    modalWin.style.display = state;
}
modalButton.addEventListener('click', function(){
    modal('block');
})

modalClose.addEventListener('click', function(){
    modal('none');
})

modalBack.addEventListener('click', function(){
    modal('none');
})