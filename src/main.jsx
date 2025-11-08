import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// lazy load components for performance optimization
const ProductList = lazy(() => import('./Components/ProductList.jsx'));
const ProductView = lazy(() => import('./Components/ProductView.jsx'));
const Error = lazy(() => import('./Components/Error.jsx'));

// route configuration.

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ProductList/>,
      },
      {
        path: "/product/:slug/:product_id",
        element: <Suspense><ProductView/></Suspense>
      },
  ],
  errorElement: <Suspense><Error/></Suspense>
  },
  {
    path: "/error",
    element: <Suspense><Error/></Suspense>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRoute}/>
    </Suspense>
  </StrictMode>,
)
