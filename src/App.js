import React, { Component } from "react";
import AppRoutes from "./routes/AppRoutes/AppRoutes";
import PostContextPovider from "./components/context/PostContextProvider";

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <PostContextPovider>
        <AppRoutes />
      </PostContextPovider>
    );
  }
}

export default App;
