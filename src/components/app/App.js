import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


import Main from "../../pages/main"

export default App=>{
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Main exact path="/"/>
                    <Route exact path=""/>
                </Switch>
            </Router>
        </div>
    )
}
