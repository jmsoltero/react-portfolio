import './App.css';
import NavigationBar from './screens/navigationbar/NavigationBar';
import Particles from './Particles';
import Header from './screens/header/Header';
import AboutMe  from './screens/aboutMe/aboutMe';
import Tech from './screens/tech/Tech';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';

function App() {
  return (
  <div className='App'>
      < NavigationBar />
      < Header />
      < Particles />
      < AboutMe />
      < Tech />
      < Portfolio />
      < ContactMe />
  </div>
  );}

export default App;
