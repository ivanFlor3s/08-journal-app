import { types } from "../types/types";

const initialState = {
  loading: false,
  msgErrors: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgErrors: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgErrors: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiStopLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
