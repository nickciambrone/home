import React from 'react';
import './bill-splitter.styles.scss';

const BillSplitter = () => {
    return (
        <div className='bill-splitter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4' style={{display:'flex', justifyContent:'center',margin:'8px 0'}}>           
                     <a style={{color:'inherit'}}href='https://nickciambrone.github.io/splitmybill/' className = 'linkToCalc'target='_blank'>Use the app</a>
                    </div>
                    <div className='col-4'>

                        <div style={{ display: 'flex' }}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-left-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M18 6h-6a3 3 0 0 0 -3 3v10l-5 -5m10 0l-5 5" />
                        </svg> <span>Screenshot</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-right-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M6 6h6a3 3 0 0 1 3 3v10l-5 -5m10 0l-5 5" />
                            </svg>
                        </div>
                    </div>
                    <div className = 'col-4'></div>
                    <div className ='row'>
                        <div className = 'col-12'>
                        <img className='screenshot' src={require('./billCalc.png')} width='100%' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BillSplitter;