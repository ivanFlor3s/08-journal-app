
import { BrowserRouter as Browser , Routes, Route } from "react-router-dom"
import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"


export const AppRouter = () => {
  return (
    <Browser>
        <Routes>
            <Route path="/" element={ <JournalScreen/> }/>

            <Route path="/auth" element={ <AuthRouter></AuthRouter> }/>
               
        </Routes>
    
    </Browser>
  )
}
