
import { db } from "../firebase/firebase.config"

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
        console.log(doc)

    }
}

