import React from 'react';

import './project-button.styles.scss'

const ProjectButton = ({skill, handleClick}) =>(
    <div className = 'project-button' style={{zIndex:2}}>
        <button onClick={handleClick} className='button'>{skill}</button>
    </div>
)
export default ProjectButton;