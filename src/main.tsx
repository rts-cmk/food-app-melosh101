import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProductPage from './pages/product.tsx'
import { getProduct, getProducts, getCurrentUser } from './util.ts'
import UserProfile from './pages/UserProfile.tsx'

const router = createBrowserRouter([
  {
    id: "root",
    path: '/',
    loader: () => new Promise((resolve) =>
          setTimeout(() => {

            resolve({ user: getCurrentUser() })
          }, 500)
        ),
    children: [
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
        path: '/product/:id',
        element: <ProductPage />,
        loader: ({ params }) => new Promise((resolve, reject) => {
          const productId = params.id;
          if (!productId) {
            reject("Product ID is required");
          }
          setTimeout(() => {
            resolve({ product: getProduct(productId!) })
          }, 500)
        })
      },
      {
        path: "/me",
        element: <UserProfile />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
