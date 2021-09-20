import {useState, useEffect} from "react";
import {collection, onSnapshot} from "firebase/firestore"; 

import {db} from "./firebase/firebaseConfig"

import '@fontsource/roboto/300.css';
import "./app.css"

import {Consumer} from "./context/authenticationContext";

import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import UploadForm from "./components/UploadForm";
import Post from "./components/Post"

export default function App(){
    var loggedIn = false;
    const [posts, setPosts] = useState(null);
    const postsRef = collection(db, "posts");
    useEffect(()=>{
        const unsub = onSnapshot(postsRef, response =>{
            let postsPlaceholder = [];
            response.forEach(item => {
                postsPlaceholder.push((item.data()));
            })
            setPosts(postsPlaceholder)
        })
    },[])
    console.log(posts)
    return(
        <Consumer>
        {({loggedIn,toggleLoggedIn, user}) => {
            if(!loggedIn) return(
                <>
                <Signup toggleLoggedIn={toggleLoggedIn}/>
                <SignIn toggleLoggedIn={toggleLoggedIn}/>
                </>
            )
            else return(
                <div className="app">
                    <div className="app__header">
                        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
                    </div>
                    <UploadForm user={user}/>
                    {posts === null ? "loading" : posts.map((post, i)=><Post key={i} username={post.username} caption={post.caption} imageURL={post.imageURL}/>)}
                </div>
            )
        }
        }
        </Consumer>
    )
}

// return(
//     <div className="app">
//     <div className="app__header">
//         <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo"/>
//     </div>
//     <UploadForm/>
//     {posts === null ? "loading" : posts.map((post, i)=><Post key={i} username={post.username} caption={post.caption} imageURL={post.imageURL}/>)}
// </div> :
// <Authenticate/>
// )