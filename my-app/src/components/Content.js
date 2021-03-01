import { Component } from 'react';

class Content extends Component {
  constructor (props){
    super(props)
  }
  

  render (){
    return (
      <div className="w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/4">
        <div className="max-h-80 max-w-max bg-gray-900 shadow-lg rounded p-3">
            <div className="group relative max-h-60">
                <img className="object-cover object-scale-down max-h-60 md:w-72  rounded" src={this.props.actor.image} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </button>

                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" >
                            <path  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="p-0">
            <h3 className="text-white text-lg text-center pt-2">{this.props.actor.name}
            </h3>
            
            </div>
        </div>
      </div>
    )
  }
}

export default Content;
