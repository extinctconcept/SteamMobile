import { createStore } from 'redux';

import  MasterReducer  from './reducers/MasterReducer';

const store = createStore(MasterReducer);

export default store;