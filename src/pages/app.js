import React from 'react';
import Logo from "../components/Logo";
import Title from "../components/Title";
import Navigate from "../components/Navigate";

function App() {
  return (
    <div className="App container">
      <header>
        <Logo />
        <Title />
      </header>
      <nav><Navigate /></nav>
      <div>Some Page</div>
    </div>
  );
}

export default App;
