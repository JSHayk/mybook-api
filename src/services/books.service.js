class BooksService {
  async getFromDb() {
    try {
      return [];
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new BooksService();
