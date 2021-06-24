import React from 'react'

export default function index({value,...props}) {
    return (
        <>
        <input
            type='number'
            value={value}
            style={{background:'transparent',
                    borderColor:'white',
                    borderStyle:'solid',
                    width:'100px',
                    height:'35px',
                    borderRadius:'10px',
                    color:'white',
                    paddingLeft:'50px', 
                    paddingRight:'50px',
                    fontSize:'20px',
                    borderWidth:'1px'
                }}
            placeholder='00.00'
            {...props}
        >
        </input>
        </>
    )
}
