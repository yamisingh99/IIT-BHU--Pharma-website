// Get the search input element
var searchInput = document.getElementById('search-input');

// Get the search results element
var searchResults = document.getElementById('search-results');

// Add event listener for the search button
var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', performSearch);

// Function to perform the search
function performSearch() {
  // Get the search query
  var query = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = '';
  // Perform your search logic here
  // For example, you can fetch search results from an API
  // and display them in the searchResults element
  // Dummy search results
  var dummyResults = [
    'Search Result 1',
    'Search Result 2',
    'Search Result 3'
  ];
  // Display the search results
  dummyResults.forEach(function(result) {
    var resultItem = document.createElement('p');
    resultItem.textContent = result;
    searchResults.appendChild(resultItem);
  });
}
