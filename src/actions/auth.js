import { types } from "../types/types";
import {firebase, googleAuthProvider} from '../firebase/firebase.config'
import { startLoading, stopLoading } from "./ui";

import Swal from 'sweetalert2'


export const startLoginEmailPassword = (email, password)=>{
   
    return (dispatch)=>{
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName))
             })
             .catch(err => {
                 console.error(err)
                    Swal.fire('Error', err.message,'error')
                })
             .finally(()=> dispatch(stopLoading()))
            
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
            .catch(err => {
                console.error(err)
                Swal.fire('Error', err.message,'error')
            })

    }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName }
});

export const startLogout = ()=>{
    return async (dispatch)=>{
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout= ()=>{
    return {
        type: types.logout
    }
}