import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(Routes)


createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
