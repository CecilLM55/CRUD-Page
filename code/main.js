const myLibrary = new Library();

// Add books to the library
const addBook = document.getElementById('btnAddBook');
addBook.addEventListener('click', () => {
  let title = document.getElementById('txtTitle').value;
  let id = document.getElementById('txtID').value;
  let author = document.getElementById('txtAuthor').value;
  let genre = document.getElementById('lstGenre').value;
  let pages = document.getElementById('txtPages').value;
  let status = document.getElementById('lstStatus').value;

  if(title === "" || id === "" || author === "" || genre === "" || pages === "" || status === "") {
    alert("Complete all the fields.");
    return;
  } else {
      let newBook = new Book(id, title, author, genre, pages, status);
      myLibrary.addBook(newBook);
      document.getElementById('divDetails').innerHTML = myLibrary.listBooksByTitle();
    }
  //document.getElementById('divDetails').innerHTML = '<p>Book added</p>';
});


// Remove book from the library
const removeBook = document.getElementById('btnRemoveBook');
removeBook.addEventListener('click', () => {
  let id = document.getElementById('txtID').value;
  myLibrary.removeBook(id);
  document.getElementById('divDetails').innerHTML = '<p>Book removed</p>';
  document.getElementById('divDetails').innerHTML = myLibrary.listBooksByTitle();
});

// Update books from the library

const updateBook = document.getElementById('btnEditBook');
updateBook.addEventListener('click', () => {
    let id = document.getElementById('txtID').value;
    let title = document.getElementById('txtTitle').value;
    let author = document.getElementById('txtAuthor').value;
    let genre = document.getElementById('lstGenre').value;
    let pages = document.getElementById('txtPages').value;
    let status = document.getElementById('lstStatus').value;
    if(title === "" || id === "" || author === "" || genre === "" || pages === "" || status === "") {
        alert("Complete all the fields.");
        return;
      } else {
    let newBook = new Book(id, title, author, genre, pages, status);
    myLibrary.updateBook(id, newBook);
    document.getElementById('divDetails').innerHTML = myLibrary.listBooksByTitle();
    }
});



