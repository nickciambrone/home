import React, { useState, } from 'react';
import './App.css';
import ProjectButton from './components/project-button/project-button.component'
import Project from './components/project/project.component.jsx'
import loan from './loan.pdf';
import cp1 from './cp1.pdf'
import Stars from './components/stars/stars.component'
import SavageIcons from './components/savage-icons/savage-icons.component'
const App = () => {
  const [technologies, changeLanguage] = useState({ language: 'description', project: null })
  const { language, project } = technologies;
  return (
    <div className="App">
      <div className='container-fluid' style={{ paddingLeft: '0' ,width:'100vw'}}>
        <div className='row'>
          <div className='col-2'>
            <div className='sidenav'>
              <div className='row'>
                <div className='col-8' style={{ padding: '0' }}>
                  <div style={{ paddingLeft: '20px' }}>
                    <div className='frame cursor' style={{ paddingRight: '0' }} onClick={() => changeLanguage({ language: 'description' })} >
                      {/* <img src={require('./headshot.jpg')}
                  width='110px;' /> */}
                    </div>
                  </div>
                </div>
                <div className='col-4' style={{ padding: '0', justifyContent: 'left' }}>
                <SavageIcons contact={()=>changeLanguage({language:'contact'})}changeLanguage={()=>changeLanguage({language:'description'})}/>
                </div>
              </div>
              <br />
              <h6 className='cursor' onClick={() => changeLanguage({ language: 'description' })}> Nicholas Ciambrone</h6> <br />

              <div className='row'>
                <div className='col-5'>
                  SQL <br />
                Python<br />
                Excel<br />

                Tableau<br />
                ReactJS

            </div>
                <div className='col-7'>
                  <Stars />

                </div>
              </div>

            </div>
          </div>
          <div className='col-10'>
            <nav className="navbar navbar-expand-lg ">
              <div className="container">

                <ProjectButton className='navbar-brand' skill='SQL' handleClick={() => changeLanguage({ language: 'SQL' })} />
                <ProjectButton className='navbar-brand' skill='Python' handleClick={() => changeLanguage({ language: 'Python', project: loan })} />
                <ProjectButton className='navbar-brand' skill='Excel' handleClick={() => changeLanguage({ language: 'Excel', project: cp1 })} />
                {/* <ProjectButton className='navbar-brand' skill='Tableau' handleClick={() => changeLanguage({ language: 'Tableau' })} /> */}
                <ProjectButton className='navbar-brand' skill='jQuery' handleClick={() => changeLanguage({ language: 'jQuery' })} />

                <ProjectButton className='navbar-brand' skill='ReactJS' handleClick={() => changeLanguage({ language: 'React' })} />

              </div>
            </nav>


            <div className='project-holder'>
              <Project language={language} />
            </div>


          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
