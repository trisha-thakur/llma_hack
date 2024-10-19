import './App.css'
import { Home } from './components/ui/Home'
import CardsContainer from './components/ui/CardsContainer';
import Description from './components/ui/Description';
import { Navbar } from './components/ui/Navbar';

function App() {
  // Define navItems to pass to the Navbar
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Endpoints', link: '#services' },
    // { name: 'Contact', link: '#contact' },
  ];

  return (
    <div style={{ overflowY: 'auto' }}>
      {/* Pass navItems as a prop */}
      <Navbar navItems={navItems} />
      <Home />
      <Description />
      <CardsContainer />
    </div>
  );
}

export default App;