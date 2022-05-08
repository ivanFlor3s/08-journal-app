import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          className="notes__textarea"
          placeholder="What happen today?"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HfYHmqkZPU9ImjiYjUMIsK94eaDaQ364fg&usqp=CAU"
            alt="imagen-note"
          />
        </div>
      </div>
    </div>
  );
};
