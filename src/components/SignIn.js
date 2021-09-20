import {useRef} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({toggleLoggedIn}){
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            .then(userCredential =>{
                const user = userCredential.user;
                return user
            }).then(user => toggleLoggedIn(user))
            .catch(error =>{
                const errorCode = error.code;
                const errorMesage = error.message;
                console.log({errorCode,errorMesage});
            })
    }
    return(
        <div className="authentication">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <input type="password" placeholder="password" ref={passwordRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}