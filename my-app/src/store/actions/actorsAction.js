export const saveFetch = (url) => {
    return async(dispatch) => {
        try {
            const response = await fetch(
                `https://akabab.github.io/starwars-api/api/${url}.json`
            );
            const data = await response.json()

            switch (response.status) {
                case 200:
                    if (url === 'all') {
                        dispatch({
                            type: "ACTORS/FETCH",
                            actors: data,
                        });
                    } else {
                        dispatch({
                            type: "ACTOR/FETCH",
                            actor: data,
                        })
                    }
                    break;
                case 404:
                    throw new Error(
                        "The requested resource could not be found"
                    );
                default:
                    throw new Error(
                        "We had a problem with our server. Please try again later"
                    );
            }
        } catch (error) {
            console.log(error);
        }
    }
}
