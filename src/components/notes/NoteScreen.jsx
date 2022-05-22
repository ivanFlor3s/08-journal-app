import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";
import { activeNote } from "../../actions/notes";

export const NoteScreen = () => {

  const dispatch = useDispatch()

  //Renombro active to note
  const {active: note} = useSelector(state=>state.notes)

  const [ formValues, handleInputChange, reset] = useForm(note)

  const { body, title} = formValues

  //uso useRef para tener el id de la nota
  //USE REF almaceno una variable mutable que no va a redibujar el componente si cambia
  const activeId = useRef(note.id)

  useEffect(()=>{
    //Solo disparar el reset cuando cambia el note.id
    if(activeId.current !== note.id){
      reset(note)
      activeId.current = note.id
    }
  },[note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}))
      
  }, [dispatch, formValues])
  

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className="notes__textarea"
          placeholder="What happen today?"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        { note.url &&
        <div className="notes__image">
          <img
          className="notes__image__img"
            src={note.url}
            alt="imagen-note"
          />
        </div>}
      </div>
    </div>
  );
};
