/**
 * @example
 * const book = new Book("Around the World in 80 Days");
 * book.name // "Around the World in 80 Days"
 */
class Book {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class BookShelf implements IterableIterator<Book> {
  private books: Book[];
  private lookingAt: number = -1; // 先にインクリメントするので-1から始める
  constructor() {
    this.books = [];
  }
  appendBook(book: Book): void {
    this.books.push(book);
  }
  next(): IteratorResult<Book> {
    if (this.lookingAt === this.books.length - 1) {
      return { done: true, value: this.books[this.lookingAt] };
    }

    this.lookingAt++;
    return { done: false, value: this.books[this.lookingAt] };
  }

  [Symbol.iterator](): BookShelf {
    return this;
  }
}

function main() {
  const bookShelf = new BookShelf();
  bookShelf.appendBook(new Book('Around the World in 80 Days'));
  bookShelf.appendBook(new Book('Bible'));
  bookShelf.appendBook(new Book('Cinderella'));
  bookShelf.appendBook(new Book('Daddy-Long-Legs'));

  for (const book of bookShelf) {
    console.log(book.name);
  }
}

main();
