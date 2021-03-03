export default function Error(props) {
  return (
    <div className="container flex place-items-center">
      <div className="border p-8 w-96">
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_GIyuXJ.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop autoplay></lottie-player>
        <h1 className="text-white text-xl font-bold w-100"> {props.errMsg} </h1>
      </div>
    </div>
  )
}