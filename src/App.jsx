import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Profile from './views/Profile/Profile';
import Layout from './components/Layout/Layout';
import { UserProvider } from './context/UserContext';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}
