import PythonActionTypes from './python.types'


export const nextPage = () =>({
    type:PythonActionTypes.NEXT_PAGE,
})
export const prevPage = () =>({
    type:PythonActionTypes.PREVE_PAGE,
})
export const changeProject = project =>({
    type:PythonActionTypes.CHANGE_PROJECT,
    payload:project
})

