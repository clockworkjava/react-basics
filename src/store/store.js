import {createStore} from 'redux';
import adminPanelReducer from './adminPanelReducer';

const store = createStore(adminPanelReducer);

export default store;