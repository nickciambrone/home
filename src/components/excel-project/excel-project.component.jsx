import React from 'react';
import './excel-project.styles.scss'
const ExcelProject = () => {
    const a = require('./cp2.pdf')
  
  
    return (
        <div className='excel-project'>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid" style ={{padding:'25px'}}>
                            <h4 class="display-5">Statistical Analysis with Excel</h4> 
                            <p>In this project, I used excel's data analysis package to build a linear regression model that related profit to the supply of certain raw materials. I provided data visualization, an executive summary, and an explanation of the procedure that I followed to arrive at my model. </p>
                            <div style={{marginLeft:'5px'}}>
                            <object data={a} style = {{height:'600px',width:'600px'}}>
                                <embed src={a} style = {{height:'600px',width:'600px'}}/>
                            </object>
                            </div>

                    </div>


                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )


}
export default ExcelProject;