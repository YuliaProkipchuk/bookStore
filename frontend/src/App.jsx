import "bootstrap-icons/font/bootstrap-icons.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import HomePage, {loader as homeLoader} from './pages/Home'
import Error from "./pages/Error";

const router = createBrowserRouter([
  {path:'/', element:<Root/>, errorElement:<Error/>, children:[
    {index:true, element:<HomePage/>, loader:homeLoader},
    {path:'auth'}
  ]}
])
function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
