export const addCollection = (actor) => {
    return {
        type: 'COLLECTIONS/ADD',
        favActor: actor
    }
}

export const removeCollection = (actor) => {
    return {
        type: 'COLLECTIONS/REMOVE',
        favActor: actor
    }
}