import React from 'react'
import './description.styles.scss'

const Description = () => (
    <div>
        <img className='arrows' src={require("./arrows.png")} alt="" width="400px;" />

        <br />
        <div className="jumbotron">
            <h4 className="display-4">Hello, visitor!</h4>

            <div className='row'>
                <div className='col-6'>
                    <p className="lead">This is my portfolio of projects that I've completed professionally, in my academic career, and in my free time. View them by clicking the buttons above, they are grouped by the technology employed.  </p>
                    <hr className="my-4" />
                    <p>I graduated from Rutgers Business School in May of 2020 with a 3.9 major GPA in Business Analytics and Information Technology, my cumulative GPA was a 3.4</p>
                    <div className ='rutgers'>
                        <form method='get' action={require('./officialTranscript.pdf')} target='_blank'>
                            <button className="document" type="submit">View My Transcript</button>
                        </form>
                      
                    </div>

                </div>
                <div className='col-6' >
                    <div style={{ marginLeft: '15px' }}>I have experience as a data analyst for a consulting company and as a technology analyst for a tech startup. I am passionate about data analytics and application development, and the overlap between the two. 
                    <form method='get' action={require('./resume.pdf')} target='_blank'>
                        <button className="document resume" type="submit">View My Resume</button>
                    </form>
                    </div>

                </div>

            </div>
        </div>
    </div>
)

export default Description;