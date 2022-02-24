import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import CreateEditProfile from './views/CreateEditProfile/CreateEditProfile';
import RegisterLogin from './views/RegisterLogin/RegisterLogin';
import Profile from './views/Profile/Profile';
import Layout from './components/Layout/Layout';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login">
            <RegisterLogin />
          </Route>
          <Route path="/register" isSigningUp>
            <RegisterLogin />
          </Route>
          <Route path="/profile/edit">
            <CreateEditProfile />
          </Route>
          <Route path="/profile/create" isCreating>
            <CreateEditProfile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
