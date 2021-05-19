import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {ROUTES} from './constants/routes';
import Dashboard from './views/Dashboard';
import Login from './views/Login';

interface IAuthState {
  fullName: string;
  emailAddress: string;
  rememberMe: boolean;
  isLoggedIn: boolean;
}

interface IAction {
  type: 'AUTHORIZE' | 'UNAUTHORIZE';
  payload: IAuthState
}

const InitialAuthState: IAuthState = {
  fullName: '',
  emailAddress: '',
  rememberMe: false,
  isLoggedIn: false
}

const AuthReducer = (state: IAuthState, action: IAction) => {
  switch (action.type) {
    case 'AUTHORIZE':
      return action.payload;
    case 'UNAUTHORIZE':
      return InitialAuthState;
    default:
      return state;
  }
}

interface IAuthContext {
  state: IAuthState,
  dispatch: React.Dispatch<IAction> | null
}

export const AuthContext = React.createContext<IAuthContext>({ state: InitialAuthState, dispatch: null })


const ProtectedRoute = ({ isLoggedIn, path, children }: { isLoggedIn: boolean, path: string, children: JSX.Element }) => {
  return isLoggedIn ? <Route path={path}>{children}</Route> : <Redirect to={ROUTES.LOGIN} />;
}


function App() {
  const [state, dispatch] = useReducer(AuthReducer, InitialAuthState)
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Router>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <ProtectedRoute isLoggedIn={state.isLoggedIn} path={ROUTES.DASHBOARD}>
            <Dashboard />
          </ProtectedRoute>
          <Route render={() => <Redirect to={ROUTES.DASHBOARD} />} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
