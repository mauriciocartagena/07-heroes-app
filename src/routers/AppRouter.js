import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {


    const { user } = useContext( AuthContext );

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ user.logged }
                        
                    /> 
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashBoardRoutes }
                        isAuthenticated={ user.logged }
                    /> 
                </Switch>
            </div>
        </Router>
    )
}
