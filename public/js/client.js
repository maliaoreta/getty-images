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
    while (resultData.images[posted] !== undefined) {
    
      var imageDivs = document.createElement('div');
        imageDivs.className = 'imageDivs';
        contentContainer.appendChild(imageDivs);

      var image = document.createElement('img');
        image.id = 'image';
        image.src = resultData.images[posted].display_sizes[0].uri; 
        imageDivs.appendChild(image);

      var imgCap = document.createElement('div');
        imgCap.id = 'imgCap';
        imgCap.innerHTML = resultData.images[posted].title;
        imageDivs.appendChild(imgCap);

      posted++;
    }
  } 
}

// NEEDS FIXING
var inputField = document.getElementById('inputField');
  inputField.addEventListener('change', function ( ){

    sessionStorage.setItem('searchHistory', inputField.value);
    console.log(sessionStorage.getItem('searchHistory'));

  });

  console.log(sessionStorage);