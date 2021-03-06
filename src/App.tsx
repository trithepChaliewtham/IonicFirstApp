import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonButton, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Body from './pages/Body';
import Loginresult from './pages/Loginresult';
import Avatapg from './pages/Avatarpg';
import AvatarDetail from './pages/AvatarDetail';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/body" component={Body} />
        <Route path="/Loginresult/:user" component={Loginresult} />
        <Route path="/avatar" component={Avatapg} />
        <Route path="/avatar/:info" component={AvatarDetail} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
