import {useRef} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Authenticate({toggleLoggedIn}){
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            console.log("no match")
        }else{
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                return user;
                // ...
            }).then((user)=>toggleLoggedIn(user))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
            
        }
    }

    return(
        <div className="authentication">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" ref={emailRef}/>
                <input type="password" placeholder="password" ref={passwordRef}/>
                <input type="password" placeholder="confirm password" ref={confirmPasswordRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}