import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { Navigate } from "react-router";
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { Profile } from './pages/Profile';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Result from './pages/Result';
import Pricing from './pages/Pricing';
function AppRoutes() {
  const routes = useRoutes(
    [
      {path:"/home/*", element :<Home />},
      {path:"/profile/*", element :<Profile />},
      {path:"/login/*", element :<><Header/><Login /><Footer/></>},
      {path:"/result/*", element :<><Header/><Result /><Footer/></>},
      {path:"/pricing/*", element :<><Header/><Pricing /><Footer/></>},
      {path:"/*" ,element:<Navigate to="/home/" />}
    ]
  )
  return routes
}
function App() {
  
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
