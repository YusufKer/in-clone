import {useRef} from "react";
import {db} from "../firebase/firebaseConfig"
import { addDoc, collection, Timestamp } from "firebase/firestore"; 

// Add a new document in collection "cities"

export default function UploadForm({user}){
    console.log(user);
    const fileRef = useRef();
    const captionRef = useRef();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await addDoc(collection(db, "posts"), {
            username:"test user",
            caption: captionRef.current.value,
            imageUrl: fileRef.current.value,
            timestamp: Timestamp.fromDate(new Date())
        });
        captionRef.current.value = '';
        fileRef.current.value = '';
    }
    return(
        <form onSubmit={handleSubmit} className="uploadform">
            <input type="text" placeholder="caption" ref={captionRef}/>
            <input type="file" ref={fileRef}/>
            <button type="sdubmit">Add Post</button>
        </form>
    )
}