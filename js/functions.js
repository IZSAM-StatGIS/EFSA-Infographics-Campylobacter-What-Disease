const bodyEl = document.body;
let JSON_contents;

fetch('contents.json').then(response => {
    if (!response.ok) { throw new Error("HTTP error " + response.status)}
    return response.json();
  }).then(json => {
    JSON_contents = json;
  }).catch((err) =>{
    console.log(err)
  });

function openSecondLevel(elem) {

  let htmlIw = document.querySelector('.infographics-wrap');
  let otherHtmlElem = htmlIw.querySelector('div:not(#'+elem.parentElement.id+')');
  let htmlElem = document.querySelector('#'+elem.parentElement.id);
  let slModal = document.querySelector('.sl-modal');

  otherHtmlElem.classList.add('fl-box-closed');
  setTimeout(() => {htmlElem.classList.add('opacity-0')}, 290);
  setTimeout(() => {htmlElem.classList.add('d-none')}, 400);
  setTimeout(() => {slModal.classList.add('sl-modal-inn')}, 400);
  setTimeout(() => {slModal.classList.add('opacity-1')}, 410);
}

function closeSecondLevel() {
  let htmlIw = document.querySelector('.infographics-wrap');
  let otherHtmlElem = htmlIw.querySelector('div:not(#fb1)');
  let htmlElem = document.querySelector('#fb1');
  let slModal = document.querySelector('.sl-modal');

  slModal.classList.remove('opacity-1');
  setTimeout(() => {slModal.classList.remove('sl-modal-inn')}, 200);
  setTimeout(() => {htmlElem.classList.remove('d-none')}, 300);
  setTimeout(() => {htmlElem.classList.remove('opacity-0')}, 400);
  setTimeout(() => {otherHtmlElem.classList.remove('fl-box-closed');}, 600);

}


function openDetailLevel(elem) {

  let slModal = document.querySelector('.sl-modal');
  let dModal = document.querySelector('.d-modal');
  let htmlElem = document.querySelector('#'+elem.parentElement.id);
  let otherElemCollection = slModal.querySelectorAll('div:not(#'+elem.parentElement.id+')');

  otherElemCollection.forEach((item) => { item.classList.add('sl-box-closed'); });
  htmlElem.classList.add('sl-box-inn');
  setTimeout(() => {htmlElem.classList.add('opacity-0')}, 300);
  setTimeout(() => {dModal.classList.add('d-block')}, 350);
  setTimeout(() => {dModal.classList.add('opacity-1')}, 400);
}

function closeDetailLevel(){
  let slModal = document.querySelector('.sl-modal');
  let dModal = document.querySelector('.d-modal');
  let htmlElem = document.querySelector('#slb2');
  let otherElemCollection = slModal.querySelectorAll('div:not(#slb2)');

  dModal.classList.remove('opacity-1');
  setTimeout(() => {dModal.classList.remove('d-block')}, 300);
  setTimeout(() => {htmlElem.classList.remove('opacity-0')}, 300);
  setTimeout(() => {
    otherElemCollection.forEach((item) => { item.classList.remove('sl-box-closed'); });
    htmlElem.classList.remove('sl-box-inn');
  }, 500);
}
