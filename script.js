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
function createElement(tag, className = '', text = '')
{
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createDialog({
  dialogSelector,
  openBtnSelector,
  closeBtnSelector,
  onSubmit})
{
  if (openBtnSelector != null) {
    const openBtn = document.querySelector(openBtnSelector);
    openBtn.addEventListener('click', () => dialog.showModal());
  }

  const dialog = document.querySelector(dialogSelector);
  const closeBtn = document.querySelector(closeBtnSelector);

  closeBtn.addEventListener('click', () => dialog.close());

  const submitBtn = dialog.querySelector('.submit');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    onSubmit(dialog);
    dialog.close();
  });
}

function Display(index)
{
  const library = document.querySelector('#library');
  const book = myLibrary[index];
  const bookContainer = createElement('div', 'book');

  const title = createElement('h2', '', book.title);
  const author = createElement('h3', '', book.author);
  const year = createElement('p', '', book.year);

  const readStatus = createElement('p', '', book.isRead ? 'Read' : 'Not Read');
  readStatus.addEventListener('click', () => {
    book.isRead = !book.isRead;
    refreshLibrary();
  })

  const delButton = createElement('button', 'delete', "Delete");
  delButton.addEventListener('click', () => {
    const dialog = document.querySelector('.delBook');
    dialog.querySelector('#bookID').value = book.id;
    dialog.showModal();
  })

  bookContainer.append(title, author, year, readStatus, delButton);
  library.appendChild(bookContainer);
}

function refreshLibrary()
{
  const library = document.querySelector('#library')
  library.innerHTML = '';

  for (let i = 0; i <= myLibrary.length - 1; i++) {
    Display(i);
  }
}

createDialog({
  dialogSelector: '.addBook',
  openBtnSelector: '#toolbar > button',
  closeBtnSelector: 'button.close',
  onSubmit: (dialog) => {
    const title = dialog.querySelector('#title').value;
    const author = dialog.querySelector('#author').value;
    const year = dialog.querySelector('#year').value;

    addBook(title, author, year, false);
    Display(myLibrary.length - 1);
  }
})

createDialog({
  dialogSelector: '.delBook',
  openBtnSelector: null,
  closeBtnSelector: 'button.close',
  onSubmit: (dialog) => {
    const uuid = dialog.querySelector('#bookID').value;
    const index = myLibrary.findIndex(book => book.id == uuid);
    myLibrary.splice(index, 1);
    refreshLibrary();
  }
})
/******************************************************************************/
/* Testing */
addBook("The Fellowship of the Ring", "J. R. R. Tolkien", 1954, true);
addBook("The Two Towers", "J. R. R. Tolkien", 1954, false);
addBook("The Return of the King", "J. R. R. Tolkien", 1954, false);

refreshLibrary();
