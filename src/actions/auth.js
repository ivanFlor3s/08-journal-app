import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebase.config'

export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(login(123,'pedro'))
        }, 2000);
    }
}


export const startGoogleLogin =()=>{
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const startEmailRegister = (email, password, name)=>{
    //Como es async tengo que pasar un callback
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user} )=> { 
                //Una vez creado el registro, agrego el name en el displayName
                await user.updateProfile({displayName:name})
                //Luego logueo al usuario registrado a la aplicacion
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName }
});
