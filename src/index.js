import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './component/MainContainer';
import Body from './component/Body';
import Watch from './component/Watch';
import Usememmo from './component/Usememmo';
const approuter=createBrowserRouter([{
  
    path:'/',
    element:<App/>,
    children:[

      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/',
        element:<MainContainer/>

      },
      {
        path:'/watch',
        element:<Watch/>
      },
      {
        path:'/memo',
        element:<Usememmo/>
      },
    ],
  

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  
    <RouterProvider router={approuter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
