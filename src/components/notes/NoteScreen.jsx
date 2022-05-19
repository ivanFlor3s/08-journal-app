import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {

  //Renombro active to note
  const {active: note} = useSelector(state=>state.notes)
  console.log(note)
  const [ formValues, handleInputChange, reset] = useForm(note)
  console.log(formValues)
  const { body, title} = formValues

  //uso useRef para tener el id de la nota
  //USE REF almaceno una variable mutable que no va a redibujar el componente si cambia
  const activeId = useRef(note.id)
  useEffect(()=>{
    //Solo disparar el reset cuando cambia el note.id
    if(activeId !== note.id){
      reset(note)
      activeId.current = note.id
    }
  },[note, reset])

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className="notes__textarea"
          placeholder="What happen today?"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        { note.url &&
        <div className="notes__image">
          <img
          className="notes__image__img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HfYHmqkZPU9ImjiYjUMIsK94eaDaQ364fg&usqp=CAU"
            alt="imagen-note"
          />
        </div>}
      </div>
    </div>
  );
};
