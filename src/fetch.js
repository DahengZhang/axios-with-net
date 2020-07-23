import axios from 'axios'

import electron from 'electron'
const { remote: { net } } = electron

const instance = axios.create({})

instance.defaults.adapter = config => {
    console.log(config)
    return Promise.race()
}

export default instance
