import React, { Component } from "react";
import { connect } from "react-redux";

class TableProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStudent: [...this.props.arrStudent],
    };
  }

  renderStudentTable = () => {
    let { arrStudent, keyword } = this.props;

    if (keyword !== undefined) {
      arrStudent = arrStudent.filter(
        (student) =>
          student.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    }
    return arrStudent.map((student) => {
      return (
        <tr key={student.maSV}>
          <th>{student.maSV}</th>
          <td>{student.tenSV}</td>
          <td>{student.Phone}</td>
          <td>{student.Email}</td>
          <td>
            <button
              className="btn btn-info me-3"
              onClick={() => {
                this.props.onModify(student);
              }}
            >
              Chỉnh sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.onDelete(student);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  // static getDerivedStateFromProps(nextPorps, currentState) {
  //   //KHông sử dụng this
  //   if (nextPorps.index !== -1) {
  //     console.log(nextPorps);
  //   }
  //   return currentState;
  // }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderStudentTable()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrStudent: state.FormReducer.arrStudent,
    keyword: state.FormReducer.keyword,
    modifyObj: state.FormReducer.modifyObj,
    index: state.FormReducer.index,
    state: state.FormReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModify: (value) => {
      const action = {
        type: "MODIFY",
        payload: value,
      };
      dispatch(action);
    },
    onDelete: (value) => {
      const action = {
        type: "DELETE",
        payload: value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableProduct);
