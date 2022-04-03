import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Dashbord from './Components/Dashbord';
import Header from './Components/Header';
import Home from './Components/Home';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
