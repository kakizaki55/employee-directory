import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import CreateEditProfile from './views/CreateEditProfile/CreateEditProfile';
import RegisterLogin from './views/RegisterLogin/RegisterLogin';
import Profile from './views/Profile/Profile';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login">
            <RegisterLogin />
          </Route>
          <Route path="/register">
            <RegisterLogin isSigningUp />
          </Route>
          <PrivateRoute path="/profile/edit">
            <CreateEditProfile isEditing />
          </PrivateRoute>
          <PrivateRoute path="/profile/create">
            <CreateEditProfile />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
