import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    let auth = {'token':true}
    // Base on Redux initialize auth JSON
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PublicRoutes;