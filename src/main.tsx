import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProductPage from './pages/product.tsx'
import { getProduct, getProducts } from './util.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => new Promise((resolve) =>
      setTimeout(() => {
        resolve({ products: getProducts() })
      }, 500)
    )
  },
  {
    path: '/',
    loader: () => {
      return {hello: "world"}
    },
    children: [
      {
        path: '/product/:id',
        element: <ProductPage />,
        loader: ({params}) => new Promise((resolve, reject) => 
          {
          const productId = params.id;
          if(!productId) {
            reject("Product ID is required");
          }
          setTimeout(() => {
            resolve({product: getProduct(productId!)})
          }, 500)
        })
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
