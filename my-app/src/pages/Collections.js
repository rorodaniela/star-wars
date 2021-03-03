import { useSelector } from "react-redux";
import FavCard from "../components/FavCard";

export default function Collections() {
    const { collections } = useSelector((state) => state.collectionsReducer);
    console.log(collections, "<< collection actor");

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
                                <FavCard actor={actor} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
