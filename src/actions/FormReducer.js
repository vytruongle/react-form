const initialState = {
  arrStudent: [],
  modifyObj: {
    maSV: "",
    tenSV: "",
    Phone: "",
    Email: "",
  },
  index: -1,
  keyword: "",
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      let { arrStudent, modifyObj, index } = state;
      arrStudent.push(action.payload);
      modifyObj = {
        maSV: "",
        tenSV: "",
        Phone: "",
        Email: "",
      };
      index = "";
      state = { arrStudent, modifyObj, index };
      return { ...state };
    }
    case "MODIFY": {
      let { arrStudent, modifyObj } = state;
      modifyObj = arrStudent.find(
        (student) => student.maSV === action.payload.maSV
      );

      state = { arrStudent, modifyObj };
      return { ...state };
    }
    case "UPDATE": {
      let { arrStudent, modifyObj, index } = state;
      index = arrStudent.indexOf(modifyObj);
      arrStudent[index] = {
        maSV: action.payload.maSV,
        tenSV: action.payload.tenSV,
        Phone: action.payload.Phone,
        Email: action.payload.Email,
      };
      modifyObj = {
        maSV: "",
        tenSV: "",
        Phone: "",
        Email: "",
      };
      state = { arrStudent, modifyObj, index };
      return { ...state };
    }
    case "DELETE": {
      let { arrStudent, ...restParam } = state;
      let index = arrStudent.indexOf(
        (student) => student.maSV === action.payload.maSV
      );
      arrStudent.splice(index, 1);
      state = { arrStudent, ...restParam };
      return { ...state };
    }
    case "SEARCH": {
      state.keyword = action.payload;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export { FormReducer };
