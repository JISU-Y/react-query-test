import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import Home from "./components/Home.page"
import RQSuperHeros from "./components/RQSuperHeros.page"
import SuperHero from "./components/SuperHero.page"

const queryClient = new QueryClient() // prop 으로 넘길 queryClient 인스턴스

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heros">super heros</Link>
            </li>
            <li>
              <Link to="/rq-super-heros">react query super heros</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/super-heros">
              <SuperHero />
            </Route>
            <Route exact path="/rq-super-heros">
              <RQSuperHeros />
            </Route>
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
