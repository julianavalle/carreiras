import { Route, Switch, Redirect } from 'react-router-dom';

import Heros from './pages/Heros';
import Details from './pages/Details';
import Groups from './pages/Groups';

function App() {
  return (
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
  );
}

export default App;
