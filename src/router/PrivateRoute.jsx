import { useEffect } from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({logged, children}) => {

    useEffect(() => {
    }, [logged])
    
     
  return  logged ? children : <Navigate to="/auth/login" />
}
