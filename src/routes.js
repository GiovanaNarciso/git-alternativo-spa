import { Switch, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';
import Pesquisa from './pages/Pesquisa';
import Perfil from './pages/Perfil';

function Routes() {
  return (
    <div className="container-lg">
      <Switch>
        <Route path='/' exact component={Perfil} />
        <Route path='/perfil/:usuario' component={Perfil} />

        <Route path='/pesquisa' component={Pesquisa} />
        <Route path='/contact' component={Disabled} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
