export default function Loading() {
    return (
        <div className="container flex place-content-center">
            <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_aBZEgS.json"
                background="transparent"
                speed="1"
                style={{width: "300px", height: "300px"}}
                loop
                autoplay
            ></lottie-player>
            {/* <h1 className="text-white text-5xl  font-extrabold text-center pt-40">
                loading...
            </h1> */}
        </div>
    );
}
