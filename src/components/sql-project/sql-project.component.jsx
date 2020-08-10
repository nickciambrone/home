import React, {useState} from 'react';
import Rdbms from '../rdbms/rdbms.component';
import Stocks from '../stocks/stocks.component'
import './sql-project.styles.scss'

const SQLProject = () => {
    const [project, changeProject] = useState('dataAnaly')
    

    return (
        <div className='sql-project'>
            <div className='container'>
           
                <div className='row'>
                    <div className='col-2 projects'> 
                   <div className = {`${project=='dataAnaly'? 'techSelected':''} da sp`} onClick={()=>changeProject('dataAnaly')}><span className = 'middle'>Data Analysis with Nested Queries</span>  </div> 

                   <div className = {`${project=='rdbms'? 'techSelected':''} rdbms sp`} onClick={()=>changeProject('rdbms')}>Relational Database Management</div>   




                   </div>
                    <div className='col-10' >
    {project =='rdbms'? <Rdbms /> :<Stocks />}
                        
                        



                    </div>
             

                </div>
            </div>

        </div>
    )

}

export default SQLProject;