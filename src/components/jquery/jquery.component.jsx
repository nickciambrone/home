import React, { useEffect, useState } from 'react';
import BillSplitter from '../bill-splitter/bill-splitter.component';
import Hangman from '../hangman/hangman.component';
import Trivia from '../trivia/trivia.component';

import './jquery.styles.scss';

const Jquery = () => {
    const [project, changeProject] = useState('billCalc')
    return (
        <div className='jquery'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 projects' >
                        <div className={`${project == 'billCalc' ? 'techSelected' : ''} billCalc sp`} onClick={() => changeProject('billCalc')}>Restaurant Bill Splitter</div>
                        <div className={`${project == 'hangman' ? 'techSelected' : ''} hangman sp`} onClick={() => changeProject('hangman')}>Hangman</div>
                        <div className={`${project == 'trivia' ? 'techSelected' : ''} trivia sp`} onClick={() => changeProject('trivia')}>Trivia</div>


                    </div>

                    <div className='col-10' style={{ paddingLeft: '7px',backgroundColor:'#1111',padding:'10px' }}>
                        {project == 'billCalc' ? <BillSplitter /> : project == 'hangman' ? <Hangman /> : project == 'trivia' ? <Trivia /> : <BillSplitter />}
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Jquery;