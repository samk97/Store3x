import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token':false}
    // Base on Redux initialize auth JSON
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes