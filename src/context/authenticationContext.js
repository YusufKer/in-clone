import { createContext, useState } from "react";
const { Provider, Consumer } = createContext();

function AuthenticationContextProvider(props){
    const [loggedIn, setLoggedIn] = useState();
    const [user, setUser] = useState(null);
    const toggleLoggedIn = (success) =>{
        if(success){
            setLoggedIn(true);
            setUser(success);
        }
    }
    return(
        <Provider value={{loggedIn,toggleLoggedIn,user}}>
            {props.children}
        </Provider>
    )
}

export {AuthenticationContextProvider, Consumer};
