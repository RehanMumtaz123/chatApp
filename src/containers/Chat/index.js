import React, { Component } from 'react';
import {connect} from 'react-redux';
class index extends Component {
    render() {
        console.log("hwat users::::>",this.props);
        let user = this.props.current_user;
        return (
            <div>
                <h1>
                Chat Welcome ! {user.name}
                {user.name}{user.email}
                <img src={user.photo}/>
                </h1>
                    
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,  
  });
export default connect(mapStateToProps,null)(index);