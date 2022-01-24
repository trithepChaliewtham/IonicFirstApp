import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol, 
} from '@ionic/react';
  
const Home = ({history}:any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HELLO WORLD</IonTitle>
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
      <IonGrid>
          <IonRow>
              <IonCol size="12" size-sm="2" >
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
              </IonCol>
              <IonCol size="12" size-sm="10">
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
              </IonCol>
              <IonCol>
                <div>--------------------------------------------------------------------------------</div>
                <IonButton
                      // onClick={(e)=>{
                      //     e.preventDefault();
                      //     history.push('/body')
                      //   }
                      // }
                      href="/avatar"
                      routerDirection="forward"
                  > 
                      To Avatar page
                  </IonButton>
              </IonCol>
        </IonRow>
      </IonGrid>
      
    </IonPage>
  );
};

export default Home;
