$(document).on('ready', function() {
  var turn = 0;
  var xSquares = [];
  var oSquares = [];

  $('td').on('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    if ( turn % 2 ) {
      self.html('O').addClass('o');
      //get value of square from id and push to oSquares array
      oSquares.push(parseInt(self.attr('id').split('')[5]));
    } else {
      self.html('X').addClass('x');
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
                alert("X is the winner!");
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
                alert("O is the winner!");
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
