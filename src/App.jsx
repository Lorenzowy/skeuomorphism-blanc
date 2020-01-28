import React, { Component } from "react";
import "./App.css";
import Components from "./Components.jsx";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Components />
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Components />
        </header>
      </div>
    );
  }
}

export default App;
