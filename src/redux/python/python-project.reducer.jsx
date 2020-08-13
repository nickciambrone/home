import  PythonActionTypes  from './python.types'
const INITIAL_STATE = {
    projectSelected: 'loan',
    currentPage: 0,
    numPages: 0
}

const pythonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PythonActionTypes.PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage == 0 ? state.currentPage : state.currentPage - 1
            }
        case PythonActionTypes.NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage == state.numPages - 1 ? state.currentPage : state.currentPage + 1
            }
        case PythonActionTypes.CHANGE_PROJECT:
            return {
                projectSelected:action.payload.projectName,
                currentPage: 0,
                numPages:action.payload.numPages
            }
        default:
            return state
    }
}
export default pythonReducer;