export default function FavCard(props) {
    return (
        <div className="py-4">
            <div className=" shadow-lg group container  rounded-md bg-white  w-60 flex justify-center items-center  mx-auto">
                <div>
                    <div className="h-10 image-cover rounded-t-md">
                        <img id="foto-actor" src={props.actor.image} />
                    </div>
                    <div className="py-5 px-4 bg-white w-60  rounded-b-md fd-cl group-hover:opacity-25">
                        <span className="block text-lg text-center text-gray-800 font-bold tracking-wide">
                            {props.actor.name}
                        </span>
                    </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <div className="pt-5 text-center">
                        <button className="text-center rounded-lg p-1 bg-white  text-gray-700 font-bold text-md">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
