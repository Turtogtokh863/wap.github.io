$(document).ready(function () {
    let gameInProgress = false;
    let gameLost = false;
    $("div#start").click(function () {
        if (!gameInProgress) {
            gameInProgress = true;
            gameStart();
        } else {
            gameRestart();
        }
    });

    function gameStart() {
        $("div.boundary").mouseover(function () {
            if (gameInProgress) {
                $("#status").text("You lose");
                gameLost = true;
                $("div.boundary").addClass("youlose");
            }
        });
        $("#maze").mouseleave(function () {
            if (gameInProgress) {
                $("#status").text("You lose");
                gameLost = true;
                $("div.boundary").addClass("youlose");
            }
        });
        $("#end").mouseenter(function () {
            if (!gameLost && gameInProgress) {
                alert("You win!");
                gameInProgress = false;
            }

        });
    }

    function gameRestart() {
        gameLost = false;
        $("div.boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin.");
    }
});