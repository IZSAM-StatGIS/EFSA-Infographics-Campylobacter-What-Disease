const bodyEl = document.body;
let JSON_contents;

fetch('contents.json').then(response => {
    if (!response.ok) { throw new Error("HTTP error " + response.status)}
    return response.json();
  }).then(json => {
    JSON_contents = json;
  }).catch(function(err) {
    console.log(err)
  });


/* Build contents from JSON */
function loadContents(elem) {
  var elemId = elem.id;
  var elemSelection = document.querySelector('#'+elemId);
  var categoryBlock = elemSelection.closest(".grid-item");
  if (categoryBlock.classList.contains("bacteria")) {
    category = JSON_contents.bacteria[elemId];
    categoryName = JSON_contents.bacteria["catname"];
  }
  if (categoryBlock.classList.contains("bacterial-toxins")) {
    category = JSON_contents.toxins[elemId];
    categoryName = JSON_contents.toxins["catname"];
  }
  if (categoryBlock.classList.contains("viruses")) {
    category = JSON_contents.viruses[elemId];
    categoryName = JSON_contents.viruses["catname"];
  }
  if (categoryBlock.classList.contains("parasites")) {
    category = JSON_contents.parasites[elemId];
    categoryName = JSON_contents.parasites["catname"];
  }
  if (categoryBlock.classList.contains("other")) {
    category = JSON_contents.other[elemId];
    categoryName = JSON_contents.other["catname"];
  }
  // define dom variable
  var pathongenHead = document.querySelector('.pathogen-name');
  var pathongenCategory = pathongenHead.querySelector('h3');
  var pathongenName = pathongenHead.querySelector('h1');
  var pathongenVisual = document.querySelector('.visual');
  var pathongenIncubationPeriod = document.querySelector('.incubation-period p');
  var pathongenDescription = document.querySelector('.pathogen-content-description p');
  var pathongenSymptoms = document.querySelector('.pathogen-content-symptoms p');
  var pathongenTransmission = document.querySelector('.pathogen-transmission');
  var pathongenTransmissionContents = pathongenTransmission.querySelector('.pathogen-content-transmission p');
  // define contents
  pathongenCategory.innerHTML = categoryName;
  pathongenName.innerHTML = category.name;
  pathongenIncubationPeriod.innerHTML = category.incubation;
  pathongenVisual.getElementsByTagName("img")[0].src = category.cover["src"];
  pathongenVisual.getElementsByTagName("img")[0].alt = category.cover["alt"];
  pathongenDescription.innerHTML = category.description;
  pathongenSymptoms.innerHTML = category.symptoms;
  pathongenTransmission.getElementsByTagName("img")[0].src = category.mtimage["src"];
  pathongenTransmission.getElementsByTagName("img")[0].alt = category.mtimage["alt"];
  pathongenTransmissionContents.innerHTML = category.transmission;
  // show loadContents
  bodyEl.classList.toggle("show-contents");
  imagesLoaded( pathongenTransmission, function( instance ) {
    pathongenTransmission.classList.toggle("show-image");
  });
}


function openDetail(elem) {
  elem.parentElement.classList.add('totop');
  elem.parentElement.classList.add('inn');

  //Show modal
  let modal = document.querySelector('.s-modal');
  modal.classList.add('d-block');
  setTimeout(function(){modal.classList.add('inn')}, 200);

  //Get card contents
  /*
  let titleValue = JSON_contents[elemID].title;
  let contentValue = JSON_contents[elemID].content;
  let imgUrl = JSON_contents[elemID].imgUrl;

  //Set modal contents
  let modalVisualImg = document.querySelector('.modal-visual-img');
  let modalTitle = document.querySelector('.modal-title');
  let modalContent = document.querySelector('.modal-content');
  modalVisualImg.src = imgUrl;
  modalVisualImg.alt = titleValue;
  modalTitle.innerHTML = "<h2>"+titleValue+"</h2>";
  modalContent.innerHTML = contentValue;

  //Show modal
  let modal = document.querySelector('.modal');
  modal.classList.add('d-block')
  setTimeout(function(){modal.classList.add('inn')}, 200);
   */
}


function closeModal(elem) {
  let modal = document.querySelector('.s-modal');
  modal.classList.remove('inn');
  setTimeout(function(){
    modal.classList.remove('d-block');
    document.querySelector('.b2').classList.remove('inn')
  }, 200);
}
