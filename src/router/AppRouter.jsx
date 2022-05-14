
import { useEffect } from "react"
import { BrowserRouter as Browser , Routes, Route, Navigate } from "react-router-dom"
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"
import {firebase} from "../firebase/firebase.config"
import { useDispatch } from "react-redux"
import { login } from "../actions/auth"


export const AppRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
        dispatch(login(user.uid, user.displayName))
      }
    })
  
    
  }, [])
  

  return (
    <Browser>
        <Routes>
            <Route path="/" element={ <JournalScreen/> }/>

            <Route path="/auth/*" element={ <AuthRouter></AuthRouter> }>
           </Route>
           <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
    
    </Browser>
  )
}
