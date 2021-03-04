let initialCollections = {
    collections: [],
    loading: true,
    errMsg: ''
}

const collectionsReducer = (state = initialCollections, action)=> {
    switch (action.type) {
        case "COLLECTIONS/ADD": 
            return {...state, collections: state.collections.concat(action.favActor), loading: false}   
        case "COLLECTIONS/REMOVE": 
            return {...state, collections: action.favActor, loading: false} 
        default:
            return  state
    }
}
export default collectionsReducer