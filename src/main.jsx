import React from 'react'
import LoginForm from './routes/LoginForm.jsx'
import { CheckPage } from './routes/CheckPage.jsx'
import { StartPage } from './routes/StartPage.jsx'
import { Services } from './routes/Services.jsx'
import { Comments } from './routes/Comments.jsx'
import { AboutUs } from './routes/AboutUs.jsx'
import { Root } from './routes/Root.jsx'
import Manage from './routes/Manage.jsx'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import './style.scss'
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom"
import LoggedUserProvider from './context/LoggedUserProvider.jsx'
import Admin from './routes/Admin.jsx'
import RegisterUser from './routes/RegisterUser.jsx'
import AdminUsers from './routes/AdminUsers.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/home',
        element: <StartPage />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/check',
        element: <CheckPage />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/comments',
        element: <Comments/>,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/manage',
        element: <Manage />,
      },
      {
        path: '/Admin',
        element: <Admin />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoggedUserProvider>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </LoggedUserProvider>
  
)
