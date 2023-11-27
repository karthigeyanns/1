import { Route ,Routes ,BrowserRouter } from "react-router-dom";
import SignupPage from "./LoginSignup/Sign";
import Home from "./Home";
import Login from "./LoginSignup/Login";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/signin' element={<SignupPage/>}/>
            <Route path='/log' element={<Login/>}/>
            <Route path='/hom' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App;