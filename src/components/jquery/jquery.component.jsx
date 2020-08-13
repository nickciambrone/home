import React from 'react';
import BillSplitter from '../bill-splitter/bill-splitter.component';
import Hangman from '../hangman/hangman.component';
import Trivia from '../trivia/trivia.component';
import ProjectBar from '../project-bar/project-bar.component'
import {connect} from 'react-redux'
import './jquery.styles.scss';

const Jquery = ({projectSelected}) => {

    return (
        <div className='jquery'>
            <div className='container'>
                <div className='row' style={{margin:'5px 0px'}}>
                    <div className = 'col-4'>

                    </div>
                    <div className ='col-4'>
                    <ProjectBar projects = {[{id:'billSplitter', name:'Restaurant Tab Splitter'},{id:'hangman', name:'Hangman'},{id:'trivia', name:'Trivia'}]}/>
                    {/* <div className ='projects' style={{width:'100%', border:'black solid 1px', height:'55px', borderRadius:'15px'}}>
                        <div style={{width:'33%', height:'100%', padding:'5px', borderRight:'black solid thin'}} className={`${project == 'billCalc' ? 'techSelected' : ''} billCalc sp`} onClick={() => changeProject('billCalc')}>Restaurant Bill Splitter</div>
                        <div style={{width:'33%', height:'100%', padding:'5px', borderRight:'black solid thin'}} className={`${project == 'hangman' ? 'techSelected' : ''} hangman sp`} onClick={() => changeProject('hangman')}>Hangman</div>
                        <div style={{width:'33%', height:'100%', padding:'5px'}} className={`${project == 'trivia' ? 'techSelected' : ''} trivia sp`} onClick={() => changeProject('trivia')}>Trivia</div>

                        </div> */}
                    </div>
                    <div className = 'col-4'></div>
                </div>
                <div className='row'>
               

                    <div className='col-12' style={{ paddingLeft: '7px',padding:'10px' }}>
                        
                        {projectSelected === 'billSplitter' ? <BillSplitter /> : projectSelected == 'hangman' ? <Hangman /> : projectSelected == 'trivia' ? <Trivia /> : <BillSplitter />}
                    </div>
                </div>
            </div>


        </div>
    )
}
const mapStateToProps =(state)=>({
    projectSelected: state.project.projectSelected
})
export default connect(mapStateToProps)(Jquery);