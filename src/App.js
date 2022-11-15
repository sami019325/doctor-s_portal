import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutePage from './Components/Route';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/', element: <RoutePage />, children: [
      { path: '/', element: <HomePage /> }
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
