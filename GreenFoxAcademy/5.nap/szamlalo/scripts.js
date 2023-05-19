let count = 0;

$('button').on('click', function() {
  count += 1; 
  $('#counter').text(count); 
});