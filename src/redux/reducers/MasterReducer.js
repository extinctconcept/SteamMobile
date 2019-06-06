import {GET} from '../actions/MainActions';
import dataController from '../../services/DataController';


let initialState = {
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET:
           return state
        default: 
            return state;
    }

    
}