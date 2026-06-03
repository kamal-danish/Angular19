document.querySelector('#grandparent')
.addEventListener('click', ()=> {
    console.log('grandparent element clicked');
},false);

document.querySelector('#parent')
.addEventListener('click',(e)=> {
    console.log('parent element clicked');
// e.stopPropagation();// to stop event bubbling
},false);

document.querySelector('#child')
.addEventListener('click', ()=> {
    console.log('child element clicked');
},false);

// event bubbling is a javascript technique when any event of child element its bubble child to parent 
// thats call event bubbing and for this bubbling used in parent and handle this event is called event delegation



// event capturing/tricking

// document.querySelector('#grandparent')
// .addEventListener('click', ()=> {
//     console.log('grandparent element clicked');
// },true);

// document.querySelector('#parent')
// .addEventListener('click',()=> {
//     console.log('parent element clicked');
// },true);

// document.querySelector('#child'),
// .addEventListener('click', ()=> {
//     console.log('child element clicked');
// },true);