import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishesReducer';
import { Comments } from './commentsReducer';
import { Promotions } from './promotionsReducer';
import { Leaders } from './leadersReducer';


export const ConfigureStore = () => {
        const store = createStore(
            combineReducers({
                dishes: Dishes,
                comments: Comments,
                promotions: Promotions,
                leaders: Leaders
            })
        );
    
        return store;
    }


// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer, // reducer
//         initialState, // our initialState
//     );

//     return store;
// }