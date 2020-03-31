// The Bookshelf class practices 'this' and prototypal classes made with the class keyword
class Bookshelf {
  constructor() {
    this.favouriteBooks = [];
  }

  // Functions within classes or defined on prototypes are called Methods
  addFavouriteBook(bookName) {
    if(!bookName.includes("Great")) {
      this.favouriteBooks.push(bookName);
    }
  }

  printFavouriteBooks() {
    // The String() call practices coercion since this.favouriteBooks.length is a Number
    console.log(`\nFavourite Books: ${String(this.favouriteBooks.length)}\n`);
    for(let bookName of this.favouriteBooks) {
      console.log(bookName);
    }
    console.log();
  }
}

const BOOK_API_URL = "https://some.url/api";

// Functions defined outside the scope of classes or their prototypes are just called Functions
function loadBooks(bookShelf) {
  // The cb passed into the fakeAjax function practices closure since bookShelf is out of scope
  fakeAjax(BOOK_API_URL, function processFavouriteBooks(bookNames) {
    for(let bookName of bookNames) {
      bookShelf.addFavouriteBook(bookName);
    }
    bookShelf.printFavouriteBooks();
  });
}

function fakeAjax(url,cb) {
  setTimeout(function fakeLoadingDelay(){
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS"
    ]);
  },1000);
}

const bookShelf = new Bookshelf();
loadBooks(bookShelf);
