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


function addBookToLibrary(book) {
    booksList.push(book);
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

export {displayBooks};