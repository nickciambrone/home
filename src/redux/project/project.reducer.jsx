import {ProjectActionTypes} from './project.types'
const INITIAL_STATE = {
    projectSelected: '',
}

const projectReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProjectActionTypes.CHANGE_PROJECT:
            return {
                projectSelected: action.payload
            }
        default:
            return state
    }
}
export default projectReducer;