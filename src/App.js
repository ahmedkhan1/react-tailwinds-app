import './App.css';
import Cards from './Cards';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  const heading = "";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='Sidebar-container'>
        <div className='Sidebar-company-logo'>
          <h1>Company Logo</h1>
        </div>
        <hr />
        <div className='Sidebar-nav-links-container'>
          <ul>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/users'>Users</a></li>
            <li><a href='/contacts'>Contacts</a></li>
            <hr />
            <li><a href='/settings'>Settings</a></li>
          </ul>
        </div>
      </div>
      <div className='sidebar-content-container'>
        <Dashboard heading={"Dashboard"} />
      </div>
    </div>
  );
}

export default App;
