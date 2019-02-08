## App Plan and Steps
- Setup React Front End using create-react-app
- Connect Google Books API - fetch request to obtain data
- Add conditionals to check for valid data, including no search results
- Add tests using Enzyme and Jess
- Deploy to Heroku

## Refactor
 - SearchBooks Component: I have attempted to implement the single responsibility principle in the following manner:
    - The existing code in the SearchBooks (parent) component has been broken  out to render a SearchBar Component that updates state of the books array and sends it back to the parent component. The parent component then renders the Books component (which handles the display).

    - SearchBar Component:  handles the searchInput and calls the BookService function to fetch data.

    - Books Component: (see below under DisplayBooks)

 - DisplayBooks Component - In order to implement the single responsibility principle and also remove duplication, I have attempted the following:
   - The Books Component has a primary check for data from the API and if found, calls the Display Component to display data
   - The Display Component handles the check for validity of data and calls the DataService Component to display data (if valid)  

 - Error handling - if API n/a or user's computer is
  - I use a tool called react-detect-offline tool in App.js to check if the user's computer is offline. If yes, an error message is displayed.
  - To add error handling in a situation where the Google Books API link sends an error response, I have tried to check for response.ok in BookService (which fetches the data), and this throws an error should an error response be received from the API call. 

 - Testing
  - I have attempted to write some more tests for the event handler and to also check if all the components are rendering correctly without crashing. Unfortunately, given my limited experience with writing tests and time constraints, I wasnt able to complete this satisfactorily. I really hope to work on developing this skill and write better tests.
