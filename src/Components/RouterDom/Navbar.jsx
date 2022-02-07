import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    let activeStyle = {
        // textDecoration: "underline",
        fontWeight : "bold",
        color : "red"
      };
    
    
    return(
        <>
        <nav className="flex sm:justify-center space-x-4">
           <NavLink  to="/" 
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="rounded-lg px-3 py-2 text-black font-medium hover:bg-slate-100 hover:text-slate-900"> About Us </NavLink>

           <NavLink 
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            to="contact" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> Contact Us </NavLink>
           <NavLink 
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            to="search" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> Search Image </NavLink>
           <NavLink 
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            to="pokeApi" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> PokeApi </NavLink>
           <NavLink
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
             to="covid19" className="animate-pulse rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> Covid Tracker </NavLink>
           <NavLink
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
             to="services" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> Services </NavLink>
           <NavLink
           style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
             to="user" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"> User </NavLink>
        </nav>
           
        </>
    )
}

export default Navbar;
