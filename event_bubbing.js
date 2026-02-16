document.querySelector('#grandparent')
.addEventListener('click', ()=> {
    console.log('grandparent element clicked');
},true);

document.querySelector('#parent')
.addEventListener('click',(e)=> {
    console.log('parent element clicked');
// e.stopPropagation();// to stop event bubbling
},false);

document.querySelector('#child')
.addEventListener('click', ()=> {
    console.log('child element clicked');
},false);



// event capturing/tricking

// document.querySelector('#grandparent')
// .addEventListener('click', ()=> {
//     console.log('grandparent element clicked');
// },true);

// document.querySelector('#parent')
// .addEventListener('click',()=> {
//     console.log('parent element clicked');
// },true);

// document.querySelector('#child')
// .addEventListener('click', ()=> {
//     console.log('child element clicked');
// },true);