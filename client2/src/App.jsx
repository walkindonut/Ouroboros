import './App.css';
import Nav from './components/Nav';
import MainApp from './components/MainApp';
//import Signin from './components/forms/Signin';
//import Signup from './components/forms/Signup';
import Profile from './components/forms/EditProfile';
import Password from './components/forms/EditPassword';
import TicketPage from './components/TicketPage';


function App() {
  return (
    <>
      <Nav />
      <MainApp half={false}>

        <TicketPage />
      </MainApp>
    </>
  );
}

export default App;