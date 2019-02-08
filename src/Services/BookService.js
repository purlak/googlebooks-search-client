const api_url = 'https://www.googleapis.com/books/v1';
const api_key = process.env.REACT_APP_API_KEY;

const BookService = {
  fetchBooks (query) {
    return fetch (`${api_url}/volumes?q=${query}&key=${api_key}`)
    .then (res => {
      if (res.ok) {
        return res.json()
      }
      else {
        throw Error(`Request rejected with status ${res.status}.`);
      }
    })
  }
}
export default BookService;
