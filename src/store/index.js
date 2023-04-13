import booksService from "../services/books.service.js";

class Store {
  constructor() {
    this.state = {
      books: [],
    };
  }
  async sync() {
    this.state.books = await booksService.getFromDb();
  }
}

export default Object.freeze(new Store());
