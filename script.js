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

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

// List of all books in the library
// const booksList = [];

// function Book(title, author, pageCount, genre, hasRead) {
//     this.title = title;
//     this.author = author;
//     this.pageCount = pageCount;
//     this.genre = genre;
//     this.hasRead = hasRead;
// }

// const book1 = new Book('Book1', 'Jordan Ballard', 900, 'Fantasy', true);
// const book2 = new Book('Book2', 'Trenten Nash', 407, 'Horror', false);
// const book3 = new Book('Book3', 'Trier Perry', 564, 'Action', true);
// const book4 = new Book('Book4', 'Jennifer Satterfield', 3623, 'Adventure', true);
// const book5 = new Book('Book5', 'Meghan Ballard', 765, 'Fantasy', false);
// const book6 = new Book('Book6', 'Kitty Cat', 876, 'Action', true);
// booksList.push(book1);
// booksList.push(book2);
// booksList.push(book3);
// booksList.push(book4);
// booksList.push(book5);
// booksList.push(book6);


// function addBookToLibrary(book) {
//     booksList.push(book);
// }



// function displayBooks() {
//     const bookcase = document.querySelector(".bookcase");
//     for (const book of booksList) {
//         const newBook = document.createElement("tr");
//         newBook.classList.add('book', 'card');

//         const title = document.createElement('th');
//         title.setAttribute('scope', 'row');
//         title.classList.add('book-title');
//         title.textContent = book.title;

//         const author = document.createElement('td');
//         author.classList.add('author');
//         author.textContent = book.author;

//         const pageCount = document.createElement('td');
//         pageCount.classList.add('page-count');
//         pageCount.textContent = book.pageCount;

//         const genre = document.createElement('td');
//         genre.classList.add('genre');
//         genre.textContent = book.genre;

//         const hasRead = document.createElement('td');
//         hasRead.classList.add('has-read');
//         hasRead.textContent = book.hasRead ? 'Completed' : 'Not Finished';

//         const del = document.createElement('td');
//         const button = document.createElement('button');
//         button.setAttribute('type', 'button');
//         button.classList.add('delete-btn');

//         del.appendChild(button);

//         newBook.appendChild(title);
//         newBook.appendChild(author);
//         newBook.appendChild(pageCount);
//         newBook.appendChild(genre);
//         newBook.appendChild(hasRead);
//         newBook.appendChild(del);

//         bookcase.appendChild(newBook);
//     }
// }

displayBooks();

