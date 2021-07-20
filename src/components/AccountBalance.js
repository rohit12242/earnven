/* import { useEffect, useState } from "react"
export default function AccountBalance(props){
    const [render, setrender] = useState(false);
    const [balance, setbalance] = useState('')
    
    useEffect(()=>{
        setbalance('$456')
        setrender(true)
        props.fetch=false;
    },[props.fetch])
    return (
        <>
        {render && balance}
        </>
    );
} */