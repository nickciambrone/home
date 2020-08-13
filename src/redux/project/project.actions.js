import {ProjectActionTypes} from './project.types'

export const changeProject = (project) =>({
    type:ProjectActionTypes.CHANGE_PROJECT,
    payload:project,
})


