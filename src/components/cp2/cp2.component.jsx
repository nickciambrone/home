import React from 'react';

const Cp2 = () => {
    const a = require('./cp2.pdf')
    return (
        <div>
            <h4 class="display-5">Statistical Analysis with Excel</h4>
            <p>In this project, I used excel's data analysis package to build a linear regression model that related profit to the supply of certain raw materials. I provided data visualization, an executive summary, and an explanation of the procedure that I followed to arrive at my model. </p>
            <div style={{ marginLeft: '5px' }}>
                <object data={a} style={{ height: '600px', width: '600px' }}>
                    <embed src={a} style={{ height: '600px', width: '600px' }} />
                </object>
            </div>
        </div>
    )
}

export default Cp2;
