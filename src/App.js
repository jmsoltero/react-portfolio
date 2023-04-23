import './App.css';
import NavigationBar from './screens/navigationbar/NavigationBar';
import Particles from './Particles';
import Header from './screens/header/Header';
import AboutMe  from './screens/aboutMe/aboutMe';
import Tech from './screens/tech/Tech';

function App() {
  return (
  <div className='App'>
      < NavigationBar />
      < Header />
      < Particles />
      < AboutMe />
      < Tech />
  </div>
  );}

export default App;
