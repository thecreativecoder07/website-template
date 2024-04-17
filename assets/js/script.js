  // JavaScript to toggle icon class
  document.getElementById("toggleButton").addEventListener("click", function () {
    var iconSpan = document.getElementById("toggleIcon");
    var icon = iconSpan.querySelector("i");

    if (icon.classList.contains("fa-bars")) {
        // Change to close button
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        // Change back to bars button
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

 // Get the current page URL
 var currentPage = window.location.pathname;

 // Select all navigation links
 var navLinks = document.querySelectorAll('.navlink');
 
 // Loop through each navigation link
 navLinks.forEach(function(link) {
     // Check if the link's href matches the current page URL
     if (link.getAttribute('href') === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('nav-active');
     }
 });
 
