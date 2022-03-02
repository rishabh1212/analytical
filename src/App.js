import SideNav from "./components/sidenav/SideNav";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/pages/Home";

function App(){
 return(
   
   <div className="App"> 
    
    <Topbar/>
    <div className="container">
    
    <SideNav/>
    
    <Home/>
    
    </div>
  </div>
 );
}
export default App;




