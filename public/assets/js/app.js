$(document).ready(function() {

    $("#change-devoured").on("submit", function(event) {
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
  
    $("#testButton").on("submit"), function(event) {
        alert("test works");
    }

    $("#create-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("submit here");
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim(),
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
  