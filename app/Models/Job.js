import { generateId } from "../Utils/GenerateId.js"


export default class Job {
    constructor({ company, jobTitle, hours, rate, description }) {
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
        this.id = generateId()
        this.applications = 0
    }

    get Template() {
        return /*html*/ `
        <div class="card col-4 mt-5 ml-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
  <div class="card">
      <h4 class="card-title text-center">${this.company}</h4>
      <p class="card-text mt-3">${this.jobTitle}</p>
      <p>$${this.rate}per hour/ ${this.hours} per week</p>
      <p>About This Job: ${this.description}</p>
      <p>Applicants: ${this.applications}</p>
      
      <button class="btn btn-success" onclick="app.jobsController.apply('${this.id}')">Apply</button>
  </div>
</div>
`
    }
}