import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { set_data, fblogin } from "../../store/action";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={()=>this.props.fblogin()}>FB Login</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,  
});
const dispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  fblogin: () => dispatch(fblogin()),
});

export default connect(mapStateToProps,dispatchToProps)(Home);
