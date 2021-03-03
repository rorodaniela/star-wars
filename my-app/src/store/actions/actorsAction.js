export const saveFetch = (actors) => {
    console.log(actors, "<<< actors dari action");
    return {
        type: 'ACTORS/FETCH',
        actors: actors
    }
}

export const fetchDetail = (actor) => {
    console.log(actor, "<<< actor dari action");
    return {
        type: "ACTOR/FETCH",
        actor: actor,
    };
};