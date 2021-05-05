import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {DashboardScreen} from "../components/admin/DashboardScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { TableUsers } from "../components/ui/admin/TableUsers";


export const Approuter = () => {
    return (


        <Router>
            <div>
                
                <Switch>

                    <Route exact
                        path='/login'
                        component={LoginScreen} />
                    <Route exact
                        path='/register'
                        component={RegisterScreen}/>
                    <Route exact path='/admin-panel' component={DashboardScreen} />
                    
                    <Route exact path='/users' component ={TableUsers}/>
                    
                </Switch>
        
            </div>

        </Router>
        
       
    )
}
