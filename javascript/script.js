let nursePlanner = JSON.parse(planner);
let nursePlanContent = document.querySelector(".cards-content");

function renderCards() {
  nursePlanner.forEach((plan, index) => {
    nursePlanContent.innerHTML += `
      <div class="col mb-2 ">
        <div class="card ">
          <div class="top-area-card d-flex justify-content-between p-2">
            <button type="button" class="btn btn-info text-light">${plan.category}</button>
            <div class="marks">
              <i class="fa-regular fa-bookmark p-1"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <img src="../images/list-card.avif" class="card-img-top w-100" alt="list">
          <div class="card-body">
            <h5 class="card-title">${plan.taskName}</h5>
            <p class="card-text">${plan.description}</p>
          </div>
          <div class="p-1">
            <hr>
            <div class="priority" onClick="reply_click(${index})">
              <i class="fa-solid fa-triangle-exclamation"></i>
              Priority Level
              <span class="badge ${colorDecide(plan.importanceNr)}">${plan.importanceNr}</span>
            </div>
            <div class="deadline">
              <i class="fa-solid fa-calendar-days"></i>
             ${plan.deadline}
            </div>
            <hr>
          </div>
          <div class="card-body p-2">
            <button type="button" class="btn btn-danger float-end ms-2">Delete</button>
            <button type="button" class="btn btn-success float-end">Done</button>
          </div>
        </div>
      </div>
    `
  });
}

renderCards();

function reply_click(clicked_id) {
  nursePlanner[clicked_id].importanceNr++
  nursePlanContent.innerHTML = ' ';
  renderCards();
}


function colorDecide(currentPriorityNumber) {
  if (currentPriorityNumber <= 1) {
    return 'bg-success'
  } else if (currentPriorityNumber > 1 && currentPriorityNumber <= 3) {
    return 'bg-warning'
  } else if (currentPriorityNumber >= 4 && currentPriorityNumber <= 5) {
    return 'bg-danger'
  } else {
    return 'bg-danger'
  }
}

// sort
let sortBtn = document.querySelector('.sort');
sortBtn.addEventListener('click', () => {
  nursePlanner.sort((currentTask, nextTask) => (currentTask.importanceNr > nextTask.importanceNr) ? -1 : 1)
  nursePlanContent.innerHTML = ' ';
  renderCards()
})
