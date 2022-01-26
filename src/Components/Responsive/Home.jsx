import React from "react";
import {NavLink} from "react-router-dom";


const Home = () =>{
    return(
        <>

            <div className="flex flex-row w-full my-52 ">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center justify-center">
                    <h1 className="text-4xl font-bold">
                    Grow your business<br/> with <strong className="text-cyan-600">Arafat Fahim</strong>
                    </h1>
                    <br/>
                    <h2 className="py-4 text-2xl place-items-center justify-center">
                        Welcome
                    </h2>
                    <br/>
                    <NavLink to='/services' type="button" 
                    className="text-white bg-gradient-to-r 
                    from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br 
                    focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg 
                    shadow-cyan-500/50 dark:shadow-lg 
                    dark:shadow-cyan-800/80 font-medium rounded-lg 
                    text-sm px-5 py-2.5 text-center 
                    mr-2 mb-2 hover:animate-pulse">Get Started</NavLink>
                </div> 
                <div className="divider divider-vertical"></div> 
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <img src={`https://picsum.photos/500/500`} alt=""/>
                </div>
            </div>


            
        </>
    )
}
export default Home;