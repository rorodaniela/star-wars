import {Component} from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="App">
        <Navbar/>
        <Dashboard/>
      </div>
    )
  }

}

export default App;
