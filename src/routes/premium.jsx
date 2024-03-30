import { Outlet, Navigate } from 'react-router-dom'

const PremiumRoutes = () => {
    let auth = {'token':false}
    // Base on Redux initialize auth JSON
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PremiumRoutes