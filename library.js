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
    button.setAttribute('type', 'button');
    button.classList.add('delete-btn');
    button.innerText = 'X';

    button.addEventListener('click', () => deleteBook(book, bookRow));

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
* Event listener for modal to add new books
*/
document.querySelector('#submit-new-book').addEventListener('click', () => {
    const newBook = addBookToLibrary();
    displayNewBook(newBook);
})

/*
* Delete the book from booksList array and remove its DOM element in table
*/
function deleteBook(book, bookRow) {
    const idx = booksList.indexOf(book);
    console.log(idx)
    booksList.splice(idx, 1);
    bookRow.remove();
}

/*
* Loop through all books in list and create DOM element
* in the table for each one
*/
function displayBooks() {
    for (const book of booksList) {
        displayNewBook(book);
    }
}

export { displayBooks };