import { displayBooks } from './library.js'

const info = document.querySelector(".info");
const menuBtn = document.querySelector(".menu-btn");

const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('#close-modal');
const dialog = document.querySelector('.add-dialog');


/*
* Add click event listener to menu button to show or hide the sidebar
*/
menuBtn.addEventListener('click', () => {
    info.classList.toggle('expand');
})

/*
* Add click event listener to menu button to show or hide the modal
*/
addBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    document.querySelector('#book-form').reset();
    dialog.close();
});

displayBooks();

