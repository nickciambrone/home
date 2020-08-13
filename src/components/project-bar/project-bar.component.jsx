import React from 'react';
import {changeProject} from '../../redux/project/project.actions'
import { connect } from 'react-redux'

import './project-bar.styles.scss';

const ProjectBar = ({projectSelected, projects, changeProject})=>(
    <div className = 'project-bar'>
     {projects.map((project, index)=>(
        <div className={`${projectSelected == project.id ? 'techSelected' : ''} ${index==0?'leftMost':index==projects.length-1?'rightMost':''} sp`} onClick={()=>changeProject(project.id)}>{project.name}</div>
     ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
      projectSelected: state.project.projectSelected
    }
  }

  const mapDispatchToProps = dispatch =>({
    changeProject: (project)=> dispatch(changeProject(project))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBar);