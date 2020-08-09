import React from "react";
import './project.styles.scss'
import Description from '../description/description.component.jsx';
// import loan from './loan.pdf'
// import cp1 from './cp1.pdf'
import SQLProject from "../sql-project/sql-project.component";
import PythonProject from "../python-project/python-project.component";
import ExcelProject from "../excel-project/excel-project.component";


const Project = ({ language }) => {
    switch (language) {
        case 'description':
            return (<Description />)
        case 'SQL':
            return (<SQLProject />)
        case 'Python':
            return (<PythonProject />)
        case 'Excel':
            return (<ExcelProject />)

        case 'Tableau':
            return (<div >Tableau</div>)
        case 'React':
            return (<div >ReactJS</div>)
        default:
            return ('')
    }


}

export default Project;