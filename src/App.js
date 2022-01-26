import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Responsive/Navbar';
import Worldwide from './Components/CovidTracker/WorldWide';
import Search from './Components/RouterDom/Search'
import About from './Components/Responsive/About'
import Contact from './Components/Responsive/Contact'
import Home from './Components/Responsive/Home'
import Service from './Components/Responsive/Service'
import Error from './Error404';
import Footer from './Components/Responsive/Footer';

function App() {
  return (
    <>
            <Navbar />
            <hr/>
            <Routes>
                <Route exact path="/" element={<Home name="Home"/>} />
                <Route  path="about" element={<About name="About"/>} />
                <Route  path="contact" element={<Contact/>} />
                <Route  path="search" element={<Search/>} />
                {/* <Route  path="pokeApi" element={<PokeApi/>} /> */}
                <Route  path="covid19" element={<Worldwide/>} />
                <Route  path="services" element={<Service/>} />
                {/* <Route  path="user/:username/:id" element={<User/>}  /> */}
                <Route  path="*" element={<Error/>} />
            </Routes>
            <Footer/>

    </>
  );
}

export default App;
