import "./App.css";
// import {
//   BrowserRouter as Router,
//   // HashRouter as Router,
//   // MemoryRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
//   Prompt,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "./k-react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import _404Page from "./pages/_404Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>
        {/* Switch 独占路由：返回第一个匹配的 route 或者 redirect */}
        <Switch>
          {/* 如果不存在 Switch， component跟 render只有在匹配路由的情况下才渲染，children无论如何都渲染 */}
          <Route
            exact
            path="/"
            // children={() => <div>children</div>}
            render={() => <div>render</div>}
            component={HomePage}
          >
            {/* 这个也是 children ，优先级高*/}
            {/* children */}
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={ProductPage} />
          {/* 没有path 都匹配 */}
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
