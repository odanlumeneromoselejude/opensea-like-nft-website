import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contex/ContextProvider.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faCoffee)
function getLibrary(provider){
  return new Web3(provider)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)
