import {useEffect, useState} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import "./post.css"
import Avatar from "@mui/material/Avatar"

export default function Post({username="test user",caption="This is a test caption",imageUrl="bd-mobi07.png"}){
    const [src, setSrc] = useState();
    console.log({imageUrl});
    useEffect(()=>{
        const storage = getStorage();
        getDownloadURL(ref(storage, imageUrl))
          .then((url) => {
            setSrc(url)
          })
          .catch((error) => {
            console.log({error});
          });        
    },[])
    return(
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageUrl}
                />
                <h3 className="post__username">{username}</h3>
            </div>
            <img className="post__image" src={src} alt="image"/>
            <h4 className="post__caption"><strong>{username}:</strong> {caption}</h4>
        </div>
    )
}