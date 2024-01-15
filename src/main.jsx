import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageLayout } from './Components/PageLayout/PageLayout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GamePage } from './Components/GamePage/GamePage.jsx'
import { LeaderboardPage } from './Components/LeaderboardPage.jsx/LeaderboardPage.jsx'
import { SelectMapPage } from './Components/SelectMapPage/SelectMapPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'map-select',
        element: <SelectMapPage />,
      },
      {
        path: 'game/:name',
        element: <GamePage />,
      },
      {
        path: 'leaderboard',
        element:<LeaderboardPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
