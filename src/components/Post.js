import "./post.css"
import Avatar from "@mui/material/Avatar"

export default function Post({username="test user",caption="This is a test caption",imageURL="./testing"}){
    
    return(
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageURL}
                />
                <h3 className="post__username">{username}</h3>
            </div>
            
            {/* header -> avatar + username */}
            <img className="post__image" src={imageURL} alt="image"/>
            {/* Image */}
            <h4 className="post__caption"><strong>{username}:</strong> {caption}</h4>
            {/* username + caption */}
        </div>
    )
}