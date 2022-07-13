export function getSymptomTemplate(data){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg"><span>Back</span>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Symptoms</h2>
        <div class="incubation-container">
          <img src="images/icons/ic_incubation.svg">
          <div>
            <span>Incubation period</span><br><h3>${data.incubationPeriod}</h3>
          </div>
        </div>
        <div class="list-container">
          ${getSymptomCollectionTemplate(data.collection)}
        </div>
      </div>
    </div>
`}

function getSymptomCollectionTemplate(collection){
    let t = '';
    collection.forEach((elem) => {
        t += `<div>
                <img src="${elem.img}">
                <strong>${elem.name}</strong>
                <small>${elem.abstract}</small>
              </div>`
    });
    return t;
}
