import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Tailwinds App </p>
        <Navbar />
      </header>
      <div className='Sidebar-container'>
        <div className='Sidebar-company-logo'>
          <h1>Company Logo</h1>
        </div>
        <div className='Sidebar-nav-links-container'>
          <ul>
            <li><a href='/dashboard'></a>Dashboard</li>
            <li><a href='/users'></a>Users</li>
            <li><a href='/settings'></a>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
