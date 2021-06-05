import {createStore, combineReducers} from 'redux';
import subjectReducer from './reducers/subjectReducer';

const rootReducer = combineReducers({
    subjectReducer : subjectReducer
})


const configuereStore = createStore(rootReducer);

export default configuereStore;





