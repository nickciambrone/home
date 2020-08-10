import React, { useState, useEffect } from 'react';
import './python-project.styles.scss'
const PythonProject = () => {
    const a = require('./1.png')
    const b = require('./2.png')
    const c = require('./3.png')
    const d = require('./4.png')
    const e = require('./5.png')

    const [page, changePage] = useState(0)
    const images = [a, b, c, d, e]
    const numPages = images.length ;

   
    return (
        <div className='python-project'>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h4 class="display-6">Machine Learning Loan Classifier</h4>
                            <p>In this project, I used Python's SKLearn package to build a model that predicts whether or not a loan applicant will default on a loan. I cleansed the data with Pandas and then used a Decision Tree Classifiern as the machine learning algorithm.</p>
                                <div style = {{ padding:'5px',display:'flex', justifyContent:'center'}}>
                                    <button className={`${0 == page ? 'ghost ' : ''}pageChanger`} onClick={() => { 0 == page ? console.log(page, numPages) : changePage(page - 1) }}>
                                        Previous Page
                </button>
                                    <span> Page {page+1} of {numPages} </span>
                                    <button
                                        className={`${
                                            numPages-1 == page ? 'ghost ' : ''
                                            }pageChanger`}
                                        onClick={() => { numPages-1 == page ? console.log(page, numPages) : changePage(page + 1) }}>
                                        Next Page
                </button>
                                </div>
                                
                                <div style = {{ padding:'5px',display:'flex', justifyContent:'center'}}>

                                <img src={images[page]} width='80%' />
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