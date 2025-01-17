import React from "react";
import "../styles.css"


export default function Comment({ username, isAdmin }) {
    return (
        <div>
            <p>Logged in as {username}</p>
            {isAdmin && <button>Edit comment</button>}
        </div>
    )
}