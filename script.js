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
function Display(index)
{
  const library = document.querySelector('#library');

  const bookContainer = document.createElement('div');
  bookContainer.className = "book";

  const title = document.createElement('h2');
  title.textContent = myLibrary[index].title;
  bookContainer.appendChild(title);
  const author = document.createElement('h3');
  author.textContent = `By ${myLibrary[index].author}`;
  bookContainer.appendChild(author);
  const year = document.createElement('p');
  year.textContent = `Year Published: ${myLibrary[index].year}`;
  bookContainer.appendChild(year);

  library.appendChild(bookContainer);
}

const dialog = document.querySelector('.addBook');

const showDialog = document.querySelector('#toolbar > button');
const closeDialog = document.querySelector('dialog button');
showDialog.addEventListener('click', () => dialog.showModal());
closeDialog.addEventListener('click', () => dialog.close());

const submitDialog = document.querySelector('.submit');
const submitTitle = document.querySelector('#title');
const submitAuthor = document.querySelector('#author');
const submitYear = document.querySelector('#year');
submitDialog.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(submitTitle.value, submitAuthor.value, submitYear.value, false);
  Display(myLibrary.length - 1);
  dialog.close();
});
/******************************************************************************/
/* Testing */
addBook("The Fellowship of the Ring", "J. R. R. Tolkien", 1954, true);
addBook("The Two Towers", "J. R. R. Tolkien", 1954, false);
addBook("The Return of the King", "J. R. R. Tolkien", 1954, false);

for (i = 0; i <= myLibrary.length - 1; i++) {
  Display(i); // Initialize
}
