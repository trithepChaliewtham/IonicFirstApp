import React , { useState } from 'react';

import { 
  IonButton,
  IonIcon,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  useIonToast
} from '@ionic/react';
import { star } from 'ionicons/icons';
//
// import { Component } from 'react';
// import { ToastController } from '@ionic/react';
const Body: React.FC = () => {
  const [ username , setUsername ] = useState<string>("");
  const [ password , setPassword ] = useState<string>("");
  const [ present , dismiss ] = useIonToast();
  // const target = e.target as HTMLTextAreaElement;
  const onLogin = () => {
    // console.log("SSS");
    alert("Clicked Login!");
  }
  const formHandle = async () => {
    // const res = await;
    alert(`${username} ${password}`);
  }
  return (
      <IonContent>
        <IonButton 
            style={{marginLeft : "45%" ,marginTop : "1%"}}
            onClick={() =>
              present(
                {
                  buttons: [{text: "Show more information", handler: () => alert("Hello World") }],
                  message:"Hello Toast",
                }
              )
            }
          >
          Greeting Button
          {console.log(present)}
        </IonButton>
        <IonList>
          <IonItem >
              <IonLabel position="floating"><i>Username</i></IonLabel>
              <IonInput 
                  name="name" 
                  value={username} 
                  onIonChange={(e: any)=> setUsername(e.target.value)}
                >
                  
              </IonInput>
          </IonItem>
          <br/>
          <IonItem>
              <IonLabel position="floating"><i>Password</i></IonLabel>
              <IonInput name="pass"></IonInput>
          </IonItem>
        </IonList>

        <IonButton >Login</IonButton>

        {/*-- Colors --*/}
      </IonContent>
  )
};

export default Body;