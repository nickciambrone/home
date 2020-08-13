import React from 'react';
import Rdbms from '../rdbms/rdbms.component';
import Stocks from '../stocks/stocks.component'
import ProjectBar from '../project-bar/project-bar.component'
import {connect } from 'react-redux'
import './sql-project.styles.scss'

const SQLProject = ({projectSelected}) => {
    

    return (
        <div className='sql-project'>
            <div className='container'>
            <div className='row' style = {{margin: '5px 0px'}}>
                <div className='col-3'></div>
                <div className = 'col-6'>
                    <ProjectBar projects = {[{id:'dataAnaly', name:'Data Analysis with Nested Queries'},{id:'rdbms', name:'Relational Database Management'}]}/>
                    
                </div>
                <div className = 'col-3'></div>
            </div>
                <div className='row'>
                  


                    <div className='col-12 ' >
                     
    {projectSelected =='rdbms'? <Rdbms /> :<Stocks />}
                        
                        



                    </div>
             

                </div>
            </div>

        </div>
    )

}
const mapStateToProps = (state)=>({
    projectSelected: state.project.projectSelected
})

export default connect(mapStateToProps)(SQLProject);