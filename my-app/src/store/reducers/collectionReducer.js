let initialCollections = {
    collections: []
}

const collectionsReducer = (state = initialCollections, action)=> {
    switch (action.type) {
        case "COLLECTIONS/ADD": 
            return {...state, collections: state.collections.concat(action.favActor)}    
        default:
            return  state
    }
}
export default collectionsReducer