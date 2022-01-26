import React, {useState, useEffect} from 'react';


const Worldwide = () =>{
    
    const [data, setData] = useState([])

    const getCovidData = async () =>{
        const res = await fetch('https://corona.lmao.ninja/v2/countries');
        const actualData = await res.json();
        console.log(actualData)
        setData(actualData)
    }

    useEffect(() =>{
        getCovidData();
    },[])

    return(
        <>
        <div>
            <div className="my-4 h-14 bg-gradient-to-r from-sky-500 to-indigo-500
             text-gray-100 flex sm:justify-center space-x-4 px-3 py-2 
             font-medium ">
                <h1 className='text-2xl animate-bounce'>
                    Covid 19 Tracker
                </h1> 
            </div>
            <div className=''>
                <table className="font-extrabold border-collapse border-gray-800">
                    <thead className=" bg-cyan-600 text-white">
                        <tr>
                        <th className='text-center border border-gray-600'>Continent</th> 
                        <th className='text-center border border-gray-600'>Country</th> 
                        <th className='text-center border border-gray-600'>Total Cases</th> 
                        <th className='text-center border border-gray-600'>Total Deaths</th> 
                        <th className='text-center border border-gray-600'>TodayDeaths</th> 
                        <th className='text-center border border-gray-600'>TodayCases</th> 
                        <th className='text-center border border-gray-600'>Total Recovered</th> 
                        <th className='text-center border border-gray-600'>TodayRecovered</th> 
                        <th className='text-center border border-gray-600'>Active</th>
                        <th className='text-center border border-gray-600'>Critical</th> 
                        {/* <th className='text-center border border-gray-600'>CasesPerOneMillion</th>  */}
                        {/* <th className='text-center border border-gray-600'>DeathsPerOneMillion</th>  */}
                        {/* <th className='text-center border border-gray-600'>Population</th>  */}
                        <th className='text-center border border-gray-600'>Tests</th> 
                        {/* <th className='text-center border border-gray-600'>TestsPerOneMillion</th>  */}
                        {/* <th className='text-center border border-gray-600'>OneCasePerPeople</th>  */}
                        {/* <th className='text-center border border-gray-600'>OneDeathPerPeople</th>  */}
                        {/* <th className='text-center border border-gray-600'>OneTestPerPeople</th>  */}
                        {/* <th className='text-center border border-gray-600'>ActivePerOneMillion</th>  */}
                        {/* <th className='text-center border border-gray-600'>RecoveredPerOneMillion</th>  */}
                        {/* <th className='text-center border border-gray-600'>CriticalPerOneMillion</th>  */}
                        

                        </tr>
                    </thead>
                    <tbody className='space-x-4'>
                        {
                            data.map((curElem, index)=>{
                                {/* console.log(curElem.countryInfo.flag) */}
                                return(
                                    <tr key={index} className='text-center'>

                                        <td className='border text-indigo-600'>{curElem.continent}</td> 
                                        <td className='border text-teal-700'>{curElem.country} <img src={curElem.countryInfo.flag} alt=''/> </td> 
                                        <td className='border text-red-500'>{curElem.cases}</td> 
                                        <td className='border text-red-700'>{curElem.deaths}</td>
                                        <td className='border text-rose-700'>{curElem.todayDeaths}</td>
                                        <td className='border text-orange-600'>{curElem.todayCases}</td>
                                        <td className='border text-emerald-800 '>{curElem.recovered}</td>
                                        <td className='border text-emerald-500'>{curElem.todayRecovered}</td>
                                        <td className='border text-green-900'>{curElem.active}</td>
                                        <td className='border text-fuchsia-500'>{curElem.critical}</td>
                                        {/* <td className='border border-red-500'>{curElem.casesPerOneMillion}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.deathsPerOneMillion}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.population}</td> */}
                                        <td className='border text-cyan-500'>{curElem.tests}</td>
                                        {/* <td className='border border-red-500'>{curElem.testsPerOneMillion}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.oneCasePerPeople}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.oneDeathPerPeople}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.oneTestPerPeople}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.activePerOneMillion}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.recoveredPerOneMillion}</td> */}
                                        {/* <td className='border border-red-500'>{curElem.criticalPerOneMillion}</td> */}
                                        
                                        
                                </tr>
                                    )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}

export default Worldwide;