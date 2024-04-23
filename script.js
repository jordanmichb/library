const info = document.querySelector(".info");
const menuBtn = document.querySelector(".menu-btn");

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

function addBookToLibrary() {

}

