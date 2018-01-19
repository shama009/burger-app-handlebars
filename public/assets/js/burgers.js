// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var devourState = {
            devoured: devour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed devoured to", devour);
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new Burger!!");
                // Reload the page to get the updated list
                location.reload();
            }
            );
    });

    $(".delete-all").on("click", function (event) {
        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted all Burgers!!");
                // Reload the page to get the updated list
                location.reload();
            }
            );

    });
});
