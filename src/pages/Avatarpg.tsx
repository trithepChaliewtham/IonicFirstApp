import React , { useState, useEffect } from 'react';
import { Redirect, Route  } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import { 
	IonAvatar,
	IonItem,
	IonList,
	IonLabel,
	IonContent,
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonIcon,
	IonInput,
} from '@ionic/react';

import { add } from 'ionicons/icons';


const Avatarpg:React.FC = ({history}:any) => {
	const [ ids , setId ] = useState("1");
	const [ names , setName ] = useState("Picture 1");
	const [ urls , setUrl ] = useState("");
	const [ avatarlist , setAvatarlist ] = useState(
		[
			// {
			// 	id : ids,
			// 	name : names,
			// 	url : "https://picsum.photos/200/300"
			// },
			{
				id : "1",
				name : "Picture 1",
				url : "https://picsum.photos/200/300"
			},
			
		]
	);

	const update = (id:any , names:any) => {
		console.log(id, names)
		// setName(names);
		// avatarlist[id].name = names;
	}
	
	const addHandle = async(e:any) =>{
		e.preventDefault();
		setAvatarlist([...avatarlist , {
				id : (parseInt(avatarlist[avatarlist.length - 1].id) + 1).toString(),
				name : `Picture ${(parseInt(avatarlist[avatarlist.length - 1].id) + 1)}`,
				url : "https://picsum.photos/150/300", 
		}])
	}

	return (
		<IonContent style={{textAlign : ''}}>
			<h1>Avatar</h1>
			<IonButton 
				color=""
				style={{marginTop : '' , marginLeft: '2%'}}
				onClick={addHandle}
			>
				Add Picture
			</IonButton>
			<IonGrid>
		        <IonRow style={{marginTop : '2%'}}>
					{
						avatarlist.map(item => 
							<>
								<IonCol size="8" size-sm="8" style={{align:'center'}}>
									<IonAvatar >
										<img src={item.url} />
									</IonAvatar>
									<IonItem>
										<IonLabel><b>Id :</b> {item.id}</IonLabel>
										<IonLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Name :</b></IonLabel>
										<IonInput 
											id={item.id}
											name="name"
											value={item.name}
											onIonChange={(e:any) => setName(e.target.value)} 
											placeholder={item.name}></IonInput>
										<IonButton
											// name={item.name}
											onClick={(e)=>{
												try{
													alert(item.id)
													update(item.id,item.name);
													// avatarlist[parseInt(item.id) - 1].name = names;
												}catch(err){
													console.log(err)
												}
											}}
										>
											Save
										</IonButton>
									</IonItem>
						        </IonCol>
						        <IonCol size="8" size-sm="4" style={{marginTop : '4%'}}>
							        <IonButton  
								        onClick={async(e) => {
								        	const dataobj = {
											    id : item.id,
											    name : item.name,
											    // url : item.url,
										    }
										    const jsondata = await JSON.stringify(dataobj);
								        	history.push(`/avatar/${jsondata}`);
								        }}
							        >
						          		<IonIcon icon={add} />
						          	</IonButton>
						        </IonCol>
							</>
						)
					}
			        
			    </IonRow>
		    </IonGrid>
			
			<br/>
			<IonButton
				style={{marginTop : '2%'}}
				href="/"
                routerDirection="back"
			>
				To previous page
			</IonButton>
		</IonContent>
	)
}

export default Avatarpg;