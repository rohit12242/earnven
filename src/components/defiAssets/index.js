
import * as BiIcons from "react-icons/bi";

export default function DefiAssets() {
    return (
        <div style={{ border: '1px solid #737373', borderRadius: '7px', width: '260px', height: '253px' }}>
            <div style={{ margin: '30px', color: '#f5f5f5', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '300', letterSpacing: '0.025em',fontSize:'12px' }}>
                <h4 style={{ margin: '5px',color:'#737373' ,fontSize:'14px'}}>Defi assets</h4>
                <div style={{  height: '28px', marginTop: '17px' }}>
                    <BiIcons.BiWallet className='icons' style={{ float: 'left', paddingTop: '0px' }} />
                    <p style={{ float: 'left', position: 'relative', margin: '0px', marginLeft: '11px' }}>Wallet</p>
                    <hr style={{ borderTop: '1px dashed', borderBottom: '0px', width: '30%',margin: 'revert', marginLeft: '11px', float: 'left',marginRight:'10px' }}></hr>
                    <p style={{ display: 'contents' }}>$52173.20</p>
                </div>
                <div style={{ height: '28px', marginTop: '17px' }}>
                    <BiIcons.BiWallet className='icons' style={{ float: 'left', paddingTop: '0px' }} />
                    <p style={{ float: 'left', position: 'relative', margin: '0px', marginLeft: '12px' }}>Deposits</p>
                    <hr style={{ borderTop: '1px dashed ', borderBottom: '0px', width: '24%',  margin: 'revert', marginLeft: '10px', float: 'left',marginRight:'10px' }}></hr>
                    <p style={{ display: 'contents' }}>$12173.20</p>
                </div>
                <div style={{ height: '28px', marginTop: '17px' }}>
                    <BiIcons.BiWallet className='icons' style={{ float: 'left', paddingTop: '0px' }} />
                    <p style={{ float: 'left', position: 'relative', margin: '0px', marginLeft: '12px' }}>NFTs</p>
                    <hr style={{ borderTop: '1px dashed ', borderBottom: '0px', width: '34%',  margin: 'revert', marginLeft: '10px', float: 'left',marginRight:'10px' }}></hr>
                    <p style={{ display: 'contents' }}>$2126.20</p>
                </div>
                <div style={{  height: '28px', marginTop: '17px' }}>
                    <BiIcons.BiWallet className='icons' style={{ float: 'left', paddingTop: '0px' }} />
                    <p style={{ float: 'left', position: 'relative', margin: '0px', marginLeft: '12px' }}>Liquidity pools</p>
                    <hr style={{ borderTop: '1px dashed', borderBottom: '0px', width: '10%',margin: 'revert', marginLeft: '8px', float: 'left',marginRight:'10px' }}></hr>
                    <p style={{ display: 'contents' }}>$193.20</p>
                </div>
            </div>
        </div>
    );
}