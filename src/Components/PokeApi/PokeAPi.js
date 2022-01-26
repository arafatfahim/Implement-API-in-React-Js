import React , {useState, useEffect} from "react";
import axios from "axios";

const PokeApi = () =>{

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }

        getData();
    });

    return(
        <>
        <div className="my-4 bg-orange-500 text-slate-800 flex sm:justify-center space-x-4 px-3 py-2 
             font-medium ">
            <h1>Please Select A Value</h1>
            <select  value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <h1>Please Select A Value</h1>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
            
        <h1 className="animate-bounce flex sm:justify-center space-x-4 px-3 py-2 
            text-slate-700 font-medium hover:text-slate-900">Your choosen value is  <span style={{color:'red'}}> {num} </span></h1>
        <h1 className="animate-bounce flex sm:justify-center space-x-4 px-3 py-2 
            text-slate-700 font-medium hover:text-slate-900">Character is <span style={{color:'red'}}> {name}</span>  </h1>
        <h1 className="animate-bounce flex sm:justify-center space-x-4 px-3 py-2 
            text-slate-700 font-medium ">  <span style={{color:'red'}}> {moves} </span> Moves</h1>
            
        </>
    )
}

export default PokeApi;