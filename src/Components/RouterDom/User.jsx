import React from "react";
import {useParams, useLocation, useNavigate, useHistory} from "react-router-dom";



const User = () =>{
    let { username, id } = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    // const history = useHistory()
    console.log(useNavigate)
    return(
        <>
            <h1 className="my-4 animate-bounce flex sm:justify-center space-x-4 px-3 py-2 
            text-slate-700 font-medium hover:text-slate-900" >
            Welcome {username} {id}
            </h1>
            <div className="flex sm:justify-center space-x-4 px-3 py-2">   
            <p> My Current Location is {location.pathname} <br/>

            {location.pathname === `/user/Arafat/52`? (
            <button className="font-semibold text-justify rounded-lg my-4 border-2 hover:bg-red-400 hover:text-white"
            onClick={() =>{
                alert('You Are Awesome 🌞')
            }}
            >You Got Me 🌻</button>) :null
            }
            {location.pathname === `/user/Arafat/52`? (
            <button className="font-semibold text-justify rounded-lg my-4 border-2 hover:bg-red-400 hover:text-white"
            onClick={() => navigate('/user/unknown/0')}
            >Back ⬅️ </button>) :null
            }
            </p>
            </div>
        </>
    )
}
export default User;