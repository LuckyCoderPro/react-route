import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home/Home';
import Products from './Components/products/Products';
import Main from './Layout/Main';
import Friends from './Components/friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        }
      ]
    },
    { path: '/products', element: <Products></Products> },
    { path: '*', element: <div className='text-danger'>Thia link not vLID</div> }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;