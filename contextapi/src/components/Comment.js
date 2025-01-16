import React from "react";
import "../styles.css"


export default function Comment({ username, isAdmin, theme }) {
    const toggleBg = () => {
        theme = theme ? 'light' : 'dark'
    }

    return (
        <div className={theme}>
            <button onClick={toggleBg}>Light/Dark</button>
            <p>Logged in as {username}</p>
            {isAdmin && <button>Edit comment</button>}
        </div>
    )
}