import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import useFetch from "../hooks/useFetch";

export default function Detail() {
    const { id } = useParams();
    useFetch(`id/${id}`);
    const {actor, loading, errMsg} = useSelector((state) => state.actorsReducer)
    if (loading) {
        return(
            <div>
                <h1> loading...</h1>
            </div>
        )
    } else {

        let affiliations = []
        if (affiliations) {
            affiliations = actor.affiliations
        }

        return (
            <div className="Collections">
                <h1 className="text-white text-5xl  font-extrabold text-center pt-28">
                    {actor.name} Informations
                </h1>
                <p class="text-gray-300 text-center pt-5 pb-5">
                    This information is secret so be careful
                </p>

                <div class="h-full mx-40 mt-10">
                    <div class="block md:flex max-h-96">
                        <div class=" max-w-60 p-4 sm:p-6 lg:p-8 bg-gray-800 shadow-xl">
                            <img id="foto-detail"
                                class="border"
                                src={actor.image}
                                alt={actor.name}
                            />
                        </div>

                        <div style={{ backgroundColor: "rgba(245, 245, 245, 0.8)" }} className="w-full md:w-3/5 p-5 bg-white rounded lg:ml-4 shadow-md overflow-y-scroll" >
                            <div class="rounded shadow-2xl">
                                <div className="pl-5 over">
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Name
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.name} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Species
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.species} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Gender
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.gender} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Home World
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.homeworld} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Born Location
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.bornLocation} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Cybernetics
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1> {actor.cybernetics} </h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Affiliations
                                            </h1>
                                        </div>
                                        <div class="w-full mr-1 lg:my-2 lg:px-6 lg:w-1/2">
                                            <h1>{affiliations.join(", ")}</h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Hair Color
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1>{actor.hairColor}</h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Eye Color
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1>{actor.eyeColor}</h1>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap lg:-mx-6">
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1 class="font-semibold text-gray-700">
                                                Skin Color
                                            </h1>
                                        </div>
                                        <div class="w-full lg:my-2 lg:px-6 lg:w-1/3">
                                            <h1>{actor.skinColor}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
