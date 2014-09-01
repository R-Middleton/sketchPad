$(document).ready(function() {

    /* Create Square Container div to hold the grid */
    var $divContainer = $("<div class='squareContainer'></div>");
    $("body").append($divContainer);

    for (i = 0; i < 1024; i++) {
        $(".squareContainer").append('<div class="square" ></div>');
    };

    $("#newGrid").bind('click', function() {
        var $gridHeight = prompt("Enter the desired Height of new grid");
        var $gridSize = $gridHeight * $gridHeight;
        $(".square").remove();
        for (i = 0; i < $gridSize; i++) {
            $(".squareContainer").append('<div class="square" ></div>');
        };
    });

    //Using this method instead of hover to allow mouseover on dynamicly added elements
    $(document).on("mouseover", ".square", function() {
            $(this).addClass("selectedSquare");
        });

});
