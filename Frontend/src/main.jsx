import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/router'
import { Provider } from 'react-redux'
import React from 'react'
import store from './redux/store'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
