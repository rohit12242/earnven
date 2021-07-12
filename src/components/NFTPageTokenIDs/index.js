import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

var contents = ''

export default function Index({tokenIDs}) {

    const [Content, setContent] = useState('')

    var change = (arr) =>{
        contents = arr.map((object)=>
            <div style={{color:'white'}}>
            <Link to={{pathname: "/app/nft-token", state: { tokenID:object }}}>   {object} </Link><br/><br/>
            </div>
        )
        // console.log(contents)
    }

    useEffect(() => {

        change(tokenIDs)
        setContent(contents)
        
    }, [tokenIDs])


    return (
        <div>
            {Content}
        </div>
    )
}
