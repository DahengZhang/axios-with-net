import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import fetch from './fetch'

const App = () => {
    useEffect(() => {
        fetch.get('http://localhost:8080/public/data.json').then(res => {
            console.log(res)
        })
        // const request = net.request({
        //     method: 'GET',
        //     url: 'http://localhost:8080/public/data.json'
        // })
        // request.on('response', response => {
        //     response.on('data', data => {
        //         let result = {}
        //         try {
        //             result = JSON.parse(data.toString())
        //         } catch (err) {
        //             // console.error(err)
        //         }
        //         console.log(result)
        //     })
        //     response.on('end', () => {
        //         console.log('No more data in response.')
        //     })
        // })
        // request.end()
    })
    return (
        <div>This is App</div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
