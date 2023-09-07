import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  // react-router-dom 사용
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // Router를 사용하여 페이지 이동
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;