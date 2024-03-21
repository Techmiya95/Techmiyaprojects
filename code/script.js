$(document).ready(function(){
    $('.mobile-menu-toggle').click(function(){
      $('.mobile-nav').slideToggle();
      $(this).toggleClass('change');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the input element and button
    var input = document.getElementById("searchInput");
    var button = document.getElementById("searchButton");
  
    // Add event listener to button
    button.addEventListener("click", function() {
      // Get the search query
      var query = input.value.trim();
  
      // Perform search (replace this with your actual search functionality)
      if (query !== "") {
        alert("Performing search for: " + query);
        // Here you can replace the alert with your actual search logic
      } else {
        alert("Please enter a search query.");
      }
    });
  });
  