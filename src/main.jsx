import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Router from './Router/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <DndProvider backend={HTML5Backend}>
  <RouterProvider router={Router}>
    </RouterProvider>
    <Toaster />
  </DndProvider>
  </AuthProvider>
  ,
)
