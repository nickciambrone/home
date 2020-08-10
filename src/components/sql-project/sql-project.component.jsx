import React, {useState} from 'react';
import Rdbms from '../rdbms/rdbms.component';
import Stocks from '../stocks/stocks.component'
import './sql-project.styles.scss'

const SQLProject = () => {
    const [project, changeProject] = useState('dataAnaly')
    

    return (
        <div className='sql-project'>
            <div className='container'>
            <div className='row' style = {{margin: '5px 0px'}}>
                <div className='col-4'></div>
                <div className = 'col-4'>
                <div className ='projects' style={{width:'100%', border:'black solid 1px', height:'55px', borderRadius:'15px'}}>
                    <div className = {`${project=='dataAnaly'? 'techSelected':''} da`} onClick={()=>changeProject('dataAnaly')}>Data Analysis with Nested Queries </div> 

<div className = {`${project=='rdbms'? 'techSelected':''} rdbms`} onClick={()=>changeProject('rdbms')}>Relational Database Management</div>   

</div>
                </div>
                <div className = 'col-4'></div>
            </div>
                <div className='row'>
                  


                    <div className='col-12 ' >
                     
    {project =='rdbms'? <Rdbms /> :<Stocks />}
                        
                        



                    </div>
             

                </div>
            </div>

        </div>
    )

}

export default SQLProject;