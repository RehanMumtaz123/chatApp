import firebase from '../../config/firebase';


const fblogin = (history) => {

  return(dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        let create_user={
          name:user.displayName,
          email:user.email,
          photo:user.photoURL,
          uid:user.uid,
        }

        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
        .then(()=>{
          dispatch({ type: "SETUSER", payload: create_user });

          alert("login successful")
          history.push('/chat')
        })
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        console.log("error==>",errorMessage)
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
};
const get_users = () => {
  return (dispatch) => {
    let user = []
    firebase.database().ref('/').child('users').on('child_added',(data)=>{
      user.push(data.val())
    })
    dispatch({type:"SETFIREBASEUSERS", payload:user})
  };
};


export { 
  get_users,
   fblogin };
