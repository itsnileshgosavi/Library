import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotFound from './pages/NotFound';
import BrowseBooks from './pages/BrowseBooks';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import Landing from './pages/Landing';
import BookDetails from './pages/BookDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './pages/Category';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/BrowseBooks",
        element: <BrowseBooks />,
       
      },
      {
        path:"/AddBook",
        element: <AddBook/>
      },
      {
        path:"/browse/:category",
        element: <Category/>
      },
      {
        path:"/books/:title",
        element: <BookDetails />
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
