var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function (event) {

    event.preventDefault();

    var result = new XMLHttpRequest();
    result.addEventListener('load', resultListener);
    var queryTerm = document.getElementById('inputField').value;
    result.open('GET', 'https://api.gettyimages.com/v3/search/images?phrase=' + queryTerm);
    result.setRequestHeader('Api-Key', API_KEY);
    result.send();
  });


function resultListener () {

  var resultData = JSON.parse(this.responseText);
  var contentContainer = document.getElementById('contentContainer');

  if (resultData.result_count >= 4) {

    var posted = 0;
    while (posted <= 4) {
    var image = document.createElement('img');
      image.id = 'image';
      image.src = resultData.images[posted].display_sizes[0].uri; 
      contentContainer.appendChild(image);
      posted++;
    }
  } 
}