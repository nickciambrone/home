import React from 'react'
import {connect} from 'react-redux';
import {changeProject} from '../../redux/python/python.actions'
const WithButtons = (WrappedComponent) => {
    const Buttons = ({numPages, page, changePage}) => {
        return (
            <div>
            <div style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
                <button className={`${0 == page ? 'ghost ' : ''}pageChanger`} onClick={() => { 0 == page ? console.log(page, numPages) : changePage(page - 1) }}>
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
            {WrappedComponent}
            </div>
        )
    }
    return Buttons
}
// const mapDispatchToProps = dispatch
const mapStateToProps = (state) => ({
    currentPage:state.python.currentPage,

})
const mapDispatchToProps = (dispatch) => ({
    changeProject:project => dispatch(changeProject(project)),

})
export default (WithButtons);
