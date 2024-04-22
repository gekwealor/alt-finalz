import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import RepoDetails from './Pages/RepoDetails'
import ErrorPage from './Pages/ErrorPage'
import AppOutlet from './Pages/AppOutlet'
import { BrowserRouter } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/RepoDetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
    </>
 

    
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
)

