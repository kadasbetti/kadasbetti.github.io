$('#elso').on('click', () => {
    console.log("Igen, most rámkattintottál")
  });



  $('#masodik').on('click', () => {
    $('#elso').text("Gomb")
  });



  $('#harmadik').on('click', () => {
    $('button').css("background-color", "magenta")
  });

  $('#harmadik').on('click', function() {
    var color = $('#colorInput').val();
    $('#colorInput').css('background-color', color);
  });
