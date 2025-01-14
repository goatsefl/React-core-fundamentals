import React from "react";


export default function Comment({ userInfo }) {
    return (
        <div>
            <p>Logged in as {userInfo.username}</p>
            {userInfo.isAdmin && <button>Edit comment</button>}
        </div>
    )
}