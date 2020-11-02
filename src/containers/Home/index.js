import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {set_data} from '../../store/action'
class Home extends Component {
    render() {
        return (
            <div>
              <h1>Home</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    users:state.users
})  
const dispatchToProps = (dispatch) =>({
    set_data:(data)=>dispatch(set_data(data))
})  


export default connect()(Home)