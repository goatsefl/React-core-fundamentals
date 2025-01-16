import React from "react";
import Comment from "./Comment";


export default function Post({ username, isAdmin, theme }) {
    return (
        <div>
            {isAdmin && <button>Delete</button>}
            <h2>Example Post Title</h2>
            <p>This is an example post content</p>
            <Comment username={username} isAdmin={isAdmin} theme={theme}></Comment>
        </div>
    );
}