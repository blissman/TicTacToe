$(document).on('ready', function() {
  var turn = 0;

  $('td').on('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    if ( turn % 2 ) {
      self.html('O').addClass('o');
    } else {
      self.html('X').addClass('x');
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
