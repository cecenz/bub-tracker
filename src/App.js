import React from "react";
import ActivityAdder from "./ActivityAdder";
import { ThemeProvider } from "styled-components";
import { yellow, blue, green, purple, pink } from "./themes";

import "./globalStyles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Today</h1>
      </header>
      <div>
        <ThemeProvider theme={yellow}>
          <ActivityAdder />
        </ThemeProvider>
      </div>
      {/* <Card theme={yellow} />
      
      <Card theme={blue} />
      <Card theme={green} />
      <Card theme={purple} />
      <Card theme={pink} />       */}
    </div>
  );
}

export default App;
