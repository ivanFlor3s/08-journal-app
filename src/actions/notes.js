
import { db } from "../firebase/firebase.config"
import { types } from "../types/types"
import {loadNotes} from '../helpers/loadNotes'

/*
 CAMBIO EN REGLAS FIREBASE
    rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
        match /{document=**} {
        allow read, write: if true;
            }
        }
    }
  NUEVAS REGLAS => solo para usuarios autenticados
        allow read, write: if request.auth != null;

 */





export const startNewNote = ()=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth


        const newNote = {
            title:'',
            body: '',
            date: new Date().getTime()
        }

        //Creo coleccion de notes en firestore
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(doc.id, newNote))
    }
}

export const startLoadingNotes= (uid)=>{
    return async (dispatch)=>{
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

const activeNote = (id, note)=>({
    type: types.notesActive,
    payload: {id,...note}
})

export const setNotes = (notes)=>({
    type: types.notesLoad,
    payload: notes
})

