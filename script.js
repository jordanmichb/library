const info = document.querySelector(".info");
const menuBtn = document.querySelector(".menu-btn");
const library = document.querySelector(".library");

menuBtn.addEventListener('click', () => {
    info.classList.toggle('collapsed');
})

const booksList = [];

function Book(title, author, pageCount, hasRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
}

const book1 = new Book('Book1', 'Jordan Ballard', 900, true);
const book2 = new Book('Book2', 'Trenten Nash', 407, false);
const book3 = new Book('Book3', 'Trier Perry', 564, true);
booksList.push(book1)
booksList.push(book2)
booksList.push(book3)

function addBookToLibrary(book) {
    booksList.push(book);
}

function displayBooks() {
    for (const book of booksList) {
        const newBook = document.createElement("div");
        newBook.classList.add('book', 'card');

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('delete-btn');

        const title = document.createElement('p');
        title.classList.add('book-title');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = book.author;

        const pageCount = document.createElement('p');
        pageCount.classList.add('page-count');
        pageCount.textContent = book.pageCount;

        const hasRead = document.createElement('p');
        hasRead.classList.add('has-read');
        hasRead.textContent = book.hasRead ? 'Completed' : 'Not Finished';

        newBook.appendChild(button);
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pageCount);
        newBook.appendChild(hasRead);

        library.appendChild(newBook);
    }
}

displayBooks();

