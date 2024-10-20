import './App.css'
import { Home } from './components/ui/Home'
import CardsContainer from './components/ui/CardsContainer';
import Description from './components/ui/Description';
import { Navbar } from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Video from './components/ui/Video';
function App() {
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Endpoints', link: '#services' },
  ];

  return (
    <div style={{ overflowY: 'auto' }}>
      <Navbar navItems={navItems} />
      <Home />
      <Description />
      <CardsContainer />
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;