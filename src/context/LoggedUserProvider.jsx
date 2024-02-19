import React, { useState } from "react";
import { loggedUserContext } from "./loggedUserContext";

const LoggedUserProvider = ({children}) => {

    const [userEmail, setUserEmail] = useState('')

    return(
    <loggedUserContext.Provider value={{userEmail, setUserEmail}}>
        {children}
    </loggedUserContext.Provider>
    )
}

export default LoggedUserProvider