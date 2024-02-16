class Library {
  constructor() {
    this.library = new Array();
  }

  // add book
  addBook(book) {
    if(this.library.some(existingBook => existingBook.getTitle() === book.getTitle()) && this.library.some(existingBook => existingBook.getAuthor() === book.getAuthor())) {
        alert("This book already exists in your library.");
    } else if (this.library.some(existingBook => existingBook.getID() === book.getID())) {
        alert("this ID is already registered.");
    } else {
        this.library.push(book);
    }
}

  // remove book
  removeBook(bookID) {
    for (let i = 0; i < this.library.length; i++) {
      if (this.library[i].getID() === bookID) {
        this.library.splice(i, 1);
        return;
      } else {
        alert("Book not found");
      }
    }
  }
  
  updateBook(bookID, newBook) { 

    if(this.library.some(existingBook => existingBook.getTitle() === newBook.getTitle()) && this.library.some(existingBook => existingBook.getAuthor() === newBook.getAuthor())) {
      alert("This book already exists in your library.");
    } else {
      if (this.library.some(existingBook => existingBook.getID() === newBook.getID())){
        for (let i = 0; i < this.library.length; i++) {
          if (this.library[i].getID() === bookID) {
            this.library[i] = newBook;
          } 
        }
      } else {
        alert("Book not found");
      }
    }
  }
  
  // list books
  listBooksByTitle() {
    let lista = '';
    this.library.forEach((book) => {
      lista += book.info();
    });
    return lista;
  }

  /*
    // Buscar libro
  searchByTitle(title) {
    for (let i = 0; i <= this.library.length; i++) {
      if (this.library[i].getTitle() === title) {
        return this.library[i];
      }
    }

    return ("Book not found");
  }
  */
}