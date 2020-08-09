import React, { useState, useEffect } from 'react';
import './python-project.styles.scss'
const PythonProject = () => {
    const a = require('./1.png')
    const b = require('./2.png')
    const c = require('./3.png')
    const d = require('./4.png')
    const e = require('./5.png')

    const [page, changePage] = useState(1)
    const images = [a, b, c, d, e]
    const numPages = images.length - 1;

   
    return (
        <div className='python-project'>
            <div className='row'>
                <div className="col-1"></div>
                <div className="col-10">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">Fluid jumbotron</h1>
                                <div style = {{marginLeft:'5px', padding:'5px'}}>
                                    <button className={`${1 == page ? 'ghost ' : ''}pageChanger`} onClick={() => { 1 == page ? console.log(page, numPages) : changePage(page - 1) }}>
                                        Previous Page
                </button>
                                    <span> Page {page} of {numPages} </span>
                                    <button
                                        className={`${
                                            numPages == page ? 'ghost ' : ''
                                            }pageChanger`}
                                        onClick={() => { numPages == page ? console.log(page, numPages) : changePage(page + 1) }}>
                                        Next Page
                </button>
                                </div>

                                <img src={images[page]} width='80%' />
                        </div>
                    </div>


                </div>
                <div className="col-1"></div>

            </div>

        </div>
    )


}
export default PythonProject;