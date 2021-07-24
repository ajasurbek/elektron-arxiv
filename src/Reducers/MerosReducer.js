import { SET_MAIN_TABLE_DATA, SET_MODAL, SET_ROW_ID,SET_LOADING, SET_VALUES } from "../Actions/MerosTypes";

const initialState = {
  mainTableData: [],
  modal: { open: false, title: "" },
  values: {},
  rowId: null,
  openSide: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_TABLE_DATA:
      return {
        ...state,
        mainTableData: action.payload,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case SET_VALUES:
      return {
        ...state,
        values: action.payload,
      };
      case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ROW_ID:
      return {
        ...state,
        rowId: action.payload,
      };

    default:
      return state;
  }
};
