const api_url = 'https://www.googleapis.com/books/v1'
const api_key = process.env.REACT_APP_API_KEY;

const BookService = {
  fetchBooks: () => {
    return fetch (`${api_url}/volumes?q=${query}&key=${api_key}`)
    .then (res => res.json())
  }
}

export default BookService;
