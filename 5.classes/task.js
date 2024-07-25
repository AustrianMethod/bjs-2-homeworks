/*1 задача*/

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        if (this.state * 1.5 <= 100) { this.state *= 1.5 }
        else if (this.state * 1.5 > 100) { this.state = 100 };
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100; 
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
        this.author = author;
    }

}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
        this.author = author;
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
        this.author = author;
    }
}

/*2 задача*/

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        return findBook ? findBook : null;
    }

    giveBookByName(bookName) {
        let bookInd = this.books.findIndex(item => item.name === bookName ? true : false);
        return bookInd === -1 ? null : this.books.splice(bookInd, 1)[0];
    }
}

/*3 задача*/

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {
        };
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            this.marks[subject] ? this.marks[subject].push(mark) : this.marks[subject] = [mark];
        }
    }

    getAverageBySubject(sub) {
        return (this.marks[sub] ?
                this.marks[sub].reduce((sum, item) => sum + item , 0)/this.marks[sub].length : 0)
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        return (subjects.reduce((sum, item) => sum + this.getAverageBySubject(item), 0)/ subjects.length ?
                subjects.reduce((sum, item) => sum + this.getAverageBySubject(item), 0)/ subjects.length : 0)
    }
}
