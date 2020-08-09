import React from 'react';
import './excel-project.styles.scss'
const ExcelProject = () => {
    const a = require('./cp2.pdf')
  
  
    return (
        <div className='excel-project'>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid" >
                            <h1 class="display-4">Fluid jumbotron</h1> 
                            <object data={a} style = {{height:'600px',width:'400px'}}>
                                <embed src={a} style = {{height:'600px',width:'400px'}}/>
                            </object>

                    </div>


                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )


}
export default ExcelProject;