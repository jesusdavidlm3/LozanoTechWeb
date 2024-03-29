import { useEffect } from "react"
import NavBar from "../components/NavBar"
import { useNavigate, Outlet } from "react-router-dom"

export const Root = () => {

    const navigate = useNavigate()
    useEffect( () => navigate('home'), [] )

    return(
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    )
}
