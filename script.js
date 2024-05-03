import { displayBooks } from './library.js'

const info = document.querySelector(".info");
const menuBtn = document.querySelector(".menu-btn");

const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('dialog button');
const dialog = document.querySelector('.add-dialog');

const totalBooks = document.querySelector('#total-books');
const booksRead = document.querySelector('#books-read');
const booksUnread = document.querySelector('#books-unread');
const totalPages = document.querySelector('#total-pages');
const pagesRead = document.querySelector('#pages-read');
const pagesUnread = document.querySelector('#pages-unread');
const totalGenres = document.querySelector('#total-genres');

// Stats object to keep track of all stats
const stats = {
    totalBooks:  0,
    booksRead: 0,
    booksUnread: 0,
    totalPages: 0,
    pagesRead: 0,
    pagesUnread: 0,
    totalGenres: 0,

};

const genres = [];

/*
* Take a book and update stats based on book object properties
*/
function updateStats(book) {
    // Increment total books
    stats.totalBooks = stats.totalBooks++;
    // Increment read or unread depending on status
    book.hasRead ? stats.booksRead = stats.booksRead++
                 : stats.booksUnread = stats.booksUnread++;
    // Add page count to total pages
    stats.totalPAges = stats.totalPages + book.pageCount;
    // Increment read or unread depending on status
    book.hasRead ? stats.pagesRead = stats.pagesRead + book.pageCount
                 : stats.pagesUnread = stats.pagesUnread + book.pageCount
    // Add genre if new and increment total genres
    if (!genres.includes(book.genre)) {
        genres.push(book.genre);
        stats.totalGenre = stats.totalGenres + 1;
    }
}

/*
* Change each stats DOM element to display current stats
*/
function displayStats() {
    totalBooks.innerText = stats.totalBooks;
    booksRead.innerText = stats.booksRead;
    booksUnread.innerText = stats.booksUnread;
    totalPages.innerText = stats.totalPages;
    pagesRead.innerText = stats.pagesRead;
    pagesUnread.innerText = stats.pagesUnread;
    totalGenres.innerText = stats.totalGenres;
}

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
    dialog.close();
});

displayBooks();

