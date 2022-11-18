import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutePage from './Components/Route';
import HomePage from './Pages/HomePage';
import Appointment from './Pages/Appintment';
import 'react-day-picker/dist/style.css';
import LogIn from './Pages/Login/LogIn';
import PrivateRoute from './Pages/PrivateRoute';
import DashBoard from './Pages/dashBoard';
const router = createBrowserRouter([
  {
    path: '/', element: <RoutePage />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/appointment', element: <Appointment /> },
      { path: '/login', element: <LogIn /> },
      { path: '/dashboard', element: <PrivateRoute> <DashBoard /> </PrivateRoute> },
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
