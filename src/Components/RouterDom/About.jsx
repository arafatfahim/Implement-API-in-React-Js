import React from "react";

const About = (props) =>{

    return(
        <>
            <h1 className="my-4 animate-bounce flex sm:justify-center space-x-4 px-3 py-2 
            text-slate-700 font-medium hover:text-slate-900">
            This is {props.name} Page
            </h1>
        </>
    )
}

export default About;