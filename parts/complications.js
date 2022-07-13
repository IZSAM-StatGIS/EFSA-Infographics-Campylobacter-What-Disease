export function getComplicationsTemplate(data){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg"><span>Back</span>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Complications</h2>
        <div class="incubation-container">
          <img src="images/icons/ic_incubation.svg">
          <div>
          </div>
        </div>
        <div class="list-container">
          
        </div>
      </div>
    </div>
`}
