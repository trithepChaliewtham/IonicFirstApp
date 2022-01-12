import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home = ({history}:any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer />*/}
      </IonContent>
        <IonButton
            // onClick={(e)=>{
            //     e.preventDefault();
            //     history.push('/home')
            //   }
            // }
            href="/home"
            routerDirection="back"
        > 
            To previous page
        </IonButton>
        <IonButton
            // onClick={(e)=>{
            //     e.preventDefault();
            //     history.push('/body')
            //   }
            // }
            href="/body"
            routerDirection="forward"
        > 
            To next page
        </IonButton>
    </IonPage>
  );
};

export default Home;
