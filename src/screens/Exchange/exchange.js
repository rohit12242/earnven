import React, { Component } from 'react';
import './exchange.css';
import eth from '../Assets/eth.svg';

export default class Exchange extends Component {

    openModal = () => {
        alert("Hello World");
    };
    render() {
        return (
                <div className="main-container">
                    <div className="outbox">
                        <div className="main-header">Exchange</div>
                        <div className="box">

                            <div className="firstdiv">
                                <div className="firstdiv1">
                                    <div className="swap"> Swap </div>
                                    <div>
                                        <button className="select-button-wrapper" onClick={this.openModal}>
                                            <span className="select-token-container">
                                                <img src={eth} alt=''/>
                                                <div className="select-token-wrapper">
                                                    <span className="select-token-text">
                                                        ETH
                                                    </span>
                                                </div>
                                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5.5 5L10 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>


                                <div className="firstdiv2" style={{ marginLeft: "7px" }}>
                                    <div className="number"> ~$5,735.98 </div>
                                    <div>
                                        <input className="inputfield"
                                            type="text" inputMode="decimal" placeholder="00.00"
                                            minLength="1"
                                            maxLength="79"
                                            spellCheck="false"
                                        >
                                        </input>
                                    </div>
                                </div>



                                <div className="firstdiv3">
                                    <div className="swap"> For </div>
                                    <div>
                                        <button className="select-button-wrapper" onClick={this.openModal}>
                                            <span className="select-token-container">
                                                <div className="select-token-wrapper">
                                                    <span className="select-token-text">
                                                        Select
                                                    </span>
                                                </div>
                                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5.5 5L10 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="firstdiv4" style={{ marginLeft: "7px" }}>
                                    <div className="number"> ~$2325.91 </div>
                                    <div>
                                        <input className="inputfield" inputMode="decimal"
                                            type="text"
                                            pattern="^[0-9]*[.,]?[0-9]*$"
                                            placeholder="00.00"
                                            minLength="1"
                                            maxLength="79"
                                            spellCheck="false"
                                        ></input>
                                    </div>
                                </div>

                            </div>

                            <div className="seconddiv">Transaction Settings</div>
                            <div className="thirddiv"> <div className="thirddiv-title"> Slippage </div> <div className="dash"></div> <div className="slippage-input-box"> <input className="slippage-input" placeholder="0" maxLength="3"></input>
                                <div className="Percentage"> <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.406781 2.85C0.406781 2.19133 0.597448 1.67567 0.978781 1.303C1.36878 0.930333 1.86711 0.744 2.47378 0.744C3.08045 0.744 3.57445 0.930333 3.95578 1.303C4.34578 1.67567 4.54078 2.19133 4.54078 2.85C4.54078 3.51733 4.34578 4.03733 3.95578 4.41C3.57445 4.78267 3.08045 4.969 2.47378 4.969C1.86711 4.969 1.36878 4.78267 0.978781 4.41C0.597448 4.03733 0.406781 3.51733 0.406781 2.85ZM8.75278 0.899999L3.64378 10H1.87578L6.97178 0.899999H8.75278ZM2.46078 1.836C1.98411 1.836 1.74578 2.174 1.74578 2.85C1.74578 3.53467 1.98411 3.877 2.46078 3.877C2.69478 3.877 2.87678 3.79467 3.00678 3.63C3.13678 3.45667 3.20178 3.19667 3.20178 2.85C3.20178 2.174 2.95478 1.836 2.46078 1.836ZM6.11378 8.037C6.11378 7.36967 6.30445 6.854 6.68578 6.49C7.07578 6.11733 7.57411 5.931 8.18078 5.931C8.78745 5.931 9.27712 6.11733 9.64978 6.49C10.0311 6.854 10.2218 7.36967 10.2218 8.037C10.2218 8.70433 10.0311 9.22433 9.64978 9.597C9.27712 9.96967 8.78745 10.156 8.18078 10.156C7.56545 10.156 7.06711 9.96967 6.68578 9.597C6.30445 9.22433 6.11378 8.70433 6.11378 8.037ZM8.16778 7.023C7.67378 7.023 7.42678 7.361 7.42678 8.037C7.42678 8.72167 7.67378 9.064 8.16778 9.064C8.65312 9.064 8.89578 8.72167 8.89578 8.037C8.89578 7.361 8.65312 7.023 8.16778 7.023Z" fill="white" />
                                </svg>
                                </div>
                            </div> </div>
                            <div className="fourthdiv"><div className="fourthdiv-title"> Minimum output </div> <div className="dash1"> </div> <div className="minimum-op-text">77</div> </div>
                            <div className="fifthdiv"><div className="fifthdiv-title"> Rate </div> <span className="dash2"></span> <div className="rate-text">1 DAI = 0.00034 ETH</div> </div>
                        </div>
                        <div className="end"><div className="submit"> <button className="submit-btn">Submit</button></div></div>
                    </div>
                </div>
        )
    }
}
