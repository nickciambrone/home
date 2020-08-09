import React, { useState, } from 'react';
import './App.css';
import ProjectButton from './components/project-button/project-button.component'
import Project from './components/project/project.component.jsx'
import loan from './loan.pdf';
import cp1 from './cp1.pdf'
import SinglePage from './components/single-page/single-page.component';
import Stars from './components/stars/stars.component'
const App = () => {
  const [technologies, changeLanguage] = useState({ language: 'description', project: null })
  const { language, project } = technologies;
  return (
    <div className="App">
      <div className='container' style = {{paddingLeft:'0'}}>
        <div className='row'>
          <div className='col-2'>
            <div className='sidenav'>
              <div className='row'>
                <div className='col-8' style={{padding:'0'}}>
                  <div style={{paddingLeft:'20px'}}>
                <div className='frame cursor' style={{paddingRight:'0'}} onClick={() => changeLanguage({ language: 'description' })} >
                  {/* <img src={require('./headshot.jpg')}
                  width='110px;' /> */}
                </div>
                </div>
                </div>
                <div className = 'col-4'  style={{padding:'0', justifyContent:'left'}}>
                <a target="_blank" href='https://www.github.com/nickciambrone' className='contact-item-link' style={{ margin: '25px 0 0 4px', paddingLeft: '7px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                  </svg> </a>
                <a target="_blank" href='https://mail.google.com/mail/?view=cm&fs=1&to=nickciambrone@gmail.com' className='contact-item-link' style={{ margin: '25px 0 0 4px', paddingLeft: '7px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </a>
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
                <ProjectButton className='navbar-brand' skill='Tableau' handleClick={() => changeLanguage({ language: 'Tableau' })} />
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
