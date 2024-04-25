import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import Home from './Components/Home.jsx'
import Learn from './Components/Learn.jsx'
import Register from './Components/Register.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'
import ThreeD from './Components/ThreeD.jsx'
import Asessment from './Components/Assessment.jsx'
import FeedbackForm from './Components/Feedback.jsx'

const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"/learn", element: <Learn />},
  {path:"/reg", element: <Register />},
  {path:"/signin", element: <SignIn />},
  {path:"/signup", element: <SignUp />},
  {path:"/threed", element: <ThreeD />},
  {path:"/assessment", element: <Asessment />},
  {path:"/feedback", element: <FeedbackForm />}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
