// List of all books in the library
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

    const bookRow = document.createElement("tr");
    bookRow.classList.add('book', 'card');

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
    const delSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svgPath.setAttributeNS(null, 'd', 'M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z');
    delSvg.setAttribute('viewBox', '0 0 24 24');
    button.setAttribute('type', 'button');
    button.classList.add('delete-btn');
    //button.innerText = 'X';


    //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>

    button.addEventListener('click', () => deleteBook(book, bookRow));

    delSvg.appendChild(svgPath);
    button.appendChild(delSvg);
    del.appendChild(button);

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
document.querySelector('#submit-new-book').addEventListener('click', () => {
    const newBook = addBookToLibrary();
    displayNewBook(newBook);
})

/*
* Delete the book from booksList array and remove its DOM element in table
*/
function deleteBook(book, bookRow) {
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
    for (const book of booksList)
        displayNewBook(book);
}

export { displayBooks };