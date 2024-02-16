class Book {
    constructor(id, title, author, genre, pages, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.status = status;
    }

    getID() {
        return this.id;
    }

    // Title
    getTitle() {
        return this.title;
    }

    // Author
    getAuthor() {
        return this.author;
    }

    // Genre
    getGenre() {
        return this.genre;
    }

    // Pages
    getPages() {
        return this.pages;
    }

    // Status
    getStatus() {
        return this.status;
    }

    // Info
    info() {
        return `${this.title} by ${this.author} the status is ${this.status}. <br>`; 
    }
}