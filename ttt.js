$(document).on('ready', function() {
  var turn = 0;
  var winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  $('td').on('click', function() {
    // this === DOM Element
    // $(this) === jQuery Object

    // Idempotent = Always get the same outcome
    // Memoization = Store a computed output for repeated use
    var self = $(this);

    // 0 % 2 === 0
    // 1 % 2 === 1
    // 2 % 2 === 0
    // 3 % 2 === 1
    // 4 % 2 === 0

    if ( turn % 2 ) {
      self.html('O').addClass('o');
    } else {
      self.html('X').addClass('x');
    }

    self.off('click');

    checkForWinner();

    turn++;
  });

  function checkForWinner() {
    // $('.x')
  }
});
