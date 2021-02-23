
export default class Job {
    constructor({ company, jobTitle, hours, rate, description, _id, id }) {
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
        this.id = _id || id
    }

    get Template() {
        return /*html*/ `
        <div class="card col-8 col-lg-3 mt-5 mx-3">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
  <div class="card">
  <div class="card-body">
      <h4 class="card-title text-center">${this.company}</h4>
      <p class="card-text mt-3">${this.jobTitle}</p>
      <p>$${this.rate}per hour/ ${this.hours} hours per week</p>
      <p>Job Detail: ${this.description}</p>
      
    <button class="btn btn-success" onclick="app.jobsController.apply()">Apply</button>
  </div>
  </div>
</div>
`
    }
}