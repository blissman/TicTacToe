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
      console.log(oSquares);
    } else {
      self.html('X').addClass('x');
      //get value of square from id and push to xSquares array
      xSquares.push(parseInt(self.attr('id').split('')[5]));
      console.log(xSquares);
    }

    self.off('click');

    turn++;

    if ( turn >= 4 ) {
        checkForWinner();
    }
  });

  function checkForWinner() {
    // Select all x's and sum. If any three elements === 15, then the user has won.
  }
});
