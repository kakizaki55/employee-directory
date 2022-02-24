import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Layout from './components/Layout/Layout';
import './App.css';
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route>
          <Home />
        </Route>
      </Layout>
    </BrowserRouter>
  );
}
