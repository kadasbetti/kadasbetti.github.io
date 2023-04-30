let color= 'purple';
let number = 10;
let word = 'cool';


if (color==='purple'){
    $('.no').css('background-color', 'purple');
}

if (number > 100) {
    $('.e').html('wow,de nagy szám');
  } 
  
  else {
    $('.e').html('ez csak egy közönséges szám');
  }

  if (word==='cool') {
    $('.s').html('A DOM Ereje');
  } 
  
  else {
    $('.w').html('A DOM Ereje');
  }