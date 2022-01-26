import React from "react";


const SearchRes = (props) =>{
    const img = `https://source.unsplash.com/1020x780/?${props.name}`
    return(
        <>
            <div>
                <img className="rounded-xl cursor-pointer" src={img} alt="img"/>
                <p className="animate-pulse text-center font-semibold text-indigo-600">@Image by unsplash.com</p>
            </div>
        </>
    )
}
export default SearchRes;