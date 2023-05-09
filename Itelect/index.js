// Check if the device is a mobile device
var isMobile = window.matchMedia("(max-width: 990px)").matches;

if (isMobile) {
  // Get the dropdown
  var dropdown = document.getElementsByClassName("nav-item");

  // Loop through all dropdowns and add the click event listener
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.querySelector(".dropdown-content");
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  // Close the dropdown when the user taps outside of it
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropdown-toggle")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var dropdownContent = dropdowns[i];
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          dropdownContent.parentElement.classList.remove("active");
        }
      }
    }
  });
}
