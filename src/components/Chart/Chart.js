import { ResponsiveLine } from '@nivo/line'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  // ChartDataTwentyFour,
  // ChartDataOneWeek,
  ChartDataOneMonth,
} from './ChartDataFetch/ChartDataFetch'
// import { LocalLaundryService } from '@material-ui/icons';
// import LoadSpinner from '../LoadSpinner/LoadSpinner'

export const Chart = (props) => {

  const [Price, setPrice] = useState(null)
  const [Selection, setSelection] = useState(null)
  // const [Token, setToken] = useState('aave')

  React.useEffect(() => {
    
    console.log(props.token)

    axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
        .then(async(response) => {
            setSelection(response.data)
    })

    if(props.token!==''){
      console.log(1, props.token)
      ChartDataOneMonth(props.token).then((res) => {
        setPrice(res)
        // console.log(Price)
      })

    }
    

  }, [props]);


  useEffect(() => {
    // console.log(props.token)
    // setToken(props.token)

    // var lol = async() => {
    //   await axios.get(`https://api.coingecko.com/api/v3/coins/${props.token}`,{},{})
    //     .then(async(response) => {
    //         setSelection(response.data)
    // })

    // ChartDataOneMonth(props.token).then((res) => {
    //   setPrice(res)
    //   console.log(Price)
    // })

    // lol()

    // }
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
      {/* {props.token} */}
      {Selection ? (
        <div style={{ height: '400px'}}>
          <br/>
          <center>
          <font color='white'>
          {Selection.name} <br/>
          ${ Selection.symbol? Selection.symbol.toUpperCase():'' }
          </font>
          </center>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
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
              legend: 'price',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            enablePoints={false}
            enableGridX={false}
            enableGridY={false}
            colors={{ scheme: 'nivo' }}
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
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
