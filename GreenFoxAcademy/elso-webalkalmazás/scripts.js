let data = {
    photo: 'images/antelope-canyon.jpg',
    title: 'Aurora Borealis',
    description: 'This stunning natural light display is caused by collisions between electrically charged particles from the sun that enter the Earths atmosphere. The result is a breathtaking array of colors and patterns that dance across the night sky.'
  };

  $('#mainpicture').attr('src', data.photo);
  $('#picture-title').text(data.title);
  $('#picture-descripton').text(data.description);



  let currentPhoto = 0;
  let imagesData = [
    {title: 'Aurora Borealis', photo: 'images/aurora-borealis.jpg', description: 'This stunning natural light display is caused by collisions between electrically charged particles from the sun that enter the Earths atmosphere. The result is a breathtaking array of colors and patterns that dance across the night sky.'},
    {title: 'Biolominescent Beach', photo: 'images/bioluminescent-beach.jpg', description: 'This rare phenomenon occurs when millions of tiny organisms called dinoflagellates emit light through chemical reactions in their cells. When the waves crash onto the shore, the water glows an ethereal blue, creating a truly magical experience.'},
    {title: 'Cherry Blossom Trees', photo: 'images/cherry-blossom-trees.jpg', description: 'Every spring, the delicate pink and white blossoms of cherry trees transform parks and gardens around the world into a fairy tale-like wonderland. This beautiful sight is a symbol of the fleeting nature of life and the beauty of impermanence.'},
    {title: 'Great Barrier Reef', photo: 'images/great-barrier-reef.jpg', description: 'The worlds largest coral reef system, the Great Barrier Reef is a vibrant underwater world teeming with life. From colorful fish to intricate coral formations, there is always something new and exciting to discover in this natural wonder.'},
    {title: 'Mount Everest', photo: 'images/mount-everest.jpg', description: 'The highest peak in the world, Mount Everest is a majestic sight to behold. Its towering height of 29,029 feet (8,848 meters) makes it a challenge for even the most experienced mountaineers to conquer.'},
    {title: 'Victoria Falls', photo: 'images/victoria-falls.jpg', description: 'Located on the border of Zambia and Zimbabwe, Victoria Falls is one of the worlds largest waterfalls, with a width of 1,708 meters (5,604 feet) and a height of 108 meters (354 feet). The deafening roar of the water and the mist rising from the falls create a breathtaking spectacle.'},
    {title: 'Yosemite National Park', photo: 'images/yosemite-national-park.jpg', description: 'With its towering cliffs, cascading waterfalls, and ancient sequoia trees, Yosemite National Park is a true gem of the American West. Its breathtaking natural beauty has inspired generations of artists and adventurers alike.'},
    {title: 'Antelope Canyon', photo: 'images/antelope-canyon.jpg', description: 'This slot canyon located in Arizona, USA, is famous for its swirling patterns and smooth curves carved into the sandstone by years of wind and water erosion. The sunlight filtering through the narrow openings creates a striking contrast of light and shadow.'},

  ];
  $('#mainpicture').attr('src', imagesData[currentPhoto].photo);




let loadPhoto = (currentPhoto) => {
    $('#mainpicture').attr('src', imagesData[currentPhoto].photo);
    $('#picture-title').text(imagesData[currentPhoto].title);
    $('#picture-descripton').text(imagesData[currentPhoto].description);
}

$('#leftarrow').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;  
  }
  loadPhoto(currentPhoto);
});

$('#rightarrow').click(() => {
  if(currentPhoto < 8) { 
    currentPhoto++; 
  }
  loadPhoto(currentPhoto);
});


