$(document).ready(function() {

    $("#devourSubmitButton").on("click", function(event) {

      // Make sure to preventDefault on a submit event.
      //event.preventDefault();

      var id = $(this).data("id");
  
      var newBurgerState = {
          devoured: true
      };

      // Send the PUT request.
      $.ajax("/api/update/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function (result) {
          // Reload the page to get the updated list
          // location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
  
      event.preventDefault();

  
      var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/create", {
        type: "POST",
        data: newBurger
      }).then (function(result) {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }).fail(function(err) {
          console.log(err)
          alert("this failed");
        });

      });

    });
  