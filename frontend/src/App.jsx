import "bootstrap-icons/font/bootstrap-icons.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import HomePage from './pages/Home'

const router = createBrowserRouter([
  {path:'/', element:<Root/>, children:[
    {index:true, element:<HomePage/>}
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
