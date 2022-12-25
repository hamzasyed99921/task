import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { ToastContainer} from "react-toastify";
import Login from './pages/Login';
import Base from './components/Layouts/Base';
import Signup from './pages/Signup';
import Hero from './components/Elements/Hero';
import Details from './components/Elements/Details';
import ForgotPassword from './components/Elements/ForgotPassword';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <ToastContainer/>
      <Base>
        <Routes>
          <Route index path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/hero" element={<Hero/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/forget" element={<ForgotPassword/>} />
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
