import { Route ,Routes ,BrowserRouter } from "react-router-dom";
import SignInSide from "./login";
import Signup from "./Signup";
import Home from "./Home";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/signin' element={<SignInSide/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;