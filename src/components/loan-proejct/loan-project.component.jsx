import React, {useState} from 'react';
import './loan-project.styles.scss'
const LoanProject = ()=>{
    const a = require('./1.png')
    const b = require('./2.png')
    const c = require('./3.png')
    const d = require('./4.png')
    const e = require('./5.png')

    const [page, changePage] = useState(0)
    const images = [a, b, c, d, e]
    const numPages = images.length ;
    return (
        <div>
        <div style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
        <button className={`${0 == page ? 'ghost ' : ''} pageChanger`} onClick={() => { 0 == page ? console.log(page, numPages) : changePage(page - 1) }}>
            Previous Page
</button>
        <span> Page {page + 1} of {numPages} </span>
        <button
            className={`${
                numPages - 1 == page ? 'ghost ' : ''
                }pageChanger`}
            onClick={() => { numPages - 1 == page ? console.log(page, numPages) : changePage(page + 1) }}>
            Next Page
</button>
    </div>
        <img src={images[page]} width='80%' />
        </div>
    )

}
export default LoanProject;