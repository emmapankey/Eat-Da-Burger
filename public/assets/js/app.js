$(document).ready(function() {

    $(".change-devoured-form").on("submit", function(event) {

      event.preventDefault();

      var id = $(this).data("id");
  
      var newBurgerState = {
          devoured: true
      }

      // Send the PUT request.
      $.ajax("/api/update/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger status to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  