import React , { useState, useEffect } from 'react';
import { useRouteMatch, RouteComponentProps } from "react-router-dom";
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
interface LoginresultProps
  extends RouteComponentProps<{
    user: string;
  }> {}
const Loginresult: React.FC<LoginresultProps> = ({match}) => {
  const data = JSON.parse(match.params.user);
  const tax = 0.02;
  const final_price = (data.course.price) + data.course.price * tax;
  console.log(data)
  return (
      <IonContent>
      
        <IonList>
          <IonItem >
                  Welcome : {data.username}
          </IonItem>
          <IonItem >
                  Age : {data.age}
          </IonItem>
          <IonItem >
                {/*<IonList>
                  <></IonItem>
                </IonList>*/}
                  Course |
                  <IonList style={{marginLeft : "5%"}}>
                           NAME : {data.course.name}<br/>
                  </IonList>
                  <IonList style={{marginLeft : "10%"}}>
                    
                           STUDENT : {data.course.maxperson - 5} / {data.course.maxperson}<br/>
                  </IonList>
                  <IonList style={{marginLeft : "10%"}}>
                           PRICE : {data.course.price} Baht
                  </IonList>
          </IonItem>
          <IonItem >
                  Tax : {tax}%
          </IonItem>
          <IonItem >
                  Final Cost : {final_price}
          </IonItem>
        </IonList>

        <br/>
        
        <IonButton
            href="/body"
            routerDirection="back"
        > 
            To previous page
        </IonButton>
        <IonButton
            href="/home"
            routerDirection="back"
        > 
            To Home page
        </IonButton>
      </IonContent>
  )
};

export default Loginresult;