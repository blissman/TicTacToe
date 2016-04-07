$(document).on('ready', function() {
  var turn = 0;
  var xSquares = [];
  var oSquares = [];

  $(document).on('keypress', function(e) {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    if (e.which === 113 && $("#cell-2").hasClass("")) {
      var self = $("#cell-2");
    }
    else if (e.which === 119 && $("#cell-7").hasClass("")) {
      var self = $("#cell-7");
    }
    else if (e.which === 101 && $("#cell-6").hasClass("")) {
      var self = $("#cell-6");
    }
    else if (e.which === 97 && $("#cell-9").hasClass("")) {
      var self = $("#cell-9");
    }
    else if (e.which === 115 && $("#cell-5").hasClass("")) {
      var self = $("#cell-5");
    }
    else if (e.which === 100 && $("#cell-1").hasClass("")) {
      var self = $("#cell-1");
    }
    else if (e.which === 122 && $("#cell-4").hasClass("")) {
      var self = $("#cell-4");
    }
    else if (e.which === 120 && $("#cell-3").hasClass("")) {
      var self = $("#cell-3");
    }
    else if (e.which === 99 && $("#cell-8").hasClass("")) {
      var self = $("#cell-8");
    }
    else {
      var self = "null"
    }

    if ( self !== "null" ) {
      if ( turn % 2 ) {
        self.html('<img src=cat.png height="100" width="100">').addClass('o');
        //get value of square from id and push to oSquares array
        oSquares.push(parseInt(self.attr('id').split('')[5]));
      } else {
        self.html('<img src=raccoon.png height="100" width="100">').addClass('x');
        //get value of square from id and push to xSquares array
        xSquares.push(parseInt(self.attr('id').split('')[5]));
      }

      turn++;
      if ( turn >= 5 ) {
        checkForWinner();
      }
    }
  });

  $('td').on('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    if ( turn % 2 ) {
      self.html('<img src=cat.png height="100" width="100">').addClass('o');
      //get value of square from id and push to oSquares array
      oSquares.push(parseInt(self.attr('id').split('')[5]));
    } else {
      self.html('<img src=raccoon.png height="100" width="100">').addClass('x');
      //get value of square from id and push to xSquares array
      xSquares.push(parseInt(self.attr('id').split('')[5]));
    }

    self.off('click');
    turn++;
    if ( turn >= 5 ) {
      checkForWinner();
    }
  });

    function resetGame() {
      location.reload();
    }

    function checkForWinner() {

        for ( var i = 0; i < xSquares.length; i++ ) {
          for ( var j = i + 1; j < xSquares.length; j++ ) {
            for ( var k = j + 1; k < xSquares.length; k++ ) {
              if ( xSquares[i] + xSquares[j] + xSquares[k] === 15 ) {
                alert("Raccoons are the winners!");
                resetGame();
                return;
              }
            }
          }
        }

        for ( var i = 0; i < oSquares.length; i++ ) {
          for ( var j = i+1; j < oSquares.length; j++ ) {
            for ( var k = j+1; k < oSquares.length; k++ ) {
              if (oSquares[i] + oSquares[j] + oSquares[k] === 15) {
                alert("Cats are the winners!");
                resetGame();
                return;
              }
            }
          }
        }

        if ( turn === 9 ) {
          alert( "Everybody loses! Christmas is cancelled!" )
          resetGame();
        }

  }
});
