
import { useEffect, useState } from "react"
import { BrowserRouter as Browser , Routes, Route, Navigate } from "react-router-dom"
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"
import {firebase} from "../firebase/firebase.config"
import { useDispatch } from "react-redux"
import { login } from "../actions/auth"
import {PrivateRoute} from '../router/PrivateRoute'
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {

  const dispatch = useDispatch()

  //Checking true: Revisando estado de firebase
  const [checking, setChecking] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  
    
  }, [dispatch,setChecking,setIsLoggedIn])
  

  if(checking){
    return (
      <h1>Espere...</h1>
    )
  }
  return (
    <Browser>
        <Routes>
            <Route path="/" element={ 
            <PrivateRoute logged={isLoggedIn}>
              <JournalScreen/> 
            </PrivateRoute>
            }>

              
            </Route>

            <Route path="/auth/*" element={ 
              <PublicRoute logged={isLoggedIn}>
                <AuthRouter></AuthRouter> 
              </PublicRoute>
            }>
           </Route>
           <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
    
    </Browser>
  )
}
