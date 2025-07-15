const myLibrary = [];

function Book(title, author, year, isRead) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBook(title, author, year, isRead) {
  const book = new Book(title, author, year, isRead);
  myLibrary.push(book);
}

/******************************************************************************/
// Testing
addBook("The Fellowship of the Ring", "J. R. R. Tolkien", 1954, true);
addBook("The Two Towers", "J. R. R. Tolkien", 1954, false);
addBook("The Return of the King", "J. R. R. Tolkien", 1954, false);

console.log(myLibrary);
