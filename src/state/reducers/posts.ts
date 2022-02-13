import {postActions} from '../action-type/posts-type';

// interface postAction {type:postActions.FETCHPOSTS;payload:Post[]}

interface ActionType {
    type:postActions.FETCHPOSTREQUEST
    |postActions.FETCHPOSTSUCESS
    |postActions.FETCHPOSTFAILURE;
    payload:any[];
}

const initialState = {
    items:[],
    loading:false,
    error:null
}


const postsReducer = (state = initialState,action:any)=> {
    switch(action.type){
        case postActions.FETCHPOSTREQUEST:{
            return {
                ...state,
                loading:true,
                error:null
            }
        }       
         case postActions.FETCHPOSTSUCESS:{
            return {
                ...state,
                loading:false,
                items:action.payload
            }
        }        
        case postActions.FETCHPOSTFAILURE:{
            return {
                ...state,
                loading:false,
                error:action.error,
                items:[]
            }
        }
        default:{
            return state;
        }
    }
}

export default postsReducer;