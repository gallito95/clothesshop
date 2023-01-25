import Home from "./Routes/Home/homeComponent";
import {Routes,Route} from "react-router-dom"
import Navigation from "./Routes/Navigation/navigationComponent";
import Shop from "./Routes/Tets/Shop";
import SignIn from './Routes/sign-in/signInComponent'

const App = () => {
 
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/> }/> 
      <Route path="shop" element={<Shop/>}/>        
      <Route path="sign-in" element={<SignIn/>}/>        
      </Route>    
      
    </Routes>
  );
}

export default App;
