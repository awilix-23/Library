const myLibrary = [];

function Book(title, author, year, isRead)
{
  this.title = title;
  this.author = author;
  this.year = year;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBook(title, author, year, isRead)
{
  const book = new Book(title, author, year, isRead);
  myLibrary.push(book);
}
/******************************************************************************/
/* Display */
function Display()
{
  const library = document.querySelector('#library');

  for (i = 0; i <= myLibrary.length - 1; i++) {
    const bookContainer = document.createElement('div');
    bookContainer.className = "book";

    const title = document.createElement('h2');
    title.textContent = myLibrary[i].title;
    bookContainer.appendChild(title);
    const author = document.createElement('h3');
    author.textContent = `By ${myLibrary[i].author}`;
    bookContainer.appendChild(author);
    const year = document.createElement('p');
    year.textContent = `Year Published: ${myLibrary[i].year}`;
    bookContainer.appendChild(year);

    library.appendChild(bookContainer);
  }
}
/******************************************************************************/
/* Testing */
addBook("The Fellowship of the Ring", "J. R. R. Tolkien", 1954, true);
addBook("The Two Towers", "J. R. R. Tolkien", 1954, false);
addBook("The Return of the King", "J. R. R. Tolkien", 1954, false);

Display();
