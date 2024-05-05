import { updateStats, displayStats, updateStatsToggleRead } from './stats.js'

// List of all books in the library
const booksList = [];

// Book object constructor
function Book(title, author, pageCount, genre, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.hasRead = hasRead;
}

/*
* Starter books to populate table
*/
const book1 = new Book('Farenheit 451', 'Ray Bradbury', 156, 'Science Fiction', true);
const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, 'Fantasy', false);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'Southern Gothic', false);
const book4 = new Book('The Stand', 'Stephen King', 1152, 'Horror', true);
const book5 = new Book('The Lion, the Witch, and the Wardrobe', 'C.S. Lewis', 172, 'Fantasy', true);
const book6 = new Book('The Eye of the World', 'Robert Jordan', 782, 'Fantasy', true);
booksList.push(book1);
booksList.push(book2);
booksList.push(book3);
booksList.push(book4);
booksList.push(book5);
booksList.push(book6);

/*
* Get user input from modal and add new book to the list
*/
function addBookToLibrary() {
    const form = document.querySelector('#book-form');
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    const pages = document.querySelector('#page-count-input').value;
    const genre = document.querySelector('#genre-input').value;
    const read = document.querySelector('#has-read-input').checked;
    // Remove all form values
    form.reset();

    const newBook = new Book(title, author, pages, genre, read);
    booksList.push(newBook);

    return newBook
}

/*
* Create a new table entry for the added book
*/
function displayNewBook(book) {
    const bookcase = document.querySelector(".bookcase");
    // Create table row
    const bookRow = document.createElement("tr");
    bookRow.classList.add('book', 'card');
    // Create title td
    const title = document.createElement('th');
    title.setAttribute('scope', 'row');
    title.classList.add('book-title');
    title.textContent = book.title;
    // Create author td
    const author = document.createElement('td');
    author.classList.add('author');
    author.textContent = book.author;
    //Create page count td
    const pageCount = document.createElement('td');
    pageCount.classList.add('page-count');
    pageCount.textContent = book.pageCount;
    // Create genre td
    const genre = document.createElement('td');
    genre.classList.add('genre');
    genre.textContent = book.genre;
    // Create has read td with button
    const readBtn = document.createElement('button');
    readBtn.classList.add('read-btn');
    readBtn.textContent = book.hasRead ? 'Read' : 'Not Read';
    readBtn.addEventListener('click', (e) => toggleHasRead(e, book));

    const hasRead = document.createElement('td');
    hasRead.classList.add('has-read');
    
    hasRead.appendChild(readBtn);

    // Create delete td with button and SVG
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttributeNS(null, 'd', 'M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z');
    svgPath.classList.add('delete-btn');

    const delSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    delSvg.setAttribute('viewBox', '0 0 24 24');
    delSvg.classList.add('delete-btn');

    const delBtn = document.createElement('button');
    delBtn.setAttribute('type', 'button');
    delBtn.classList.add('delete-btn', 'outer');
    delBtn.addEventListener('click', (e) => deleteBook(e, book, bookRow));

    const del = document.createElement('td');  

    delSvg.appendChild(svgPath);
    delBtn.appendChild(delSvg);
    del.appendChild(delBtn);

    bookRow.appendChild(title);
    bookRow.appendChild(author);
    bookRow.appendChild(pageCount);
    bookRow.appendChild(genre);
    bookRow.appendChild(hasRead);
    bookRow.appendChild(del);

    bookcase.appendChild(bookRow);
}

/*
* Event listener for modal to add and display new books
*/
document.querySelector('#submit-book').addEventListener('click', (e) => {
    const dialog = document.querySelector('.add-dialog');
    const newBook = addBookToLibrary();
    displayNewBook(newBook);
    updateStats(newBook, e.target);
    displayStats();
    dialog.close();
})

/*
* Callback function for read button event listener
* Toggle has read or has not read
*/
function toggleHasRead(e, book) {
    if (e.target.innerText === 'Read') {
        e.target.innerText = 'Not Read';
        book.hasRead = false;
    } else {
        e.target.innerText = 'Read';
        book.hasRead = true;
    }
    updateStatsToggleRead(book);
    displayStats();          
}

/*
* Callback function for delete button event listener
* Delete the book from booksList array and remove its DOM element in table
*/
function deleteBook(e, book, bookRow) {
    updateStats(book, e.target);
    displayStats();
    // Get book array index and splice to delete
    const idx = booksList.indexOf(book);
    booksList.splice(idx, 1);
    // Remove from table
    bookRow.remove();
}

/*
* Loop through all books in list and create DOM element
* in the table for each one
*/
function displayBooks() {
    for (const book of booksList) {
        displayNewBook(book);
        updateStats(book);
    }
    displayStats();
}

export { displayBooks };