import data from '../initaldata';
export default function blogReducer(state={
    articles:data,
    loggedIn:false
},action){
    switch(action.type){
        case 'ACTION_LOGIN_CHANGE':
            return {...state,loggedIn:action.payload};
        break;
        case 'ACTION_ADD':
            art =[];
            for(a of articles){ // To deep copy array of objects
                art.push({...a});
            }
            art.push(action.payload);
            return {...state,articles:art};
        break;
    }

}