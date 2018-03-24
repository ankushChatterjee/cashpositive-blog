import data from '../initaldata';
export default function blogReducer(state={
    articles:data,
    loggedIn:false,
    username:""
},action){
    switch(action.type){
        case 'ACTION_LOGIN_CHANGE':
            return {...state,loggedIn:action.payload.loggedIn,username:action.payload.username};
        break;
        case 'ACTION_ADD':
            let art =[];
            for(let a of state.articles){ // To deep copy array of objects
                art.push({...a});
            }
            art.push(action.payload);
            return {...state,articles:art};
        break;
        default:
            return state;
        break;
    }

}