let initialActors = {
    actors: [],
    actor: {},
    loading: true,
    errMsg: ''
}

const actorsReducer = (state = initialActors, action)=> {
    switch (action.type) {
        case "ACTORS/FETCH":
            return { ...state, actors: action.actors, loading: false };
        case "ACTOR/FETCH":
            return { ...state, actor: action.actor, loading: false };
        default:
            return state;
    }
}
export default actorsReducer