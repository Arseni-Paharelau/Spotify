import React from 'react';
import Logo from "../components/logo";
import Title from "../components/title";
import Navigate from "../components/navigate";

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

App.propTypes = {};
App.defaultProps = {};

export default App;
