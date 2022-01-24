import React , { useState, useEffect } from 'react';
import { useRouteMatch, RouteComponentProps } from "react-router-dom";

import { 
	IonAvatar,
	IonChip,
	IonItem,
	IonList,
	IonLabel,
	IonContent,
	IonButton,
	IonGrid,
	IonRow,
	IonIcon,
	IonRouterOutlet,
	IonInput,
} from '@ionic/react';
interface AvatarDetailProps
  extends RouteComponentProps<{
    info: string;
  }> {}

const AvatarDetail: React.FC<AvatarDetailProps> = ({match}) => {
	const [ name , setName ] = useState();
	const [ url , setUrl ] = useState();
	const data = JSON.parse(match.params.info);
	console.log(data)
	return (
		<IonContent style={{textAlign:'center'}}>
				<h1>Result</h1>
				<IonList >
					<IonItem style={{textAlign:'center'}}>
		                <IonLabel position="floating"><i>ID</i></IonLabel>
		                <IonInput 
		                    name="id" 
		                    value={data.id} 
		                    // onIonChange={(e: any)=> setUsername(e.target.value)}
		                  >
		                    
		                </IonInput>
		            </IonItem>
					<IonItem style={{textAlign:'center'}}>
		                <IonLabel position="floating"><i>Name</i></IonLabel>
		                <IonInput 
		                    name="name" 
		                    value={data.name} 
		                    // onIonChange={(e: any)=> setUsername(e.target.value)}
		                  >
		                </IonInput>
		            </IonItem>
				</IonList>
				<IonButton href="/avatar">Back</IonButton>
		</IonContent>
	)
}

export default AvatarDetail;