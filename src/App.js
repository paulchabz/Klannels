import React from 'react';
import HomePage from "./HomePageComponent/HomePageComponent"
import ShopPage from "./Shop/ShopComponent"
import { Switch, Route } from "react-router-dom"
import { SignInSignOut } from "./Sign-Up-Sign-In-Forms/SignComponent";

import { Header } from "./Header/HeaderComponent"



function App () {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signIn" component={SignInSignOut} />
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
