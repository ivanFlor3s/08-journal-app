
import { db } from "../firebase/firebase.config"
import { types } from "../types/types"
import {loadNotes} from '../helpers/loadNotes'

import Swal from "sweetalert2"
import { fileUpload } from "../helpers/fileUpload"

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

export const activeNote = (id, note)=>({
    type: types.notesActive,
    payload: {id,...note}
})

export const setNotes = (notes)=>({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note)=>{
    return async (dispatch, getState)=>{
        const {uid} = getState().auth;

        if(!note.url){
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id;


        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refresNote(note.id, note))
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refresNote = (id, note)=>({
    type: types.notesUpdated,
    payload: {
        id,
        note:{
            id, ...note
    }
    }
})

export const startUploadImg = (file)=>{
    console.log(file)
    return async ( dispatch, getState )=>{

        const {active: activeNote} = getState().notes;

        Swal.fire({
            title:'Uplaoding',
            text:'Please wait...',
            allowOutsideClick: false,
            
        })
        Swal.showLoading()

        const fileUrl = await fileUpload(file)

        
        // dispatch(startSaveNote(activeNote))

        const updatedNote = {...activeNote, url:fileUrl}

        dispatch(startSaveNote(updatedNote))

        Swal.close()
    }
}
