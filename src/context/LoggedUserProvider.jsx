import React, { useState } from "react";
import { loggedUserContext } from "./loggedUserContext";

const LoggedUserProvider = ({children}) => {

    const [userEmail, setUserEmail] = useState('')
    const [admin, setAdmin] = useState('')

    return(
    <loggedUserContext.Provider value={{userEmail, setUserEmail, admin, setAdmin}}>
        {children}
    </loggedUserContext.Provider>
    )
}

export default LoggedUserProvider