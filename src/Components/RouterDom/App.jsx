import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Worldwide from '../CovidTracker/WorldWide';
import PokeApi from '../PokeApi/PokeAPi';
import About from './About';
import Contact from './Contact';
import User from './User';
import Search from './Search';
// import Services from './Services';
import Navbar from './Navbar';
import Error from '../../Error404';

const App = () =>{
    return(
        <> 
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<About name="about"/>} />
                <Route  path="contact" element={<Contact/>} />
                <Route  path="search" element={<Search/>} />
                <Route  path="pokeApi" element={<PokeApi/>} />
                <Route  path="covid19" element={<Worldwide/>} />
                <Route  path="services" element={<About name="service"/>} />
                <Route  path="user/:username/:id" element={<User/>}  />
                <Route  path="*" element={<Error/>} />
            </Routes>

        
        </> 
    )
}
export default App;