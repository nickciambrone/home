import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import projectReducer from './project/project.reducer'
import pythonReducer from './python/python-project.reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['project']
}
const rootReducer =  combineReducers({
    project: projectReducer,
    python: pythonReducer

  
})

export default persistReducer(persistConfig, rootReducer);