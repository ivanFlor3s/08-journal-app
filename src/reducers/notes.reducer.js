/**
 * {
 *  notes:[],
 *  active: null |
 *  active: {
 *      id: <FIREBASE ID>
 *      title:'',
 *      body: '',
 *      imageUrl:'',
 *      date: <DATE>
 *       }
 * }
 */

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: { ...action.payload },
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          //Actualizo la nota
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) =>
          note.id !== action.payload.id 
        ),
      };
    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: []
      };
    default:
      return state;
  }
};
