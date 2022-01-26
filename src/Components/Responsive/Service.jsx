import React from "react";
import Card from "../Responsive/Card"
import Sdata from "./Sdata";


const Service = () =>{
    return(
        <>
        <div className="my-5 ">
            <h1 className="text-center text-4xl font-extrabold">
            Our Services
            </h1>
        </div>
        <div className="mx-4 my-6 grid grid-cols-1 gap-2 space-y-6  md:grid-cols-4 ">
            {
                Sdata.map((value,index)=>{
                    return <Card
                        key={index}
                        img ={value.image}
                        title ={value.title}
                        description ={value.description}
                    />
                })
            }
        </div>
        </>
    )
}
export default Service;