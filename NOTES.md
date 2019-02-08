## App Plan and Steps
- Setup React Front End using create-react-app
- Connect Google Books API - fetch request to obtain data
- Add conditionals to check for valid data, including no search results
- Add tests using Enzyme and Jest
- Deploy to Heroku

## Refactor - Process
 - SearchBooks Component: I have attempted to implement single responsibility principle in the following manner:
    - The existing code in the SearchBooks component has been refactored to render a SearchBar Component and Books Component.

      - SearchBar Component:  handles searchInput and calls the BookService function to fetch from API. Data is passed back to the parent component (SearchBooks) to update state.

      - Books Component: State is passed to Books Component for display. (see below notes under DisplayBooks).

 - DisplayBooks Component - In order to implement single responsibility principle and also remove duplication in the existing code related to conditional rendering, I have attempted the following:
   - Books Component does a primary check for data from the API and if data is found, renders the Display Component.
   - Display Component calls a function to check for validity of individual attributes (eg. title, author etc.) and uses  DataService to display valid data.  

 - Error handling - if API n/a or user's computer is offline:
    - I used a tool called react-detect-offline tool in App.js to check if the user's computer is offline. If offline, an error message is displayed.
    - To add error handling in a situation where the Google Books API request sends an error response, I included a check for response.ok in BookService - this throws an error should an error response be received from the API call.

 - Testing
    - I have attempted to write some more tests for the event handler (using snapshots) and to also check if all the components are rendering correctly without crashing. Unfortunately, given my limited experience with writing tests and time constraints, I wasn't able to complete this satisfactorily. I really hope to work on developing this skill and write better tests.
