import React , { useState } from 'react';

import Loginresult from './Loginresult';
import { 
  IonButton,
  IonIcon,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonItemDivider,
  IonListHeader,
  useIonToast
} from '@ionic/react';
import { star } from 'ionicons/icons';
//

const Body = ({history}:any) => {
  const [ username , setUsername ] = useState<string>("");
  const [ password , setPassword ] = useState<string>("");
  const [ selected , setSelected ] = useState<string>("Not Selected");
  const [ age , setAge ] = useState();
  const [ price , setPrice ] = useState(0); 
  const [ maxperson , setMaxperson] = useState(0);
  const [ present , dismiss ] = useIonToast();
  
  const dataobj = {
    username:username,
    password:password,
    age : age,
    course:{
      name : selected,
      price : price,
      maxperson : maxperson,
    },
  }
  
  const jsondata = JSON.stringify(dataobj);
  const formhandle = async(e:any) => {
        e.preventDefault();
        if (username != "" && password != ""){
          history.push(`/Loginresult/${jsondata}`)
        } 

  } 
  return (
      <IonContent>
        <IonButton 
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
        </IonButton>
        <br/>
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
                <IonInput name="pass"
                    value={password} 
                    onIonChange={(e: any)=> setPassword(e.target.value)}
                ></IonInput>
            </IonItem>
            <br/>
            <IonItem>
                <IonLabel position="floating"><i>Age</i></IonLabel>
                <IonInput name="pass"
                    value={age} 
                    onIonChange={(e: any)=> setAge(e.target.value)}
                ></IonInput>
            </IonItem>
            <div style={{marginLeft : "5%"}}>
                <IonRadioGroup  
                    value={selected}
                    onIonChange={
                        (e) => {
                          setSelected(e.detail.value);
                          setMaxperson(
                            e.detail.value == "comsci" ? 
                              25 : 
                            e.detail.value == "chinease" ? 
                              25 :   
                            e.detail.value == "communication" ? 
                              15 : 0
                          );
                          setPrice(
                            e.detail.value == "comsci" ? 
                              2500 : 
                            e.detail.value == "chinease" ? 
                              2000 :   
                            e.detail.value == "communication" ? 
                              1500 : 0
                          );
                        }
                    }>
                   
                    <IonListHeader style={{marginLeft : "2%" , fontSize : '25px'}}>
                      <IonLabel>Course</IonLabel>
                    </IonListHeader>
                    <IonItem>
                      <IonLabel>COMPUTER-2500 Baht, (25Person/class)</IonLabel>
                      <IonRadio slot="start" id="1" value="comsci" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>CHINEASE LANGUAGES - 2000 Baht (25Person/class) </IonLabel>
                      <IonRadio slot="start" id="2" value="chinease" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>COMMUNICATION SKILL - 1500 Baht (15Person/class)</IonLabel>
                      <IonRadio slot="start" id="3" value="communication" />
                    </IonItem>
                </IonRadioGroup>
                <IonItemDivider>Your Selection</IonItemDivider>
                <IonItem>{selected ?? '(none selected'}</IonItem>
              </div>
        </IonList>
      
        <IonButton 
            // onClick={() => <Loginresult user={username} pass={password} />}
            onClick={formhandle}
        >
            Login
        </IonButton>
        <br/>
        <br/>
        <IonButton
            href="/home"
            routerDirection="back"
        > 
            To previous page
        </IonButton>
        {/*-- Colors --*/}
      </IonContent>
  )
};

export default Body;