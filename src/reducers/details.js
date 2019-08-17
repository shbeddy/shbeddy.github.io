function details(state={
    loading:true,
    data:{}
},action){
    switch(action.type){
        case 'DATAILS_SUCC':
            return {
                // loading:false,
                data:action.data.data
            }
        default:
            return state
    }
}
export default details
