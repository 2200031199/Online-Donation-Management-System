//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import MainNavBar from './main/MainNavBar';
  // import AdminNavBar from './admin/AdminNavBar';
// import Samplenavbar from './main/SampleNavBarenavbar';
// import Samplenavbar from './main/SampleNavBar';




function App() {
  return (
    <div className="App">
      
      <Router>
        
        <MainNavBar/>
        {/* <h2 align='center'><u>Online Donation Management System</u></h2><br/>  */}
        {/* <AdminNavBar/>    */}
      </Router>
    </div>
  );
}

export default App;
