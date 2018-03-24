import data from '../initaldata';
export default function blogReducer(state={
    articles:data,
    loggedIn:false,
    username:""
},action){
    switch(action.type){
        case 'ACTION_LOGIN_CHANGE':
            return {...state,loggedIn:action.payload};
        break;
        case 'ACTION_ADD':
            let art =[];
            console.log(state);
            for(let a of state.articles){ // To deep copy array of objects
                art.push({...a});
            }
            art.push(action.payload);
            console.log(art);
            return {...state,articles:art};
        break;
        case 'ACTION_USERNAME':
            return {...state,username:action.payload};
        break;
        default:
            return state;
        break;
    }

}