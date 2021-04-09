import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Game from "routes/Game";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Navigation from "components/Navigation"

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                {isLoggedIn ? (
                    <div>
                        test
                        {/* <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/game">
                            <Game userObj={userObj} />
                        </Route> */}
                        <Redirect from="*" to="/" />
                    </div>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    )
};

export default AppRouter;