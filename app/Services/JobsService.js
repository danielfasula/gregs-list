import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'

class JobsService {
    constructor() {
        console.log('hello from job service');
    }

    createJob(newJob) {
        let temp = ProxyState.jobs
        temp.push(new Job(newJob))
        ProxyState.jobs = temp
    }
    apply(id) {
        let temp = ProxyState.jobs
        let job = temp.find(j => j.id == id)
        job.applications += 1
        ProxyState.jobs = temp
    }
    deleteJob(id) {
        let temp = ProxyState.jobs
        let jobIndex = temp.findIndex(j => j.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.jobs = temp
    }
}

export const jobsService = new JobsService()