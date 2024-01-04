import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageLayout } from './Components/PageLayout/PageLayout.jsx'
import { GamePage } from './Components/GamePage/GamePage.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'wheres-waldo',
        element: <GamePage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
