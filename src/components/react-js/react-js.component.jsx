import React from 'react';
import './react-js.styles.scss'
import {connect} from 'react-redux';
import {changeProject} from '../../redux/project/project.actions'
import ProjectBar from '../project-bar/project-bar.component'
const ReactJS = ({currentProject}) => {
    return (
        <div className='react-js'>
            <div className='container'>
            <div className = 'row'> <div className = 'col-4'></div>
                <div className = 'col-4'><ProjectBar projects = {[{id:'ecommerce', name:'eCommerce Application'},{id:'nflEvate', name:'NFL App'},{id:'pigeon', name:'Survey Pigeon'}]} /></div>
                <div className = 'col-4'></div></div>
                <div className='row' style={{padding:'12px'}}>
                    <div className = 'col-2'></div>
                    <div className='col-8' style={{padding:0}}>
                    {currentProject==='ecommerce' ? (<div><div className = 'appLink'><a href='https://royal-cloth.herokuapp.com/shop' className='' target='_blank'>eCommerce Web App</a></div><img src={require('./royalCloth.png')} width='100%' /></div>) :''}
                 
                    {currentProject==='nflEvate' ? (<div><div className = 'appLink'><a href='https://guarded-scrubland-37816.herokuapp.com/ ' className='' target='_blank'>NFL Entertainment App</a></div><img src={require('./nflEvate.png')} width='100%' /></div>) :''}
                    {currentProject==='pigeon' ? (<div><div className = 'appLink'><a href='https://github.com/nickciambrone/pigeon' className='' target='_blank'>Pigeon</a></div><img src='https://cdn.pixabay.com/photo/2013/07/12/19/33/carrier-pigeon-154970_960_720.png' width='70%' height='320px'/></div>) :''}


                    

                    </div>
                    <div className = 'col-2'></div>


                </div>
                <div className = 'row' style={{padding:'12px'}}>
                    <div className='col-6'>
                        
                    </div>
                    <div className ='col-6'>

                    </div>
                </div>


            </div>
        </div>)
}
const mapStateToProps = state =>({
    currentProject : state.project.projectSelected
})
const mapDispatchToProps = dispatch=> ({
    changeProject: project => dispatch(changeProject(project))
})
export default connect(mapStateToProps, mapDispatchToProps)(ReactJS)