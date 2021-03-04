import { useDispatch, useSelector } from "react-redux";
import FavCard from "../components/FavCard";
import { removeCollection } from "../store/actions/collectionAction";

export default function Collections() {
    const { collections } = useSelector((state) => state.collectionsReducer);
    const dispatch = useDispatch()
   
    const removedActor = (id) => {
        for (let i = 0; i < collections.length; i++) {
            let actor = collections[i];
            if (actor.id === id) {
                collections.splice(i, 1)
                dispatch(removeCollection(collections))
                break
            }
        }
    } 

    return (
        <div className="Collections">
            <div>
                <h1 className="text-white font-bold text-6xl text-center pt-28">
                    Your Collections
                </h1>
                <div class="flex flex-wrap overflow-hidden">
                    {collections.map((actor) => {
                        return (
                            <div class="w-full overflow-hidden lg:my-3 lg:px-3 lg:w-1/4">
                                <FavCard actor={actor} removedActor={removedActor} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
