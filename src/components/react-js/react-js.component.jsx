import React from 'react';
import './react-js.styles.scss'
const ReactJS = () => {
    return (
        <div className='react-js'>
            <div className='container'>
                <div className='row' style={{padding:'12px'}}>
                    <div className='col-6' style={{padding:0}}>
                    <div className = 'appLink'><a href='https://royal-cloth.herokuapp.com/shop' className='' target='_blank'>eCommerce Web App</a></div>

                    <img src={require('./royalCloth.png')} width='100%' />


                    </div>
                    <div className='col-6'>
                    <div className = 'appLink'><a href='https://guarded-scrubland-37816.herokuapp.com/ ' className='' target='_blank'>NFL Entertainment App</a></div>

                                           
                    <img src={require('./nflEvate.png')} width='100%' />

                    </div>

                </div>
                <div className = 'row' style={{padding:'12px'}}>
                    <div className='col-6'>
                        <div className = 'appLink'><a href='https://github.com/nickciambrone/pigeon' className='' target='_blank'>Pigeon</a></div>
                        <img src='https://cdn.pixabay.com/photo/2013/07/12/19/33/carrier-pigeon-154970_960_720.png' width='100%' height='450px'/>

                    </div>
                    <div className ='col-6'>

                    </div>
                </div>


            </div>
        </div>)
}

export default ReactJS