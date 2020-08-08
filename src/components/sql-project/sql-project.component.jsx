import React, {useState} from 'react';
import Rdbms from '../rdbms/rdbms.component';
import Stocks from '../stocks/stocks.component'
import './sql-project.styles.scss'

const SQLProject = () => {
    const [project, changeProject] = useState('description')
    

    return (
        <div className='sql-project'>
            <div className='container'>
           
                <div className='row'>
                    <div className='col-2 projects'> 
                   <div className = 'da sp' onClick={()=>changeProject('dataAnaly')}><span className = 'middle'>Data Analysis with Nested Queries</span>  </div> 

                   <div className = 'rdbms sp' onClick={()=>changeProject('rdbms')}>Relational Database Management</div>   

                   <div className = 'overview ep' onClick={()=>changeProject('description')}>Overview</div>



                   </div>
                    <div className='col-10' >
    {project =='description' ? 'click one of the projects on the left' : project=='rdbms'? <Rdbms /> :<Stocks />}
                        
                        



                    </div>
             

                </div>
            </div>

        </div>
    )

}

export default SQLProject;