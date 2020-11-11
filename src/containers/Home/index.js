import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { fblogin } from "../../store/action";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={()=>this.props.fblogin(this.props.history)}>FB Login</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,  
});
const mapdispatchToProps = (dispatch) => ({
  // set_data: (data) => dispatch(set_data(data)),
  fblogin: (history) => dispatch(fblogin(history)),
  
});

export default connect(mapStateToProps,mapdispatchToProps)(Home);
