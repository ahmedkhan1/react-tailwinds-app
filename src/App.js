import './App.css';
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
        <h1>{heading}</h1>
        <div className='total-users-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
