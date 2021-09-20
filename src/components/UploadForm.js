import {useRef} from "react";
import {db} from "../firebase/firebaseConfig";
import {getStorage, ref, uploadBytes} from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore"; 

export default function UploadForm({user}){
    const storage = getStorage();
    const fileRef = useRef();
    const captionRef = useRef();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const fileName = fileRef.current.value.split("\\")[fileRef.current.value.split("\\").length - 1]
        await addDoc(collection(db, "posts"), {
            username:user.email,
            caption: captionRef.current.value,
            imageUrl: fileName,
            timestamp: Timestamp.fromDate(new Date())
        });
        const uploadRef = ref(storage,fileName);
        uploadBytes(uploadRef, fileRef.current.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            console.log(snapshot)
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