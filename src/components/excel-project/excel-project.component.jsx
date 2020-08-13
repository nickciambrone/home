import React from 'react';
import {connect} from 'react-redux';
import ProjectBar from '../project-bar/project-bar.component';
import Cp2 from '../cp2/cp2.component';
import './excel-project.styles.scss'
const ExcelProject = ({projectSelected}) => {
  
  
    return (
        <div className='excel-project'>
            <div className = 'row'>
                <div className = 'col-4'></div>
                <div className = 'col-4'></div>
                {/* <div className = 'col-4'><ProjectBar projects = {[{id:'cp2', name:'Business Analysis'}]} /></div> */}
                <div className = 'col-4'></div>

            </div>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid" style ={{padding:'25px'}}>
                       
                        {projectSelected=='cp2' ? <Cp2/>:''}
                    </div>


                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )


}
const mapStateToProps =(state)=>({
    projectSelected:state.project.projectSelected
})
export default connect(mapStateToProps)(ExcelProject);