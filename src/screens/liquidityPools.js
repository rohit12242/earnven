import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function LiquidityPools() {

    const [Data, setData] = useState([])
    const [Content, setContent] = useState('')

    useEffect(() => {
        var content = Data.map((object)=>
        <div style={{height:'70px',
                    width:'80%',
                    border:'1px solid white',
                    margin:'auto',
                    borderRadius:'5px'
        }}>
            
        </div>
        )
        setContent(content)
    }, [Data])

    useEffect(() => {
        // console.log('lol')
        async function getData(){
            await axios.post(`https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2`,
            {
                query:`
                {
                    pairDayDatas(first: 20,
                       where:{
                        date:1626998400
                      }
                        orderBy:dailyVolumeUSD,
                         orderDirection: desc)
                    {
                      id
                      token0 {
                        id
                        symbol
                            name
                      }
                      token1 {
                        id
                        symbol
                        name
                      }
                      date
                      reserveUSD
                      dailyVolumeUSD
                    }
                }`})
                .then(async(response) => {
                    // console.log(response.data.data.pairDayDatas)
                    if(response.data.data){
                        setData(response.data.data.pairDayDatas)
                    }
            })
        }   
        getData()     
    }, [])

    return (
        <div>
            <br/><br/>
            {Content}
        </div>
    )
}
