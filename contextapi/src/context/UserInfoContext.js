import { createContext } from "react";


const UserInfoContext = createContext({
    username: "Guest",
    isAdmin: "false",
    theme: "light"
});


export default UserInfoContext;