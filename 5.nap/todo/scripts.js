$('button').on('click', function() {
    let text = $('#todoInput').val();
    $('ul').append('<li>' + text + '</li>');
  });