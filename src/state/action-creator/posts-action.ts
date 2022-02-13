import Axios from 'axios';
import { postActions } from "../action-type/posts-type";

const url:string = 'https://jsonplaceholder.typicode.com/posts';

interface postsAction {}

export const fetchPost = () => async (dispatch:any,getState:any)=> {
    dispatch({type:postActions.FETCHPOSTREQUEST});
try {
    const response = await Axios.get(url);
    dispatch({type:postActions.FETCHPOSTSUCESS,payload:response.data});
    
} catch (error) {
    dispatch({type:postActions.FETCHPOSTFAILURE,error:error})
}
        // dispatch({
        //     type:postActions.FETCHPOSTS,
        //     payload:response.data
        // })
}

// export const fetchPost = () => {
//     return async (dispatch:any,getState:any)=> {

//         const response = await Axios.get(url);
//         dispatch({
//             type:postActions.FETCHPOSTS,
//             payload:response.data
//         })
//     }
// }