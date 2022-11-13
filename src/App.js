import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutePage from './Components/Route';

const router = createBrowserRouter([
  {
    path: '/', element: <RoutePage />, children: [
      { path: '/', element: <div>Sami gage</div> }
    ],
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
