import React, { useState, useEffect } from 'react';
import ProjectBar from '../project-bar/project-bar.component'
import './python-project.styles.scss'
import WithButtons from '../with-buttons/with-buttons.component';
import LoanProject from '../loan-proejct/loan-project.component'
const PythonProject = () => {
    const LoanProjectWithButtons = WithButtons(LoanProject);

   
    return (
        <div className='python-project'>
            <div className = 'row'>
            <div className = 'col-4'></div>
            <div className = 'col-4'></div>

                {/* <div className = 'col-4'><ProjectBar projects = {[{id:'linearRegression', name:'Business Analysis'}]} /></div> */}
                <div className = 'col-4'></div>
            </div>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h4 class="display-6">Machine Learning Loan Classifier</h4>
                            <p>In this project, I used Python's SKLearn package to build a model that predicts whether or not a loan applicant will default on a loan. I cleansed the data with Pandas and then used a Decision Tree Classifiern as the machine learning algorithm.</p>
                          
                                
                                <div style = {{ padding:'5px',display:'flex', justifyContent:'center'}}>
                            <LoanProject  />
                                </div>
                        </div>
                    </div>


                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )


}
export default PythonProject;