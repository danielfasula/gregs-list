import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
    constructor() {
        _draw()
        ProxyState.on("jobs", _draw)
    }

    createJob(event) {
        event.preventDefault();
        let form = event.target
        let newJob = {
            company: form.company.value,
            jobTitle: form.jobTitle.value,
            hours: form.hours.value,
            rate: form.rate.value,
            description: form.description.value,
        }
        jobsService.createJob(newJob)
    }
    apply() {
        jobsService.apply()
    }
    deleteJob(id) {
        jobsService.deleteJob(id)
    }

}