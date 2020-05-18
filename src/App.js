import React from 'react';
import HomePage from "./HomePageComponent/HomePageComponent"
import { Switch, Route } from "react-router-dom"


const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App () {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </div>
    )
}
export default App;
/*
* function App() {
  return (
    <div >
      <h1>Klannels</h1>
      <HomePage />
    </div>
  );
}
*/
