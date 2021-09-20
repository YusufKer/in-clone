import reactDom from "react-dom";
import App from "./App";
import {AuthenticationContextProvider} from "./context/authenticationContext"

reactDom.render(
    <AuthenticationContextProvider>
        <App/>
    </AuthenticationContextProvider>,
    document.getElementById("root"));