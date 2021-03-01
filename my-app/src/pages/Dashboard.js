import {Component} from 'react'
import Content from '../components/Content'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      actors: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    fetch("https://akabab.github.io/starwars-api/api/all.json")
    .then(res => res.json())
    .then(data => this.setState({actors: data}))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div class="bg-fixed flex flex-wrap overflow-hidden lg:-mr-5 " style={{backgroundImage: "url('https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg')"}}>
        {
          this.state.actors.map(actor => {
            return <Content key={actor.id} actor={actor}/>
          })
        }
      </div>
    )
  }

}

export default Dashboard;
