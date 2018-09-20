import {createStore} from 'redux';
import adminPanelReducer from './adminPanelReducer';

const store = createStore(adminPanelReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;