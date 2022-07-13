export function getWhoIsAtRiskTemplate(data){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg"><span>Back</span>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Who is at risk?</h2>
        <div class="list-container">
          ${getCollectionTemplate(data.collection)}
        </div>
      </div>
    </div>
`}

function getCollectionTemplate(collection){
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
