import data from '../initaldata';
export default function blogReducer(state={
    articles:data,
    loggedIn:false,
    following:[],
    username:""
},action){
    console.log("follow",action);
    switch(action.type){
        case 'ACTION_LOGIN_CHANGE':
            return {...state,loggedIn:action.payload.loggedIn,username:action.payload.username};
        break;
        case 'ACTION_ADD':
            let art =[];
            for(let a of state.articles){ // To deep copy array of objects
                art.push({...a});
            }
            art.unshift(action.payload);
            return {...state,articles:art};
        break;
        case 'FOLLOW_ADD':
            console.log("follow",action.payload);
            let flw = [...state.following];
            flw.push(action.payload);
            console.log(flw);
            return {...state,following:flw};
        break;
        case 'FOLLOW_REMOVE':
            let fl = [...state.following];
            let index = fl.indexOf(action.payload);
            console.log("fl",fl);
            fl.splice(index,1);
            console.log(fl);
            return {...state,following:fl};
        break;
        default:
            return state;
        break;
    }

}