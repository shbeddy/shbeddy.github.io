function user(state={
    data:{}
},action){
    switch(action.type){
        case 'USER_UPDATA_SUCC':
            // console.log(action);
            return {
                data:action.data.data
            }
        default:
            return state
    }
}
export default user
