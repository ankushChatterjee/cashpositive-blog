export default function loginAction(loggedIn){
    return (dispatch)=>{
        dispatch({type:'ACTION_LOGIN_CHANGE',payload:loggedIn});
    }

}