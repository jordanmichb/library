// Stats object to keep track of all stats
const stats = {
    totalBooks:  0,
    booksRead: 0,
    booksUnread: 0,
    totalPages: 0,
    pagesRead: 0,
    pagesUnread: 0,
    totalAuthors: 0,
    totalGenres: 0,
};

// Keep track of number of authors and genres
const authors = {};
const genres = {};

/*
* Take a book and update stats based on book object properties
*/
function updateStats(book, target) {
    if (target === undefined || target.id === 'submit-book') {
        // Increment total books
        stats.totalBooks = stats.totalBooks + 1;
        // Increment read or unread depending on status
        book.hasRead ? stats.booksRead = stats.booksRead + 1
                     : stats.booksUnread = stats.booksUnread + 1;
        // Add page count to total pages
        stats.totalPages = stats.totalPages + Number(book.pageCount);
        // Increment read or unread depending on status
        book.hasRead ? stats.pagesRead = stats.pagesRead + Number(book.pageCount)
                     : stats.pagesUnread = stats.pagesUnread + Number(book.pageCount)

        // If author/genre is already in object, increment its value
        // Else add the new author/genre and increment total
        if (authors.hasOwnProperty(book.author)) {
            authors[book.author] = authors[book.author] + 1;
        } else {
            authors[book.author] = 1;
            stats.totalAuthors = stats.totalAuthors + 1;
        }

        if (genres.hasOwnProperty(book.genre)) {
            genres[book.genre] = genres[book.genre] + 1;
        } else {
            genres[book.genre] = 1;
            stats.totalGenres = stats.totalGenres + 1;
        }
    }
    else if (target.classList.contains('delete-btn')) {
        stats.totalBooks = stats.totalBooks - 1;

        book.hasRead ? stats.booksRead = stats.booksRead - 1
                     : stats.booksUnread = stats.booksUnread - 1;

        stats.totalPages = stats.totalPages - Number(book.pageCount);

        book.hasRead ? stats.pagesRead = stats.pagesRead - Number(book.pageCount)
                     : stats.pagesUnread = stats.pagesUnread - Number(book.pageCount)

        // If only one left of author/genre, delete key and decrement total
        // Else decrement number of that author/genre
        if (authors[book.author] === 1) {
            delete authors[book.author];
            stats.totalAuthors = stats.totalAuthors - 1;
        } else {
            authors[book.author] = authors[book.author] - 1;
        }

        if (genres[book.genre] === 1) {
            delete genres[book.genre];
            stats.totalGenres = stats.totalGenres - 1;
        } else {
            genres[book.genre] = genres[book.genre] - 1;
        }
    }
}

/*
* Called whena book's read statuss is toggled
*/
function updateStatsToggleRead(book) {
    // Toggled to read
    if (book.hasRead) {
        stats.booksRead = stats.booksRead + 1;
        stats.booksUnread = stats.booksUnread - 1;

        stats.pagesRead = stats.pagesRead + book.pageCount;
        stats.pagesUnread = stats.pagesUnread - book.pageCount;
    } else { // Toggled to unread
        stats.booksUnread = stats.booksUnread + 1;
        stats.booksRead = stats.booksRead - 1;

        stats.pagesUnread = stats.pagesUnread + book.pageCount;
        stats.pagesRead = stats.pagesRead - book.pageCount;
    }
}

/*
* Change each stats DOM element to display current stats
*/
function displayStats() {
    document.querySelector('#total-books').innerText = stats.totalBooks;
    document.querySelector('#books-read').innerText = stats.booksRead;
    document.querySelector('#books-unread').innerText = stats.booksUnread;
    document.querySelector('#total-pages').innerText = stats.totalPages;
    document.querySelector('#pages-read').innerText = stats.pagesRead;
    document.querySelector('#pages-unread').innerText = stats.pagesUnread;
    document.querySelector('#total-authors').innerText = stats.totalAuthors;
    document.querySelector('#total-genres').innerText = stats.totalGenres;
}

export { updateStats, displayStats, updateStatsToggleRead }