import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutePage from './Components/Route';
import HomePage from './Pages/HomePage';
import Appointment from './Pages/Appintment';
import 'react-day-picker/dist/style.css';
const router = createBrowserRouter([
  {
    path: '/', element: <RoutePage />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/appointment', element: <Appointment /> },
      { path: '*', element: <div>404</div> },
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
