import { Route, Switch, Redirect } from 'react-router-dom';

import Heros from './pages/Heros';
import Details from './pages/Details';
import Groups from './pages/Groups';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='heros' />
        </Route>

        <Route path='/heros' exact>
          <Heros />
        </Route>

        <Route path='/heros/:heroId'>
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
