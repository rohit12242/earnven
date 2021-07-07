import { ResponsiveLine } from '@nivo/line'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import parse from "html-react-parser";
import TransparentButton from '../TransparentButton/index'
import {
  ChartDataTwentyFour,
  ChartDataOneWeek,
  ChartDataOneMonth,
} from './ChartDataFetch/ChartDataFetch'

export const Chart = (props) => {

  const [Price, setPrice] = useState(null)
  const [Selection, setSelection] = useState(null)
  const [View, setView] = useState('Month View')

  // const [Token, setToken] = useState('aave')

  React.useEffect(() => {
    
    console.log(props.token)

    axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
        .then(async(response) => {
            // console.log(response.data)
            setSelection(response.data)
    })
    setView('Month View')

    if(props.token!=='' && props.token!==null){
      console.log(1, props.token)
      ChartDataOneMonth(props.token).then((res) => {
        setPrice(res)
        // console.log(Price)
      })

    }
    

  }, [props]);


  function loadWeekData(){

    console.log(props.token)
    if(props.token!=='' && props.token!==null){

      axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
        .then(async(response) => {
            console.log(response.data)
            setSelection(response.data)
    })
      setView('Week View')
      
      console.log(1, props.token)
      ChartDataOneWeek(props.token).then((res) => {
        setPrice(res)
        // console.log(Price)
      })

    }

  }

  function loadMonthData(){

    console.log(props.token)
    if(props.token!=='' && props.token!==null){

      axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
        .then(async(response) => {
            console.log(response.data)
            setSelection(response.data)
    })
    setView('Month View')

      console.log(1, props.token)
      ChartDataOneMonth(props.token).then((res) => {
        setPrice(res)
        // console.log(Price)
      })

    }

  }

  function loadDayData(){

    console.log(props.token)
    if(props.token!=='' && props.token!==null){

      axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
        .then(async(response) => {
            console.log(response.data)
            setSelection(response.data)
    })
    setView('Day View')

      console.log(1, props.token)
      ChartDataTwentyFour(props.token).then((res) => {
        setPrice(res)
        // console.log(Price)
      })

    }

  }

  useEffect(() => {
    
  }, [])

  let data
  //to set coin price we get from coingecko api
  Price
    ? (data = [
        {
          id: 'japan',
          color: 'hsl(214, 70%, 50%)',
          data: Price,
        },
      ])
    : (data = [
        {
          id: 'japan',
          color: 'hsl(72, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 97,
            },
            {
              x: 'helicopter',
              y: 230,
            },
            {
              x: 'boat',
              y: 45,
            },
            {
              x: 'train',
              y: 174,
            },
            {
              x: 'subway',
              y: 203,
            },
            {
              x: 'bus',
              y: 158,
            },
            {
              x: 'car',
              y: 152,
            },
            {
              x: 'moto',
              y: 227,
            },
            {
              x: 'bicycle',
              y: 120,
            },
            {
              x: 'horse',
              y: 51,
            },
            {
              x: 'skateboard',
              y: 176,
            },
            {
              x: 'others',
              y: 290,
            },
          ],
        },
      ])
  return (
    <div>

      {Selection ? (
        <div style={{width:'80%'}}>

          <div style={{textAlign:'left', marginTop:'20px'}}>

          <font color='white'>
            <img alt='' style={{marginTop:'5px'}}src={ Selection.image? Selection.image.small:'' }/>
            {/* {Selection.symbol} <br/> */}

          { Selection.symbol? '$'+Selection.symbol.toUpperCase():'' }
          </font>
          </div>

          <div>
          <div style={{textAlign:'left'}}>
          <font color='white'>
          <h2>{ Selection.name? Selection.name.toUpperCase():'' }</h2>
          </font>
          </div>

          {/* <div style={{ float:'right'}}>
          <font color='white'>
          <span><img src={TelegramLogo} style={{marginTop:'-50px'}}/></span>
          <img src={TwitterLogo} style={{marginTop:'-50px'}}/>
          </font>
          </div> */}
          
          </div>       

          <div style={{textAlign:'left', marginRight:'0px'}}>
          <font color='#00FFE7'>
          <span style={{fontSize:'50px'}} >{ Selection.market_data? '$'+Selection.market_data.current_price.usd:'' }</span>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          { Selection.market_data? parseFloat(Selection.market_data.price_change_percentage_24h).toFixed(2)+'%':'' }
          </font>
          </div>


        <br/><br/>
        <div style={{height: '350px', border:'1px', borderColor:'white',
         borderStyle:'solid',
         borderRadius:'20px',
         paddingBottom:'50px',
         }}>
          <div style={{marginTop:'10px', color:'white'}}>{View}</div>
          
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 20, bottom: 100, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Price (USD)',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            enablePoints={false}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'dark2' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            enableArea={true}
            areaOpacity={0.85}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
          />
          <br/><br/>
        </div>
          <br/>
          <TransparentButton value='Week View' style={{
                height:'45px',
                width:'15%',
                background:'transparent',
                borderWidth:'1px',
                borderStyle:'solid',
                borderColor:'#ac6afc',
                borderRadius:'5px',
                color:'white',
                cursor:'pointer'
            }}
            onClick = {loadWeekData}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TransparentButton value='Month View' style={{
                height:'45px',
                width:'15%',
                background:'transparent',
                borderWidth:'1px',
                borderStyle:'solid',
                borderColor:'#ac6afc',
                borderRadius:'5px',
                color:'white',
                cursor:'pointer'
            }}
            onClick = {loadMonthData}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TransparentButton value='24H View' style={{
                height:'45px',
                width:'15%',
                background:'transparent',
                borderWidth:'1px',
                borderStyle:'solid',
                borderColor:'#ac6afc',
                borderRadius:'5px',
                color:'white',
                cursor:'pointer'
            }}
            onClick = {loadDayData}
            />

          <br/><br/>
          <hr/>
        <div style={{color:'white', textAlign:'left'}}>STATS</div><br/><br/>
        <div>
            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            1 DAY
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? parseFloat(Selection.market_data.price_change_percentage_24h).toFixed(2)+'%':'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            1 MONTH
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? parseFloat(Selection.market_data.price_change_percentage_30d).toFixed(2)+'%':'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            2 MONTHS
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? parseFloat(Selection.market_data.price_change_percentage_60d).toFixed(2)+'%':'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            1 YEAR
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? parseFloat(Selection.market_data.price_change_percentage_1y).toFixed(2)+'%':'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <br/>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            MARKET CAP
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? '$'+Selection.market_data.market_cap.usd:'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            24H HIGH
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? '$'+Selection.market_data.high_24h.usd:'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            24H LOW
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.market_data? '$'+Selection.market_data.low_24h.usd:'' }
            </font>
            <br/><br/><br/><br/>
            </div>

            <div style={{width:'25%', height:'125px', display:'inline-block', color:'white'}}>
            COINGECKO SCORE
            <br/><br/>
            <font color='#00FFE7'>
            { Selection.coingecko_score? Selection.coingecko_score:'' }
            </font>
            <br/><br/><br/><br/>
            </div>

        </div>
        <hr/>
        <br/>
        <div style={{color:'white', textAlign:'left'}}>ABOUT</div><br/><br/>
        <div style={{color:'white', textAlign:'left'}}>
        { Selection.description? parse(Selection.description.en):'' }
        
        </div>
        <br/><br/>
        <hr/>
        <br/>
        <div>

          <div style={{width:'20%', height:'125px', display:'inline-block', color:'#00FFE7'}}>
            <a href={ Selection.links? Selection.links.chat_url[0]:'' } style={{textDecoration:'none', color:'#00FFE7'}} target='blank'>
              Discord &#8599;
            </a>
          </div>

          <div style={{width:'20%', height:'125px', display:'inline-block', color:'#00FFE7'}}>
            <a href={ Selection.links? Selection.links.homepage[0]:'' } style={{textDecoration:'none', color:'#00FFE7'}} target='blank'>
              Website &#8599;
            </a>
          </div>

          <div style={{width:'20%', height:'125px', display:'inline-block', color:'#00FFE7'}}>
            <a href={ Selection.links? `https://twitter.com/${Selection.links.twitter_screen_name}`:'' } style={{textDecoration:'none', color:'#00FFE7'}} target='blank'>
              Twitter &#8599;
            </a>
          </div>

          <div style={{width:'20%', height:'125px', display:'inline-block', color:'#00FFE7'}}>
            <a href={ Selection.links? Selection.links.blockchain_site[0]:'' } style={{textDecoration:'none', color:'#00FFE7'}} target='blank'>
              Etherscan &#8599;
            </a>
          </div>

          <div style={{width:'20%', height:'125px', display:'inline-block', color:'#00FFE7'}}>
            <a href={ Selection.links? `https://www.coingecko.com/en/coins/${Selection.id}`:'' } style={{textDecoration:'none', color:'#00FFE7'}} target='blank'>
              Coingecko &#8599;
            </a>
          </div>

        </div>

        </div>
      ) : (
        ''
      )}
    </div>
  )
}
