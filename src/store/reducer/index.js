const INITIAL_STATE={
    users:[{
        name:"Rehan",
        email:"rehanmum0@gmail.com" 
    },
    {
        name:"Fahad",
        email:"fh@gmail.com",
    }    
    ]
}
export default(state =INITIAL_STATE,action)=>{
    switch (action.type) {
        case "SETDATA":
            return({
                ...state,
                users:[...state.users,action.data]
            })    
        default:
            return state;
    }
}