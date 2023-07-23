document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded
  
    const songList = document.getElementById("songList"); // Get the unordered list
  
    songList.addEventListener("click", function (event) {
      // Add a click event listener to the list
  
      const clickedItem = event.target; // Get the clicked item within the list
      console.log("Hello world");
  
      if (clickedItem.tagName === "LI") {
        // If the clicked item is a list item (LI element)
  
        alert(`You clicked: ${clickedItem.textContent}`); // Show an alert with the clicked song text
      }
    });
  });
  