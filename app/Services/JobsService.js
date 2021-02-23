import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
    constructor() {
        this.getJobs()
    }

    async getJobs() {
        try {
            const res = await api.get('jobs')
            ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
        } catch (error) {
            console.error(error);
        }
    }
    async createJob(newJob) {
        try {
            const res = await api.post('jobs', newJob)
            ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
        } catch (error) {
            console.error(error);
        }
        swal({
            text: 'New Job Listing Added!',
            icon: 'success'
        })
    }
    apply() {
        swal({
            title: 'Your application has been sent. Please wait to hear back from this company!',
            text: 'Probably not, tho..',
            icon: 'success'
        })
    }
    async deleteJob(id) {

        swal({
            title: 'Are you sure you want to delete this listing?',
            buttons: ['Nvm, We still need new hires', 'Get Rid of It!'],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    await api.delete('jobs/' + id)
                    this.getJobs()
                } catch (error) {
                    console.error(error);
                }
                swal({
                    text: 'Deleted Listing!',
                    icon: 'error'
                })
            } else {
                swal('This listing is unharmed by your actions')
            }
        })
    }
}

export const jobsService = new JobsService()