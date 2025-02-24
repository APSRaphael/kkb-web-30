import React, { Component } from "react";
import { createBrowserHistory, createMemoryHistory, createHashHistory } from "history";
import Router from "./Router";
class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createHashHistory();
  }
  render() {
    return <Router history={this.history} children={this.props.children} />;
  }
}

export default BrowserRouter;
