import { Route, Switch, Redirect } from 'react-router-dom';

import Heroes from './pages/Heroes';
import Details from './pages/Details';
import Groups from './pages/Groups';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='heroes' />
        </Route>

        <Route path='/heroes' exact>
          <Heroes />
        </Route>

        <Route path='/heroes/:heroId'>
          <Details />
        </Route>

        <Route path='/groups'>
          <Groups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
