var names = ['Alíz', 'Bob', 'Karcsi', 'Betti'];

var $ul = $('<ul>');

names.forEach(function(name) {
  var $li = $('<li>').text(name);
  $ul.append($li);
});

$('body').append($ul);



let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

  $('.h1').text(additionalBlock.title);
  $('.p').text(additionalBlock.text);