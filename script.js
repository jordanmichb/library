const info = document.querySelector(".info");
const menuBtn = document.querySelector(".menu-btn");
const totalBooks = document.querySelector('#total-books');
const booksRead = document.querySelector('#books-read');
const booksUnread = document.querySelector('#books-unread');
const totalPages = document.querySelector('#total-pages');
const pagesRead = document.querySelector('#pages-read');
const pagesUnread = document.querySelector('#pages-unread');
const totalGenres = document.querySelector('#total-genres');

const stats = new Map([
    ['totalBooks', 0],
    ['booksRead', 0],
    ['booksUnread', 0],
    ['totalPages', 0],
    ['pagesRead', 0],
    ['pagesUnread', 0],
    ['totalGenres', 0],

]);

function updateStats(book) {
    stats.set('totalBooks', stats.get('totalBooks') + 1);
    book.hasRead ? stats.set('booksRead', stats.get('booksRead') + 1)
                 : stats.set('booksUnread', stats.get('booksUnread') + 1);
    stats.set('totalPages', stats.get('totalBooks') + book.pageCount);
}


menuBtn.addEventListener('click', () => {
    info.classList.toggle('expand');
})

const booksList = [];

function Book(title, author, pageCount, genre, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.hasRead = hasRead;
}

const book1 = new Book('Book1', 'Jordan Ballard', 900, 'Fantasy', true);
const book2 = new Book('Book2', 'Trenten Nash', 407, 'Horror', false);
const book3 = new Book('Book3', 'Trier Perry', 564, 'Action', true);
const book4 = new Book('Book4', 'Jennifer Satterfield', 3623, 'Adventure', true);
const book5 = new Book('Book5', 'Meghan Ballard', 765, 'Fantasy', false);
const book6 = new Book('Book6', 'Kitty Cat', 876, 'Action', true);
booksList.push(book1);
booksList.push(book2);
booksList.push(book3);
booksList.push(book4);
booksList.push(book5);
booksList.push(book6);

function addBookToLibrary(book) {
    updateStats(book);
    booksList.push(book);
}


// function getStats() {
//     let numBooks = 0; let numBooksRead = 0;
//     let numBooksUnread = 0; let numPages = 0;
//     let numPagesRead = 0; let numPagesUnread = 0;
//     let numGenres = 0;

//     for (const book of booksList) {
//         totalBooks++;
//     }
//     return totalBooks;
// }

function displayStats() {
    
}

function displayBooks() {
    const bookcase = document.querySelector(".bookcase");
    for (const book of booksList) {
        const newBook = document.createElement("tr");
        newBook.classList.add('book', 'card');

        const title = document.createElement('th');
        title.setAttribute('scope', 'row');
        title.classList.add('book-title');
        title.textContent = book.title;

        const author = document.createElement('td');
        author.classList.add('author');
        author.textContent = book.author;

        const pageCount = document.createElement('td');
        pageCount.classList.add('page-count');
        pageCount.textContent = book.pageCount;

        const genre = document.createElement('td');
        genre.classList.add('genre');
        genre.textContent = book.genre;

        const hasRead = document.createElement('td');
        hasRead.classList.add('has-read');
        hasRead.textContent = book.hasRead ? 'Completed' : 'Not Finished';

        const del = document.createElement('td');
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('delete-btn');

        del.appendChild(button);

        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pageCount);
        newBook.appendChild(genre);
        newBook.appendChild(hasRead);
        newBook.appendChild(del);

        bookcase.appendChild(newBook);
    }
}

displayBooks();

