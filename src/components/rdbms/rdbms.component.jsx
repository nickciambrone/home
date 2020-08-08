import React from 'react';
import './rdbms.styles.scss'
const Rdbms = () => {
    const image1 = require('./1.png');
    const image2 = require('./2.png');
    const diagram = require('./diagram.png');
    return(

    <div >
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
  <h6 className="display-10">Relational Database Management project for Business Data Management</h6>

    <p className = 'rdbmsDescription'>I developed a SQL database for a hotel that enabled the management staff access to important sales 
    and customer information. I then built an html form that enabled the user to search for records in the database by keywords.  </p>
    <img width ='600px;' src={diagram} alt="" className='ml'/>

<img width ='350px' src={image1} alt="sql Code" className='align-top'/>
<img width ='350px' src={image2} alt="sql Code" className='align-top'/>

  </div>
</div>
      
    </div>
    )
}
export default Rdbms;