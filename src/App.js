import SideNav from "./components/sidenav/SideNav";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/pages/Home";
import nihon_netsugen_logo from "./components/images/nihon_netsugen_logo.jpg";
import { Authenticator, View ,Image } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

const styles = {
  ViewLogo:{paddingTop:"50%", width:"100%"},
  container: { width: '100%', heigh:'100vh',
  margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 0 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: '#008B8B', color: 'white', outline: 'none', fontSize: 18,marginBottom:"0", padding: '12px 0px' }
}

const components = {
  Header() {
    // const { tokens } = useTheme();

    return (
     <View style={styles.ViewLogo}>
      
        <Image
          alt="Netsugen LOGO "
          src={nihon_netsugen_logo}
        />
     </View>
    );
  },
}
export default function App(){
return (
  <Authenticator components={components}>
    {({ signOut, user }) => (
      <div style={styles.container}>
        <div className="App"> 
          <Topbar/>
          <div className="container">
            <SideNav/>
            <Home/>
          </div>
        </div>
          {/* <iframe
        width="960"
        height="720"
        src="https://ap-northeast-1.quicksight.aws.amazon.com/sn/embed/share/accounts/337039655624/dashboards/7f675f16-f54f-40b4-a7d1-6f7ef15d38f1">
    </iframe> */}
        <button style={styles.button} onClick={signOut}>Sign out</button>   
      </div>
    )}
  </Authenticator>
)};
