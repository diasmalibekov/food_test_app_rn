import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QXirq99HotOJ-TV1Gu0VlhR4aCJEiRXCMTBhflbrqZjObOq5OHSzNuk48g98gnPtcJzjelCShcdZoTBph4-1p3FwrJ9muCRqx8FEI548Sw2oHwy39HXZGuuCGwxFYHYx'
    }
})
