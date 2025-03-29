import { createBrowserRouter } from 'react-router';
import Layout from './components/layout';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';
import TVSeriesDetail from './pages/TVSeriesDetail';
import Movies from './pages/Movies';
import TvSeries from './pages/TVSeries';
import { RouterProvider } from 'react-router/dom';
import Login from './pages/login';
import "./firebase";
import SignUp from './pages/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/tv/:id",
          element: <TVSeriesDetail />
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />
        },
        {
          path: "/movies",
          element: <Movies />
        },
        {
          path: "/tvseries",
          element: <TvSeries />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
      ]
    },
  ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
