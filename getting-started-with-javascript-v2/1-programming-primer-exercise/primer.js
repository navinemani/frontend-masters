function addFavoriteBook(bookName) {
  if(!bookName.includes("Great")) {
    favouriteBooks.push(bookName);
  }
}

function printFavouriteBooks() {
  console.log(`\nFavourite Books: ${favouriteBooks.length}\n`);
  for(let bookName of favouriteBooks) {
    console.log(bookName);
  }
  console.log();
}

var favouriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavouriteBooks();
