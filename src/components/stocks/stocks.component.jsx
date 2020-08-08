import React from 'react';
import './stocks.styles.scss';
const Rdbms = () => {
    const stocks1 = require('./stocks1.png');
    const stocks2 = require('./stocks2.png');
    return(

    <div >
          <div className="jumbotron jumbotron-fluid">
  <div className="container">
  <h6 className="display-10">Stock Market Analysis project for Business Decision Analytics Under Uncertainty</h6>

    <p className = 'rdbmsDescription'> For this class project, I was tasked with retrieving specific information from a financial database for a firm. I used the PyMySQL package to connect it to an HTML form that enabled the user the ability to search for stock information.</p>
    <img  width ='700px;' src={stocks1} alt=""/>

    <img  width ='700px;' src={stocks2} alt=""/>

  </div>
</div>


    </div>
    )
}
export default Rdbms;