import React from "react";
import {useState} from "react";
import SearchRes from './SearchRes';


const Search = () =>{
    const [img, setImg] = useState('');
    const inputEvent= (event)=>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
    return(
        <>
        <div className="my-6 flex sm:justify-center ">
            <input
            value={img}
            onChange={inputEvent}
             className="text-center font-semibold space-x-4 px-3 py-2 cursor-text text-teal-500 placeholder-shown:border-gray-500" placeholder="Search Here 🔍" />

             
        </div>
        <div className="my-6 flex sm:justify-center ">
        {img === '' ? null : <SearchRes name={img} />}
            {/* <SearchRes name={img}/> */}
        </div>
        </>
    )
}
export default Search;