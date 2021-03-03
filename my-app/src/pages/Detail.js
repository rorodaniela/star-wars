import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Detail() {
    const {id} = useParams()
    const {actors} = useFetch(`id/${id}`)
    
    return(
        <div className="Collections">
            <h1 className="text-white text-5xl  font-extrabold text-center pt-10">{actors.name} Informations</h1>
            <p class="text-gray-300 text-center pt-5 pb-5">This information is secret so be careful</p>

            <div class="h-full mx-40 mt-10">
                <div class="block md:flex">
                    <div class=" md:w-60 p-4 sm:p-6 lg:p-8 bg-gray-800 shadow-xl">
                        <img class="w-60 border" src={actors.image} alt={actors.name}/>
                    </div>

                <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div class="rounded shadow-2xl p-6">
                    <div class="flex flex-wrap overflow-hidden lg:-mx-5">

                        <div class="w-full overflow-hidden lg:my-5 lg:px-5 lg:w-1/3">
                            <div className="pl-5">
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Name</h1>
                                    <div class="flex">
                                    <h1 class="border-1  rounded-r px-4 py-2 w-full" > {actors.name} </h1>
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Born Location</h1>
                                    <h2 class="border-1  rounded-r px-4 py-2 w-full" > {actors.bornLocation}</h2>
                                </div>
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Gender</h1>
                                    <h2 class="border-1  rounded-r px-4 py-2 w-full" > {actors.gender}</h2>
                                </div>
                            </div>
                        </div>

                        <div class="w-full overflow-hidden lg:my-5 lg:px-5 lg:w-2/3 ">
                            <div className="pl-20">
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Home World</h1>
                                    <div class="flex">
                                    <h1 class="border-1  rounded-r px-4 py-2 w-full" > {actors.homeworld} </h1>
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Species</h1>
                                    <h2 class="border-1  rounded-r px-4 py-2 w-full" > {actors.species}</h2>
                                </div>
                                <div class="pb-1">
                                    <h1 class="font-semibold text-gray-700 block pb-1">Cybernetics</h1>
                                    <h2 class="border-1  rounded-r px-4 py-2 w-full" > {actors.cybernetics}</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>

            </div>

            </div>
        </div>
    )
}