import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers/reducer';
import postsReducer from './reducers/posts';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';

// const firstMiddleware = (store:any)=>(next:any)=>(action:any)=> {
//     console.log('first middleware run',action);

//     return next(action)
// }

// const func = (store:any)=> {
//     console.log(store.getState()) 
//     return (next:any)=> {
//         console.log(next)
//         return (action:any)=>{
//             console.log(action)
//         }
//     }
// }

export const store = createStore(
    postsReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store['dispatch'];