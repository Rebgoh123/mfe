import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el) => {
    ReactDOM.render(<App/>, el)
}

// if we are in development and in isolation,
// call mount immediately
// mount function to start up the app
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot)
    }
}

// We are running through container
// and we should export the mount function
export { mount };