import React from 'react';
import HomePage from "./HomePageComponent/HomePageComponent"
import ShopPage from "./Shop/ShopComponent"
import { Switch, Route } from "react-router-dom"



function App () {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
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
