import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from '../../config/firebase'
import { get_users } from "../../store/action";
class index extends Component {
  constructor() {
    super();
    this.state = {
      chat_users: {},
      chats: [],
      message: "",
    };
  }
  uid_merge=(uid1,uid2)=>{
      if(uid1<uid2){
          return uid1+uid2;
      }else{
          return uid2+uid1
      }
  }

  sendMessage = () => {
    let useer=this.props.current_user;
    let chat_useer=this.state.chat_users;
     let mergu_uid=this.uid_merge(useer.uid,chat_useer.uid)
    firebase.database().ref('/').child(`chats/,${mergu_uid}`).push({
        message:this.state.message,
        name:useer.name, 
        uid:useer.uid, 
    })
    this.setState({message:""})
    // console.log(chat_useer)     
    // this.state.chats.push({
    //   message: this.state.message,
    // });
    // this.setState({
    //   chats: this.state.chats,
    //   message: "",
    // });
  };
  get_message=(uid)=>{
      firebase.database().ref('/').child(`chats/,${uid}`).on("child_added",(messages)=>{
          this.state.chats.push(messages.val())
          this.setState({
              chats:this.state.chats
          })
      })
  }
  clickchat = (user) => {
      this.setState({ chat_users: user });
      let useer=this.props.current_user;
    let mergu_uid=this.uid_merge(useer.uid,user.uid)
    console.log(mergu_uid)
      this.get_message(mergu_uid)
  };

  componentDidMount() {
    this.props.get_users();
  }
  render() {
    let user = this.props.current_user;
    // console.log("hwat users::::>", this.props.chats );
    return (
      <div>
        <h1>
          Chat Welcome ! 
          {/* {user.name}
          {user.name} */}
          {user.email}
          <img src={user.photo} />
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ backgroundColor: "gray" }}>
            <h4>Chat Users:</h4>
            <ul>
              {this.props.user.map((v, i) => {
                return (v.uid!=this.props.current_user.uid && <li key={i}><img src={v.photo} width="20" />
                    {v.name}
                    <button onClick={() => this.clickchat(v)}> Chat</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div style={{ width: 430, backgroundColor: "yellow" }}>
            {Object.keys(this.state.chat_users).length ? (
              <div>
                <h4>
                  <img src={this.state.chat_users.photo} width="20" />
                  {this.state.chat_users.name}{" "}
                </h4>
                <h4>Chat</h4>
                <ul>
                  {this.state.chats.map((v, i) => {
                    return <li key={i} style={{color: v.uid===user.uid ? "lightblue" : "red"}}>{v.message}</li>;
                  })}
                </ul>

                <input
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                  placeholder="Start Your Chat"
                />
                <button onClick={() => this.sendMessage()}>Send</button>
              </div>
            ) : (
              <h4>No User</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  current_user: state.current_user,
  user: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  get_users: () => dispatch(get_users()),
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
