import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Collection from './pages/Collections'
import Detail from './pages/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export default function App() {
  return(
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/collections">
            <Collection/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
