$(document).ready(function() {
  var $textArea = $('#exampleTextArea1');
  var $button = $('#publishButton');
  // Eventos
  $textArea.on('input', function() {
    if ($(this).val() !== '') {
      console.log($(this).val().length);
      $button.removeAttr('disabled');
    } else {
      $button.attr('disabled', true);
    }
  });
  if ($button.attr('disabled') !== true) {
    $button.on('click', function(event) {
      event.preventDefault();
      var $divsContainer = $('#divs-container');
      var $div = $('<div></div>');
      var $post = $textArea.val();
      $div.append($post);
      $divsContainer.append($div);
      $div.addClass('divText');
    });
  }
});
// console.log($(this).val().length);
// if ($(this).val().length < 1) {
//   $button.attr('disabled', true);
// }
