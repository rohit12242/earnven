import React, {useState} from 'react'
import SearchTokens from '../searchTokens'
import {Chart} from '../Chart/chartCubicle'
// import { useNavigate } from 'react-router'


export default function Index() {

    // var navigate = useNavigate();

    const [Token, setToken] = useState('')

    function callbackFunction(childData){
        setToken(childData)
        // navigate(`/app/token/${childData}`)
    }

    return (
        <>
            
            <div>
            <SearchTokens parentCallback = {callbackFunction}/> </div>
            <br/>
            <br/>
            <div>
            <Chart tokenid={Token}/> 
            </div>
       </>
    )
}