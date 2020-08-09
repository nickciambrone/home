import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';


import './single-page.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { pdf, language } = props;
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);


    }
    useEffect(() => {
        switch (language) {
            case ('Python'):
                setTitle('Machine Learning loan application classifier with Python')
                setDescription('In this project I cleansed and analyzed loan application data. I then used the SKlearn decision tree classifier to build a model that predicts if a loan applicant will pay back their loan in full.')
                break;
            case ('Excel'):
                setTitle('Linear Regression executive summary and analysis in Excel')
                setDescription('I built linear regression models in Excel and provided an in depth analysis along with data visualizaions for the client.')
                break;
        }
    })

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }




    return (
        // {`${SomeConstOrVariableOrExpression} simple text`}
        <div className={`jumbotron jumbotron-fluid ${language=='Python' ? 'tall' : 'reallyTall'}`}>
            <div className="container">

                <h3 className="display-10">{title}</h3>
                <p className="lead">{description}</p>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>

                        <div className='pageInfo'>
                            <button className='changePage' type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="4" y1="12" x2="14" y2="12" />
                                    <line x1="4" y1="12" x2="8" y2="16" />
                                    <line x1="4" y1="12" x2="8" y2="8" />
                                    <line x1="20" y1="4" x2="20" y2="20" />
                                </svg>
                            </button>
                            <div className='page'>

                                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}


                            </div>


                            <button
                                type="button"
                                className='changePage'
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="20" y1="12" x2="10" y2="12" />
                                    <line x1="20" y1="12" x2="16" y2="16" />
                                    <line x1="20" y1="12" x2="16" y2="8" />
                                    <line x1="4" y1="4" x2="4" y2="20" />
                                </svg>
                            </button>
                        </div>
                        <Document
                    file={pdf}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className='document'
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                    </div>
                    <div className='col-4'></div>

                </div>
          
            </div>
        </div>


    );
}
