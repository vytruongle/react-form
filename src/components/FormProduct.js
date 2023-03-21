import React, { Component } from "react";
import { connect } from "react-redux";
import TableProduct from "./TableProduct";

class FormProduct extends Component {
  state = {
    maSV: "",
    tenSV: "",
    Phone: "",
    Email: "",
    times: 0,
  };

  handleChange = (event) => this.props.onSearch(event.target.value);

  static getDerivedStateFromProps(nextPorps, currentState) {
    //KHông sử dụng this
    if (nextPorps.modifyObj.maSV.length > 0 && currentState.times === 0) {
      currentState.maSV = nextPorps.modifyObj.maSV;
      currentState.tenSV = nextPorps.modifyObj.tenSV;
      currentState.Phone = nextPorps.modifyObj.Phone;
      currentState.Email = nextPorps.modifyObj.Email;
      currentState.times += 1;
    }
    return currentState;
  }

  render() {
    let { onAdd, onUpdate, modifyObj } = this.props;

    return (
      <div className="container">
        <div className="mb-4">
          <h1 className="p-3 m bg-dark text-white">Thông tin sinh viên</h1>
          <form>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="maSV" className="form-label">
                    Mã SV
                  </label>
                  {modifyObj.maSV > 0 ? (
                    <input
                      type="text"
                      className="form-control"
                      id="maSV"
                      value={this.state.maSV}
                      disabled
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      id="maSV"
                      value={this.state.maSV}
                      placeholder="Nhập mã sinh viên"
                      onChange={(event) =>
                        this.setState({ maSV: event.target.value })
                      }
                    />
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="tenSV" className="form-label">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenSV"
                    value={this.state.tenSV}
                    placeholder="tên sinh viên"
                    onChange={(event) =>
                      this.setState({ tenSV: event.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="SDT" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="SDT"
                    value={this.state.Phone}
                    placeholder="Nhập số điện thoại"
                    onChange={(event) =>
                      this.setState({ Phone: event.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="emailSV" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailSV"
                    value={this.state.Email}
                    placeholder="Nhập email sinh viên"
                    onChange={(event) =>
                      this.setState({ Email: event.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </form>

          {modifyObj.maSV > 0 ? (
            <button
              className="btn btn-success"
              onClick={() => {
                onUpdate(this.state);
                this.setState({
                  maSV: "",
                  tenSV: "",
                  Phone: "",
                  Email: "",
                });
              }}
            >
              Cập nhật
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => {
                onAdd(this.state);
                this.setState({
                  maSV: "",
                  tenSV: "",
                  Phone: "",
                  Email: "",
                });
              }}
            >
              Thêm sinh viên
            </button>
          )}
          <div className="my-3">
            <h3>Tìm kiếm</h3>
            <input className="w-100" onChange={this.handleChange} />
          </div>
        </div>

        <TableProduct />
      </div>
    );
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    onAdd: (value) => {
      const action = {
        type: "ADD",
        payload: value,
      };
      dispatch(action);
    },
    onSearch: (value) => {
      const action = {
        type: "SEARCH",
        payload: value,
      };
      dispatch(action);
    },
    onUpdate: (value) => {
      const action = {
        type: "UPDATE",
        payload: value,
      };
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state.FormReducer,
    modifyObj: state.FormReducer.modifyObj,
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(FormProduct);
