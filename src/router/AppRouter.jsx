
import { BrowserRouter as Browser , Routes, Route, Navigate } from "react-router-dom"
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"


export const AppRouter = () => {
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
