import React from 'react';
import HomePage from "./HomePageComponent/HomePageComponent"
import ShopPage from "./Shop/ShopComponent"
import { Switch, Route } from "react-router-dom"
import { SignInSignOut } from "./Sign-Up-Sign-In-Forms/SignComponent";
import { auth } from "./Firebase/Firebase.utils";
import { Header } from "./Header/HeaderComponent"



class App extends React.Component {
    constructor () {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    // auth changes in the app

    render () {

        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signIn" component={SignInSignOut}/>
                </Switch>
            </div>
        )
    }
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
