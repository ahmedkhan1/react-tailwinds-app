import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

function App() {
  const list = [
    {
      name: "Dashboard",
      link: "/dashboard"
    },
    {
      name: "Users",
      link: "/users"
    },
    {
      name: "Contacts",
      link: "/contacts"
    },
    {
      name: "Settings",
      link: "/settings"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='Sidebar-container'>
        <div className='Sidebar-company-logo'>
          <img src="/assets/logo" />
        </div> 
        <hr />
        <div className='Sidebar-nav-links-container'>
          <ul>
            {list.map(res=>( 
              <li key={res}>
                <a href={res.link}>{res.name}</a>
              </li>)
            )}
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
