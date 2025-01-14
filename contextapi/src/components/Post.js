import React from "react";
import Comment from "./Comment";


export default function Post({ userInfo }) {
    return (
        <div>
            {userInfo.isAdmin && <button>Delete</button>}
            <h2>Example Post Title</h2>
            <p>This is an example post content</p>
            <Comment username={userInfo.username} isAdmin={userInfo.isAdmin}></Comment>
        </div>
    );
}