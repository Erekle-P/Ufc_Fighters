import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
//import "./components/Style.css"
const router = createBrowserRouter(Routes)


createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
